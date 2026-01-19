import { useEffect, useRef } from 'react'

function Technology() {
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

  const features = [
    'Modelos de IA de última geração',
    'Infraestrutura cloud escalável',
    'Arquiteturas seguras e performáticas',
    'Integração contínua e deploy automatizado'
  ]

  return (
    <>
      <section className="section technology" id="technology" ref={sectionRef}>
        <div className="container">
          <div className="tech-content">
            <div className="tech-text" data-animate="fade-right">
              <span className="section-tag">Tecnologia</span>
              <h2 className="section-title">Sempre na <span className="highlight">vanguarda</span></h2>
              <p className="tech-description">
                Trabalhamos com as tecnologias mais avançadas do mercado. 
                Modelos de IA de última geração, infraestrutura em nuvem 
                escalável e frameworks modernos garantem soluções robustas 
                e preparadas para o futuro.
              </p>
              
              <div className="tech-features">
                {features.map((feature, index) => (
                  <div key={index} className="tech-feature" data-animate="fade-up" data-delay={index * 100}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-visual" data-animate="fade-left">
              <div className="code-window">
                <div className="code-header">
                  <div className="code-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="code-title">arkhe_ai.py</span>
                </div>
                <div className="code-body">
                  <pre><code>{`from arkhe import AI

class IntelligentSolution:
    def __init__(self):
        self.model = AI.load("arkhe-v1")
        self.ready = True
    
    async def transform(self, data):
        # A magia acontece aqui ✨
        result = await self.model.process(data)
        return result.insights

# Iniciando o futuro
arkhe = IntelligentSolution()
await arkhe.transform(your_business)`}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="marquee-section">
        <div className="marquee">
          <div className="marquee-content">
            {['Inovação', 'Inteligência', 'Transformação', 'Futuro', 'Tecnologia', 'Inovação', 'Inteligência', 'Transformação', 'Futuro', 'Tecnologia'].map((word, index) => (
              <span key={index}>
                {word}
                <span className="marquee-dot"> ◆ </span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Technology
