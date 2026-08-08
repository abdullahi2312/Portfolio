import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import { FiArrowUp } from 'react-icons/fi'

const whatsappUrl = 'https://wa.me/252612666168?text=Hello%20Abdullaahi%20Hassan'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="border-t border-white/10 bg-card/40">
        <div className="site-container py-10 sm:py-12">
          <div className="grid gap-9 text-center md:grid-cols-[1.3fr_0.7fr_0.7fr] md:text-left">
            <div>
              <a
                href="#home"
                className="inline-block font-heading text-2xl font-bold tracking-tight text-text"
                aria-label="AH - Back to home"
              >
                AH
              </a>
              <h2 className="mt-3 font-heading text-xl font-semibold text-text">
                Abdullaahi Hassan
              </h2>
              <p className="mt-1 text-text/65">Junior Full Stack Developer</p>
              <p className="mt-4 text-sm text-text/50">Built with React + Tailwind CSS</p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-text">Quick Links</h3>
              <ul className="mt-4 space-y-3 text-text/65">
                <li>
                  <a
                    href="https://github.com/abdullahi2312"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-primary"
                  >
                    <FaGithub aria-hidden="true" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-primary"
                  >
                    <FaWhatsapp aria-hidden="true" />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:text-right">
              <a
                href="#home"
                className="button-secondary gap-2"
                aria-label="Back to top"
              >
                <FiArrowUp aria-hidden="true" />
                Back To Top
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-text/50">
            <p>© {currentYear} Abdullaahi Hassan. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 grid size-13 place-items-center rounded-full bg-[#25D366] text-2xl text-white shadow-[0_12px_35px_rgba(37,211,102,0.3)] sm:bottom-6 sm:right-6 sm:size-14"
        aria-label="Chat with Abdullaahi Hassan on WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
    </>
  )
}

export default Footer
