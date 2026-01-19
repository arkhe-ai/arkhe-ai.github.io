import { useEffect, useRef } from 'react'
import Logo from './Logo'

function Hero() {
  const sectionRef = useRef(null)

  
  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('[data-animate]')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated')
        }
      })
    }, { threshold: 0.1 })

    elements?.forEach(el => observer.observe(el))

    return () => elements?.forEach(el => observer.unobserve(el))
  }, [])

  return (
    <section className="hero" id="home" ref={sectionRef}>
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-bg-grid"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="hero-content container">
        <div className="hero-layout">
          <div className="hero-text">
            <div className="hero-badge" data-animate="fade-up">
              <span className="badge-dot"></span>
              <span>Tecnologia que simplifica</span>
            </div>
            
            <h1 className="hero-title" data-animate="fade-up" data-delay="100">
              <span className="title-line">Seu negócio <span className="highlight">mais prático</span></span>
              <span className="title-line">com o poder da IA.</span>
            </h1>
            
            <p className="hero-description" data-animate="fade-up" data-delay="200">
              Automatizamos processos, eliminamos tarefas repetitivas e 
              entregamos soluções inteligentes para você focar no que importa.
            </p>
            
            <div className="hero-actions" data-animate="fade-up" data-delay="300">
              <a href="#contact" className="btn btn-primary">
                <span>Começar agora</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#about" className="btn btn-secondary">Saiba mais</a>
            </div>
          </div>

          <div className="hero-visual" data-animate="fade-left" data-delay="200">
            <div className="hero-card">
              <Logo className="hero-logo" />
              <div className="hero-card-orbit"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" data-animate="fade-up" data-delay="500">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
