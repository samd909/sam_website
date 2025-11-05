import { Code2, Globe, Wrench, TrendingUp } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <Code2 size={36} />,
      title: "Website Development",
      description: "Professionele, moderne websites op maat gebouwd. Responsive, snel en gericht op gebruiksvriendelijkheid en conversie.",
    },
    {
      icon: <Globe size={36} />,
      title: "Hosting & Deployment",
      description: "Wij selecteren betrouwbare hostingproviders en configureren alles zelf voor optimale prestaties, veiligheid en back-ups.",
    },
    {
      icon: <Wrench size={36} />,
      title: "Ondersteuning & Beheer",
      description: "Continue monitoring en onderhoud van je website, inclusief updates, kleine aanpassingen en optimalisaties.",
    },
    {
      icon: <TrendingUp size={36} />,
      title: "SEO Optimalisatie",
      description: "Websites geoptimaliseerd volgens de laatste Google-richtlijnen. Focus op Pagespeed, toegankelijkheid en zoekmachinevriendelijkheid.",
    },
  ]

  return (
    <section className="min-h-[60vh] flex flex-col justify-center gap-8 sm:gap-10 animate-slide-in px-4 sm:px-6">
      <div className="space-y-4 sm:space-y-5 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Onze{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Services
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Alles wat je nodig hebt voor een professionele website: van ontwerp en bouw tot hosting en optimalisatie.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-6 bg-card/80 border border-border/50 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.03]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:translate-x-1 group-hover:translate-y-1">
              {service.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
