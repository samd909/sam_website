import { Code2, Globe, Wrench, TrendingUp } from "lucide-react"
import { Title, Meta } from "react-head"


export default function ServicesSection() {
  const services = [
    {
      icon: <Code2 size={36} />,
      title: "Website Development",
      description: "Professionele en moderne websites, volledig op maat gebouwd. Geen gebruik van standaard webbuilders of WordPress themas — elke regel code wordt door ons geschreven en geoptimaliseerd voor jouw project",
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
    <>
    <Title>Services - SDICT | Professionele Webontwikkeling & Hosting</Title>
    <Meta
    name="description"
    content="Ontdek de services van SDICT: webdevelopment, hosting, onderhoud en SEO-optimalisatie. Wij bouwen en beheren professionele websites die scoren in Google."
    />
    <section className="w-full flex flex-col justify-center items-center gap-8 sm:gap-10 animate-slide-in px-4 sm:px-6 md:px-8 sm:py-8 lg:py-8">
      <div className="text-center space-y-4 sm:space-y-5 max-w-3xl">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full max-w-5xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="group w-full p-6 bg-card/80 border border-border/50 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.03]"
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
    </>
  )
}
