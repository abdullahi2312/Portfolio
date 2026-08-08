import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiLayout, FiLink } from 'react-icons/fi'

const services = [
  {
    title: 'Frontend Development',
    description: 'Clean, responsive, and accessible interfaces built with React and Tailwind CSS.',
    icon: FiLayout,
  },
  {
    title: 'Backend Development',
    description: 'Reliable server-side applications built with Node.js, Express.js, and MongoDB.',
    icon: FiDatabase,
  },
  {
    title: 'Full Stack Development',
    description: 'Complete MERN Stack applications built from the user interface to the database.',
    icon: FiCode,
  },
  {
    title: 'API Development',
    description: 'Secure and scalable REST APIs that connect applications and services smoothly.',
    icon: FiLink,
  },
]

function Services() {
  return (
    <section id="services" className="section-spacing">
      <div className="site-container">
        <h2 className="section-heading text-center text-text">Services</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <motion.article
              key={title}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="card h-full"
            >
              <div className="grid size-12 place-items-center rounded-xl bg-primary/15 text-2xl text-primary">
                <Icon aria-hidden="true" />
              </div>

              <h3 className="mt-5 font-heading text-xl font-semibold text-text">
                {title}
              </h3>

              <p className="mt-3 leading-7 text-text/65">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
