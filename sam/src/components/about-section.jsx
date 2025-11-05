import { Server, Code, Users } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center gap-6 sm:gap-8 animate-slide-in px-4 sm:px-6">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Over <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">SDICT</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl">
          SDICT is een jong ZZP bedrijf dat zich specialiseert in het ontwerpen, bouwen en hosten van moderne websites.
          Wij bieden het complete pakket: van idee tot launch en ondersteuning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 pt-6">
        <div className="p-5 sm:p-6 bg-card border border-border/50 rounded-lg hover:border-primary/40 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1">
          <Code className="text-primary mb-3 sm:mb-4" size={32} />
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Moderne Technologie</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            React, JavaScript, Tailwind CSS en de nieuwste web frameworks voor toekomstbestendige websites.
          </p>
        </div>
        <div className="p-5 sm:p-6 bg-card border border-border/50 rounded-lg hover:border-primary/40 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1">
          <Server className="text-primary mb-3 sm:mb-4" size={32} />
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Betrouwbare Hosting</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Veilige, snelle hosting met 99.9% uptime garantie en professionele ondersteuning.
          </p>
        </div>
        <div className="p-5 sm:p-6 bg-card border border-border/50 rounded-lg hover:border-primary/40 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1">
          <Users className="text-primary mb-3 sm:mb-4" size={32} />
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Dedicated Support</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Persoonlijke begeleiding, snelle respons en voortdurende optimalisatie van jouw website.
          </p>
        </div>
      </div>
    </section>
  )
}
