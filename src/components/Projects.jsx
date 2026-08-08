import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import analyticsImage from '../assets/project-analytics.png'
import commerceImage from '../assets/project-commerce.png'
import managerImage from '../assets/project-manager.png'

const projects = [
  {
    name: 'MERN Commerce',
    description: 'A full-stack shopping platform with product discovery, cart management, and a streamlined checkout experience.',
    image: commerceImage,
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    name: 'Project Manager',
    description: 'A collaborative project workspace for organizing tasks, tracking progress, and managing team workflows.',
    image: managerImage,
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
  },
  {
    name: 'Analytics Dashboard',
    description: 'A responsive business dashboard that presents key metrics, sales trends, and recent activity clearly.',
    image: analyticsImage,
    technologies: ['React', 'JavaScript', 'Express.js', 'MongoDB'],
  },
]

function Projects() {
  return (
    <section id="projects" className="section-spacing">
      <div className="site-container">
        <h2 className="section-heading text-center text-text">Featured Projects</h2>

        <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map(({ name, description, image, technologies }) => (
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
                  <a href="#" className="button-primary flex-1 gap-2" aria-label={`View ${name} live demo`}>
                    <FiExternalLink aria-hidden="true" />
                    Live Demo
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
