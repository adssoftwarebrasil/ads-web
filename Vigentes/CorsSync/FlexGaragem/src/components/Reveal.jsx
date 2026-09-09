import { useEffect, useRef } from 'react'

function Reveal({ as: Tag = 'div', className = '', delay = 0, children }) {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible')
          observer.unobserve(element)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -4% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={elementRef} className={`reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>
      {children}
    </Tag>
  )
}

export default Reveal
