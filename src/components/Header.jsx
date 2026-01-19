import { useState, useEffect } from 'react'
import Logo from './Logo'

function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.scrollY

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 100
        const sectionId = section.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'visible'
  }

  const handleNavClick = () => {
    setMobileMenuOpen(false)
    document.body.style.overflow = 'visible'
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <nav className="nav container">
        <a href="#" className="nav-logo" aria-label="Arkhe AI Home">
          <Logo className="logo-svg" />
          <span className="logo-text">ARKHE</span>
        </a>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="nav-menu">
          {['home', 'about', 'projects', 'services', 'technology', 'contact'].map(item => (
            <li key={item} className="nav-item">
              <a 
                href={`#${item}`} 
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={handleNavClick}
              >
                {item === 'home' ? 'Home' : 
                 item === 'about' ? 'Sobre' : 
                 item === 'projects' ? 'Projetos' : 
                 item === 'services' ? 'Serviços' : 
                 item === 'technology' ? 'Tecnologia' : 
                 'Contato'}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button 
            className="theme-toggle" 
            id="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            <svg className="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg className="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
          <button 
            className={`nav-toggle ${mobileMenuOpen ? 'active' : ''}`}
            id="nav-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
