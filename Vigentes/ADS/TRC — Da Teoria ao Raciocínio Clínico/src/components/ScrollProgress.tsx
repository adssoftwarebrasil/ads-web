import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScale(height > 0 ? scrollTop / height : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] bg-brand-brown z-[60]"
      style={{ transformOrigin: 'left center', transform: `scaleX(${scale})` }}
    />
  );
}
