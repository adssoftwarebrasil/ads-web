import { useEffect } from 'react'

function ScrollProgress() {
  useEffect(() => {
    let frame = null

    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight
      const progress = available > 0 ? Math.min(window.scrollY / available, 1) : 0
      document.documentElement.style.setProperty('--scroll-progress', progress)
      frame = null
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      document.documentElement.style.removeProperty('--scroll-progress')
    }
  }, [])

  return <div className="scroll-progress" aria-hidden="true"><span /></div>
}

export default ScrollProgress
