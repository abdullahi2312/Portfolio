import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

const contactDetails = [
  {
    label: 'WhatsApp Number',
    value: '+252 612 666 168',
    href: 'https://wa.me/252612666168?text=Hello%20Abdullaahi%20Hassan',
    icon: FiPhone,
  },
  {
    label: 'Email',
    value: 'cabdulaahix099@gmail.com',
    href: 'mailto:cabdulaahix099@gmail.com',
    icon: FiMail,
  },
  {
    label: 'Location',
    value: 'Somalia',
    icon: FiMapPin,
  },
]

function Contact() {
  return (
    <section id="contact" className="section-spacing">
      <div className="site-container">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-card px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading text-text">Need a Website?</h2>
            <p className="mt-4 text-lg leading-8 text-text/70">
              Let&apos;s build something amazing together.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://wa.me/252612666168?text=Hello%20Abdullaahi%20Hassan"
                target="_blank"
                rel="noreferrer"
                className="button-primary gap-2"
              >
                <FaWhatsapp className="text-lg" aria-hidden="true" />
                Chat on WhatsApp
              </a>
             
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
            {contactDetails.map(({ label, value, href, icon: Icon }) => {
              const content = (
                <>
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-xl text-primary">
                    <Icon aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-text/55">{label}</p>
                    <p className="mt-1 break-words font-medium text-text">{value}</p>
                  </div>
                </>
              )

              return href ? (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-background/50 p-4"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-background/50 p-4"
                >
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
