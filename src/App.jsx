import { useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'

function App() {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  }

  const scrollToSection = (key) => {
    sectionRefs[key]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div className="relative bg-base min-h-screen">
      <Navbar sectionRefs={sectionRefs} onItemTap={scrollToSection} />

      <main>
        <HeroSection
          sectionRef={sectionRefs.home}
          onViewWorkPressed={() => scrollToSection('projects')}
          onGetQuotePressed={() => scrollToSection('contact')}
        />
        <AboutSection sectionRef={sectionRefs.about} />
        <ServicesSection sectionRef={sectionRefs.services} />
        <ProjectsSection sectionRef={sectionRefs.projects} />
        <ContactSection sectionRef={sectionRefs.contact} />
        <Footer />
      </main>
    </div>
  )
}

export default App
