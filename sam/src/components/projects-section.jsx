import { ExternalLink, Scissors, Target } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "KapperFlow - Kapper App",
      description:
        "Een volledig responsive afspraaksysteem voor kappers. Klanten kunnen online afspraken boeken, betalingen verwerken en reminders ontvangen. Gebouwd met React en gehost op ons platform.",
      tech: ["React", "JavaScript", "Tailwind CSS", "API Integration"],
      icon: <Scissors size={24} />,
      link: "#",
    },
    {
      id: 2,
      title: "MarketPro - Marketing Bureau Site",
      description:
        "Moderne portfolio website voor een marketing bureau. Showcases hun services, case studies en team. Optimaal ontworpen voor conversie met integratie van contactformulier en analytics.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Analytics"],
      icon: <Target size={24} />,
      link: "#",
    },
  ]

  return (
    <section className="min-h-[60vh] flex flex-col justify-center gap-6 sm:gap-8 animate-slide-in px-4 sm:px-6">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Onze{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projecten</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl">
          Twee live projecten die we ontworpen en gebouwd hebben. Met hosting en voortdurend beheer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 pt-4 sm:pt-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group p-5 sm:p-6 md:p-7 bg-gradient-to-br from-card/80 to-card/50 border border-border/50 rounded-xl hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-between items-start mb-4 gap-3">
              <div className="text-primary group-hover:scale-110 transition-transform">{project.icon}</div>
              <ExternalLink
                size={20}
                className="text-muted-foreground group-hover:text-primary transition-all group-hover:scale-125 flex-shrink-0 opacity-60 group-hover:opacity-100"
              />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors text-balance leading-snug mb-2">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 sm:px-2.5 py-1 bg-primary/15 text-primary text-xs rounded-full hover:bg-primary/25 transition-all duration-200 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-primary text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
              Bekijk project →
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
