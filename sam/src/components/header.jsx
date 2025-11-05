"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Globe, Menu, X } from "lucide-react"

export default function Header({ activeTab, setActiveTab }) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const tabs = [
    { id: "home", label: "Home" },
    { id: "about", label: "Over Mij" },
    { id: "projects", label: "Projecten" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
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
          <div className="animate-slide-right flex items-center gap-2 sm:gap-3">
            <div className="p-2 bg-gradient-to-br from-purple-600/60 to-purple-900/40 rounded-lg backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <Globe size={18} className="sm:w-5 sm:h-5 text-white/90" />
            </div>
            <h1 className="text-base sm:text-lg font-bold bg-gradient-to-r from-white via-white/90 to-purple-200 bg-clip-text text-transparent">
              SDICT
            </h1>
          </div>

          {/* Desktop Navigation - Text buttons */}
          <div className="hidden md:flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id ? "text-purple-400" : "text-white/60 hover:text-white/90"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right side: Social + Mobile Menu */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
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
                href="https://linkedin.com"
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
                onClick={() => handleTabClick(tab.id)}
                className={`block w-full text-left px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id ? "text-purple-400" : "text-white/60 hover:text-white/90"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
