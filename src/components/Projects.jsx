import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import businessImage from '../assets/project-business.png'
import ecommerceImage from '../assets/project-ecommerce.png'
import realEstateImage from '../assets/project-real-estate.png'

const projects = [
  {
    name: 'Real Estate',
    description: 'A modern real estate platform for discovering properties, exploring listings, and finding the perfect home.',
    image: realEstateImage,
    technologies: ['React', 'Tailwind CSS', 'Responsive Design'],
    liveUrl: 'https://real-estate-bay-rho.vercel.app/',
  },
  {
    name: 'E-commerce',
    description: 'A clean online store with product browsing, categories, customer accounts, and a modern shopping experience.',
    image: ecommerceImage,
    technologies: ['React', 'Tailwind CSS', 'E-commerce'],
    liveUrl: 'https://e-commerce-iota-ashen-85.vercel.app/',
  },
  {
    name: 'Business Management',
    description: 'A professional business platform presenting services, products, growth insights, and company information.',
    image: businessImage,
    technologies: ['React', 'Tailwind CSS', 'Business Website'],
    liveUrl: 'https://business-eta-seven.vercel.app/',
  },
]

function Projects() {
  return (
    <section id="projects" className="section-spacing">
      <div className="site-container">
        <h2 className="section-heading text-center text-text">Featured Projects</h2>

        <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map(({ name, description, image, technologies, liveUrl }) => (
            <motion.article
              key={name}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card"
            >
              <div className="aspect-[3/2] overflow-hidden border-b border-white/10 bg-background">
                <img
                  src={image}
                  alt={`${name} interface preview`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl font-semibold text-text">{name}</h3>

                <p className="mt-3 flex-1 leading-7 text-text/65">{description}</p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${name} technologies`}>
                  {technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button-primary flex-1 gap-2"
                    aria-label={`View ${name} live`}
                  >
                    <FiExternalLink aria-hidden="true" />
                    Live
                  </a>
                  <a
                    href="https://github.com/abdullahi2312"
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary flex-1 gap-2"
                    aria-label={`View ${name} source code on GitHub`}
                  >
                    <FaGithub aria-hidden="true" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
