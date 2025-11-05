import { useState } from "react"
import Header from "./components/header"
import HeroSection from "./components/hero-section"
import AboutSection from "./components/about-section"
import ProjectsSection from "./components/projects-section"
import ServicesSection from "./components/services-section"
import ContactSection from "./components/contact-section"
import Footer from "./components/footer"

export default function App() {
  const [activeTab, setActiveTab] = useState("home")

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HeroSection setActiveTab={setActiveTab} />
      case "about":
        return <AboutSection />
      case "projects":
        return <ProjectsSection />
      case "services":
        return <ServicesSection />
      case "contact":
        return <ContactSection setActiveTab={setActiveTab} />
      default:
        return <HeroSection setActiveTab={setActiveTab} />
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background via-slate-900 to-primary/10">
      {/* Achtergrond-effecten */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content */}
      <main className="flex-1 container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-42">
        <div className="animate-fade-in">{renderContent()}</div>
      </main>

      {/* Footer gewoon onderaan, niet zichtbaar tot je scrolt */}
      <Footer />
    </div>
  )

}
