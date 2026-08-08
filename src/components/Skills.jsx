import { motion } from 'framer-motion'
import { FaCss3Alt } from 'react-icons/fa'
import {
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React.js', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
    ],
  },
  {
    title: 'Database',
    skills: [{ name: 'MongoDB', icon: SiMongodb }],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'VS Code', icon: VscCode },
      { name: 'Postman', icon: SiPostman },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="section-spacing">
      <div className="site-container">
        <h2 className="section-heading text-center text-text">Skills</h2>

        <div className="mt-10 grid items-start gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map(({ title, skills }) => (
            <article key={title} className="card">
              <h3 className="font-heading text-xl font-semibold text-primary">
                {title}
              </h3>

              <div className="mt-6 grid gap-3">
                {skills.map(({ name, icon: Icon }) => (
                  <motion.div
                    key={name}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-background/50 px-4 py-3.5"
                  >
                    <Icon className="shrink-0 text-xl text-primary" aria-hidden="true" />
                    <span className="font-medium text-text/85">{name}</span>
                  </motion.div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
