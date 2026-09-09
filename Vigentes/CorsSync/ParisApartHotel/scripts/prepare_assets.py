from pathlib import Path
import sys

from PIL import Image, ImageOps


ASSETS = {
    "IMG_7471 - Copia (3) (3).JPG": "fachada-panoramica.webp",
    "WhatsApp Image 2026-08-10 at 12.38.00 (1).jpeg": "fachada-principal.webp",
    "IMG_7480 (1).JPG": "entrada-hotel.webp",
    "IMG_7489 (1).JPG": "estacionamento.webp",
    "WhatsApp Image 2026-08-10 at 12.38.00 (2).jpeg": "recarga-eletrica.webp",
    "WhatsApp Image 2026-08-10 at 12.38.00.jpeg": "recarga-eletrica-frontal.webp",
    "IMG_7629.JPG": "apartamento-familia.webp",
    "IMG_7589.JPG": "apartamento-duplo-azul.webp",
    "IMG_7580.JPG": "apartamento-familia-vermelho.webp",
    "WhatsApp Image 2026-08-10 at 12.38.02 (1).jpeg": "apartamento-casal.webp",
    "WhatsApp Image 2026-08-10 at 12.38.02 (3).jpeg": "apartamento-casal-compacto.webp",
    "WhatsApp Image 2026-08-10 at 12.38.03.jpeg": "banheiro-apartamento.webp",
    "IMG_7556.JPG": "cafe-da-manha-sala.webp",
    "IMG_7560.JPG": "sala-cafe-da-manha.webp",
    "IMG_7546.JPG": "cafe-da-manha-buffet.webp",
    "WhatsApp Image 2026-08-10 at 12.38.00 (3).jpeg": "cafe-da-manha-bolos.webp",
    "WhatsApp Image 2026-08-10 at 12.38.01.jpeg": "cafe-da-manha-completo.webp",
    "IMG_7521 (1).JPG": "lobby.webp",
    "IMG_7575.JPG": "recepcao.webp",
    "IMG_7507 (1).JPG": "lounge.webp",
    "WhatsApp Image 2026-08-10 at 12.38.01 (1).jpeg": "elevador.webp",
    "WhatsApp Image 2026-08-10 at 12.38.01 (4).jpeg": "galeria-paris.webp",
    "WhatsApp Image 2026-08-10 at 12.38.01 (3).jpeg": "detalhe-paris.webp",
}


def main():
    if len(sys.argv) != 3:
        raise SystemExit("Uso: prepare_assets.py <pasta-origem> <pasta-destino>")

    source = Path(sys.argv[1])
    destination = Path(sys.argv[2])
    destination.mkdir(parents=True, exist_ok=True)

    for source_name, output_name in ASSETS.items():
        image_path = source / source_name
        if not image_path.exists():
            raise FileNotFoundError(image_path)

        with Image.open(image_path) as image:
            image = ImageOps.exif_transpose(image).convert("RGB")
            image.thumbnail((2400, 2400), Image.Resampling.LANCZOS)
            image.save(
                destination / output_name,
                "WEBP",
                quality=84,
                method=6,
            )
            print(f"{source_name} -> {output_name} ({image.width}x{image.height})")


if __name__ == "__main__":
    main()
