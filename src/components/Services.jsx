import { useEffect, useRef } from 'react'

function Services() {
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

  const services = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      title: 'Desenvolvimento de IA',
      description: 'Modelos customizados para suas necessidades específicas. Desde classificação até geração de conteúdo.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: 'Aplicações Web & Mobile',
      description: 'Desenvolvimento de aplicações completas com interfaces intuitivas e performance otimizada.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      title: 'Consultoria Técnica',
      description: 'Orientação especializada em arquitetura, escalabilidade e melhores práticas de desenvolvimento.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      title: 'Automação Inteligente',
      description: 'Workflows automatizados com IA para otimizar processos e aumentar a produtividade.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 20V10"></path>
          <path d="M12 20V4"></path>
          <path d="M6 20v-6"></path>
        </svg>
      ),
      title: 'Analytics & BI',
      description: 'Dashboards inteligentes e análises avançadas para insights acionáveis em tempo real.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <path d="M3 9h18"></path>
          <path d="M9 21V9"></path>
        </svg>
      ),
      title: 'Front-End & Redesign',
      description: 'Reformulação visual de sites, interfaces modernas e experiências digitais que convertem.'
    }
  ]

  return (
    <section className="section services" id="services" ref={sectionRef}>
      <div className="container">
        <div className="section-header centered" data-animate="fade-up">
          <span className="section-tag">Nossos serviços</span>
          <h2 className="section-title">Soluções que <span className="highlight">transformam</span></h2>
          <p className="section-description">
            Desenvolvemos produtos e serviços de IA personalizados para 
            atender às necessidades específicas do seu negócio.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article key={index} className="service-card" data-animate="fade-up" data-delay={index * 100}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#contact" className="service-link">
                <span>Saiba mais</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
