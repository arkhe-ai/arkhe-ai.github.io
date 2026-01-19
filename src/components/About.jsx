import { useEffect, useRef } from 'react'

function About() {
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
    <section className="section about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <span className="section-tag">Sobre nós</span>
          <h2 className="section-title">A origem da <span className="highlight">inovação</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-content" data-animate="fade-right">
            <p className="about-text large">
              <strong>Arkhe</strong> vem do grego antigo <em>ἀρχή</em>, 
              significando "origem" ou "princípio". Representamos o 
              ponto de partida para uma nova era de tecnologia.
            </p>
            <p className="about-text">
              Fundada com a missão de democratizar a tecnologia, 
              a Arkhe AI desenvolve soluções que combinam tecnologia de ponta 
              com design centrado no usuário.
            </p>
            <p className="about-text">
              Nossa equipe multidisciplinar une expertise em AI, 
              engenharia de software e experiência do usuário para criar 
              produtos que realmente fazem a diferença.
            </p>
            
            <div className="about-features">
              {[
                'Tecnologia ética e responsável',
                'Foco em resultados mensuráveis',
                'Parcerias de longo prazo'
              ].map((feature, index) => (
                <div key={index} className="feature">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual" data-animate="fade-left">
            <div className="about-values">
              {[
                { number: '01', text: 'Simplicidade' },
                { number: '02', text: 'Impacto' },
                { number: '03', text: 'Inovação' }
              ].map((value, index) => (
                <div key={index} className="value-card">
                  <span className="value-number">{value.number}</span>
                  <span className="value-text">{value.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
