import { useEffect, useRef, type RefObject } from 'react';
import { useFinePointer, useReducedMotion } from './useMediaQuery';

const POOL_SIZE = 5;
const ROTATIONS = [-3, -1, 1, 3];
const SCALES = [0.92, 1, 1.06, 0.96];

type Options = {
  rootRef: RefObject<HTMLElement>;
  layerRef: RefObject<HTMLElement>;
  /** Resolve o conjunto de imagens a exibir conforme a posição vertical do cursor. */
  getImages: (point: { x: number; y: number }) => string[];
  /** Seletor dos blocos de texto que a trilha deve contornar. */
  safeZoneSelector?: string;
  threshold?: number;
  lifetime?: number;
  onFirstShow?: () => void;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

/**
 * Trilha de fotos que segue o cursor sobre a seção de história.
 * Só roda em ponteiro fino e sem `prefers-reduced-motion`; no toque não há nada
 * para montar, então nem os nós do pool são criados.
 */
export function useImageTrail({
  rootRef,
  layerRef,
  getImages,
  safeZoneSelector = '',
  threshold = 96,
  lifetime = 1350,
  onFirstShow,
}: Options) {
  const finePointer = useFinePointer();
  const reducedMotion = useReducedMotion();
  const getImagesRef = useRef(getImages);
  const onFirstShowRef = useRef(onFirstShow);

  getImagesRef.current = getImages;
  onFirstShowRef.current = onFirstShow;

  useEffect(() => {
    const root = rootRef.current;
    const layer = layerRef.current;
    if (!root || !layer || !finePointer || reducedMotion) return;

    const pool = Array.from({ length: POOL_SIZE }, () => {
      const figure = document.createElement('figure');
      const image = document.createElement('img');
      figure.className = 'trail-image';
      figure.setAttribute('aria-hidden', 'true');
      image.alt = '';
      image.decoding = 'async';
      figure.append(image);
      layer.append(figure);
      return { figure, image, timer: 0 };
    });

    let imageIndex = 0;
    let poolIndex = 0;
    let shown = false;
    let lastPoint: { x: number; y: number } | null = null;
    let pendingPoint: { x: number; y: number } | null = null;
    let queued = false;

    const resolvePosition = (x: number, y: number, rootRect: DOMRect) => {
      const halfWidth = Math.min(95, rootRect.width * 0.08);
      const halfHeight = Math.min(120, rootRect.height * 0.055);
      let localX = x - rootRect.left;
      const localY = y - rootRect.top;

      if (safeZoneSelector) {
        root.querySelectorAll(safeZoneSelector).forEach((zone) => {
          const rect = zone.getBoundingClientRect();
          const left = rect.left - rootRect.left;
          const right = rect.right - rootRect.left;
          const top = rect.top - rootRect.top;
          const bottom = rect.bottom - rootRect.top;
          const inside = localX > left - 36 && localX < right + 36 && localY > top - 30 && localY < bottom + 30;
          if (!inside) return;
          localX = left >= rootRect.width - right ? left - halfWidth - 26 : right + halfWidth + 26;
        });
      }

      return {
        left: (clamp(localX, halfWidth + 8, rootRect.width - halfWidth - 8) / rootRect.width) * 100,
        top: (clamp(localY, halfHeight + 8, rootRect.height - halfHeight - 8) / rootRect.height) * 100,
      };
    };

    const show = (point: { x: number; y: number }) => {
      const images = getImagesRef.current(point);
      if (!images.length) return;

      const rootRect = root.getBoundingClientRect();
      const position = resolvePosition(point.x, point.y, rootRect);
      const item = pool[poolIndex % pool.length];
      poolIndex += 1;
      imageIndex %= images.length;

      window.clearTimeout(item.timer);
      item.image.src = images[imageIndex];
      item.figure.style.left = `${position.left}%`;
      item.figure.style.top = `${position.top}%`;
      item.figure.style.setProperty('--trail-rotation', `${ROTATIONS[imageIndex % ROTATIONS.length]}deg`);
      item.figure.style.setProperty('--trail-scale', String(SCALES[imageIndex % SCALES.length]));
      item.figure.classList.remove('is-leaving');
      requestAnimationFrame(() => item.figure.classList.add('is-visible'));

      if (!shown) {
        shown = true;
        onFirstShowRef.current?.();
      }

      item.timer = window.setTimeout(() => {
        item.figure.classList.remove('is-visible');
        item.figure.classList.add('is-leaving');
      }, lifetime);

      imageIndex += 1;
    };

    const render = () => {
      queued = false;
      const point = pendingPoint;
      pendingPoint = null;
      if (!point) return;
      if (!lastPoint || Math.hypot(point.x - lastPoint.x, point.y - lastPoint.y) >= threshold) {
        show(point);
        lastPoint = point;
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      pendingPoint = { x: event.clientX, y: event.clientY };
      if (queued) return;
      queued = true;
      requestAnimationFrame(render);
    };

    const onPointerLeave = () => {
      lastPoint = null;
      pendingPoint = null;
    };

    root.addEventListener('pointermove', onPointerMove, { passive: true });
    root.addEventListener('pointerleave', onPointerLeave);

    return () => {
      root.removeEventListener('pointermove', onPointerMove);
      root.removeEventListener('pointerleave', onPointerLeave);
      pool.forEach((item) => {
        window.clearTimeout(item.timer);
        item.figure.remove();
      });
    };
  }, [finePointer, layerRef, lifetime, reducedMotion, rootRef, safeZoneSelector, threshold]);

  return { enabled: finePointer && !reducedMotion };
}
