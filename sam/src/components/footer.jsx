export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gradient-to-t from-slate-900/80 to-transparent border-t border-border/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-2 flex flex-col items-center gap-1">
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
            Privacy
          </a>
          <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
            Algemene Voorwaarden
          </a>
          <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        {/* Disclaimer + Copyright */}
        <p className="text-center text-xs text-muted-foreground mt-1">
          Disclaimer: Voor algemene informatiedoeleinden. &copy; {currentYear} SDICT
        </p>
      </div>
    </footer>
  )
}
