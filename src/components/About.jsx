import { motion } from 'framer-motion'
import profileImage from '../assets/hero-placeholder.png'

const informationCards = [
  {
    title: 'Experience',
    description: 'Junior Full Stack Developer',
  },
  {
    title: 'Projects',
    description: '10+ Completed Projects',
  },
  {
    title: 'Tech Stack',
    description: 'MERN Stack',
  },
  {
    title: 'Availability',
    description: 'Available for Freelance & Remote Work',
  },
]

function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="mx-auto w-full max-w-md">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-card">
            <img
              src={profileImage}
              alt="Professional placeholder portrait for Abdullaahi Hassan"
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <h2 className="section-heading text-text">About Me</h2>

          <p className="section-copy mt-5">
            I&apos;m a Junior Full Stack Developer focused on building clean, responsive, and scalable web applications with modern technologies.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {informationCards.map(({ title, description }) => (
              <motion.article
                key={title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="card h-full"
              >
                <h3 className="font-heading text-base font-semibold text-primary">
                  {title}
                </h3>
                <p className="mt-2 leading-7 text-text/75">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
