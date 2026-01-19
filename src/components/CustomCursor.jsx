import { useEffect, useState } from 'react'

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (window.innerWidth <= 768) return

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('mousemove', updatePosition)

    // Smooth animation
    let animationFrame
    const animate = () => {
      setCursorPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2
      }))
      setFollowerPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1
      }))
      animationFrame = requestAnimationFrame(animate)
    }
    animate()

    // Interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .service-card')
    
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      cancelAnimationFrame(animationFrame)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [position])

  if (window.innerWidth <= 768) return null

  return (
    <>
      <div 
        className={`cursor ${isActive ? 'active' : ''}`}
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px` 
        }}
      />
      <div 
        className={`cursor-follower ${isActive ? 'active' : ''}`}
        style={{ 
          left: `${followerPosition.x}px`, 
          top: `${followerPosition.y}px` 
        }}
      />
    </>
  )
}

export default CustomCursor
