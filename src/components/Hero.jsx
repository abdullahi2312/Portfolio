import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import heroImage from '../assets/hero-placeholder.png'

const developerTitle = 'Junior Full Stack Developer'

function Hero() {
  const [typedTitle, setTypedTitle] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const isComplete = typedTitle === developerTitle
    const isEmpty = typedTitle === ''
    const delay = isComplete ? 1400 : isEmpty && isDeleting ? 450 : isDeleting ? 45 : 85

    const typingTimer = window.setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true)
        return
      }

      if (isEmpty && isDeleting) {
        setIsDeleting(false)
        return
      }

      const nextLength = typedTitle.length + (isDeleting ? -1 : 1)
      setTypedTitle(developerTitle.slice(0, nextLength))
    }, delay)

    return () => window.clearTimeout(typingTimer)
  }, [typedTitle, isDeleting])

  return (
    <section id="home" className="site-container flex min-h-[calc(100vh-4.5rem)] items-center py-16 sm:py-20">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <p className="mb-3 font-heading text-xl font-medium text-text sm:text-2xl">
            Hi, I&apos;m
          </p>

          <h1 className="font-heading text-4xl font-bold leading-tight text-text sm:text-5xl xl:text-6xl">
            Abdullaahi Hassan
          </h1>

          <div className="mt-4 min-h-9 font-heading text-xl font-semibold text-primary sm:text-2xl">
            <span className="sr-only">{developerTitle}</span>
            <span aria-hidden="true">{typedTitle}</span>
            <span aria-hidden="true" className="ml-0.5 inline-block h-6 w-0.5 bg-primary align-middle sm:h-7" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text/70 sm:text-lg lg:mx-0">
            I build modern, fast, responsive, and scalable web applications using the MERN Stack.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#contact" className="button-primary">
              Hire Me
            </a>
            <a href="#projects" className="button-secondary">
              View Projects
            </a>
            <a href="/abdullaahi-hassan-cv.pdf" download className="button-secondary gap-2">
              <HiDownload className="text-lg" aria-hidden="true" />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
            <a
              href="https://github.com/abdullahi2312"
              target="_blank"
              rel="noreferrer"
              className="grid size-11 place-items-center rounded-full border border-white/15 bg-card text-xl text-text"
              aria-label="Visit Abdullaahi Hassan on GitHub"
            >
              <FaGithub aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/252612666168?text=Hello%20Abdullaahi%20Hassan"
              target="_blank"
              rel="noreferrer"
              className="grid size-11 place-items-center rounded-full border border-white/15 bg-card text-xl text-text"
              aria-label="Message Abdullaahi Hassan on WhatsApp"
            >
              <FaWhatsapp aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
          className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-md"
        >
          <div className="relative mx-auto aspect-[4/5] overflow-hidden rounded-[2rem] border border-primary/40 bg-card shadow-[0_0_70px_rgba(37,99,235,0.2)]">
            <div className="absolute inset-5 rounded-[1.5rem] border border-white/10" aria-hidden="true" />
            <img
              src={heroImage}
              alt="Professional placeholder portrait for Abdullaahi Hassan"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
