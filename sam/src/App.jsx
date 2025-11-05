import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HeadProvider } from "react-head"
import Header from "./components/header"
import Footer from "./components/footer"
import HeroSection from "./components/hero-section"
import AboutSection from "./components/about-section"
import ProjectsSection from "./components/projects-section"
import ServicesSection from "./components/services-section"
import ContactSection from "./components/contact-section"
import PrivacySection from "./components/privacy-section"
import TermsSection from "./components/terms-section"
import NotFoundSection from "./components/notfound-section"


export default function App() {
  return (
    <HeadProvider>
      <Router>
        <div className="relative min-h-screen bg-gradient-to-br from-background via-slate-900 to-primary/10 flex flex-col">

          {/* Achtergrond-effecten */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          </div>

          {/* Header */}
          <Header />

          {/* Main content */}
          <main className="flex-1 flex flex-col justify-start items-center w-full pt-8 md:pt-12 pb-12 md:pb-0">
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/about" element={<AboutSection />} />
              <Route path="/projects" element={<ProjectsSection />} />
              <Route path="/services" element={<ServicesSection />} />
              <Route path="/contact" element={<ContactSection />} />
              <Route path="/privacy" element={<PrivacySection />} />
              <Route path="/terms" element={<TermsSection />} />

              <Route path="*" element={<NotFoundSection />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </HeadProvider>
  )
}
