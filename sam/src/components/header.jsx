import { useState, useEffect } from "react"
import { Github, Linkedin, Globe, Menu, X } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import logo from "../assets/sdict.png"

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const tabs = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "Over Mij", path: "/about" },
    { id: "projects", label: "Projecten", path: "/projects" },
    { id: "services", label: "Services", path: "/services" },
    { id: "contact", label: "Contact", path: "/contact" },
  ]

  // Hide header on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) setIsVisible(false)
      else setIsVisible(true)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleTabClick = (path) => {
    navigate(path)
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-transparent transition-transform duration-300 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
            <div className="animate-slide-right flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => navigate("/")}>
            {/* ✅ Replaced Globe with image */}
            <div className="p-2  rounded-lg backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <img
                src={logo}
                alt="SDICT logo"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              />
            </div>
            <h1 className="text-base sm:text-lg font-bold bg-gradient-to-r from-white via-white/90 to-purple-200 bg-clip-text text-transparent">
              SDICT
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.path)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  location.pathname === tab.path
                    ? "text-purple-400"
                    : "text-white/60 hover:text-white/90"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right side: Social + Mobile Menu */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-2 sm:gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 hover:text-purple-400 text-white/60 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://linkedin.com/in/sam-droste-b7a250305"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 hover:text-purple-400 text-white/60 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="sm:w-5 sm:h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 text-white/60 hover:text-white/90 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-white/10 pt-4 animate-fade-in">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.path)}
                className={`block w-full text-left px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  location.pathname === tab.path
                    ? "text-purple-400"
                    : "text-white/60 hover:text-white/90"
                }`}
              >
                {tab.label}
              </button>
            ))}

            {/* Social Icons onder mobile menu */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-white/60 hover:text-purple-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-white/60 hover:text-purple-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
