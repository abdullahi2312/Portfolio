import { useEffect, useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleNavigation = (id) => {
    setActiveSection(id)
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/95 backdrop-blur-sm">
      <nav
        className="site-container flex h-18 items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="font-heading text-2xl font-bold tracking-tight text-text"
          onClick={() => handleNavigation('home')}
          aria-label="AH - Home"
        >
          AH
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {navItems.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => handleNavigation(id)}
                  className={`border-b-2 py-2 text-sm font-medium ${
                    activeSection === id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-text/70 hover:text-text'
                  }`}
                  aria-current={activeSection === id ? 'page' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="button-primary"
            onClick={() => handleNavigation('contact')}
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg text-2xl text-text lg:hidden"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isMenuOpen ? <HiX aria-hidden="true" /> : <HiMenuAlt3 aria-hidden="true" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-background lg:hidden"
        >
          <div className="site-container py-5">
            <ul className="flex flex-col">
              {navItems.map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => handleNavigation(id)}
                    className={`block border-l-2 px-4 py-3 font-medium ${
                      activeSection === id
                        ? 'border-primary text-primary'
                        : 'border-transparent text-text/70'
                    }`}
                    aria-current={activeSection === id ? 'page' : undefined}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="button-primary mt-4 w-full"
              onClick={() => handleNavigation('contact')}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
