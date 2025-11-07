import { ExternalLink, Scissors, Target } from "lucide-react"
import { Title, Meta } from "react-head"


export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "SBCutz",
      type: "Fullstack Webapp",
      description:
        "Een volledige webapplicatie met login, afsprakenbeheer en admin omgeving. Gebouwd met Django en Tailwind CSS.",
      tech: ["Django", "Tailwind CSS", "OAuth", "Gunicorn"],
      icon: <Scissors size={28} />,
      link: "https://sbcutz.nl/",
    },
    {
      id: 2,
      title: "Collab4You",
      type: "Statische Website",
      description:
        "Een statische bedrijfswebsite met meerdere pagina's, gebouwd met React en Tailwind CSS.",
      tech: ["React", "Tailwind CSS"],
      icon: <Target size={28} />,
      link: "https://collab4you.nl/",
    },
  ]

  return (
    <>
    <Title>Projecten - SDICT | Maatwerk Websites & Webapps</Title>
    <Meta
        name="description"
        content="Bekijk de projecten van SDICT: van moderne webapps tot gebruiksvriendelijke bedrijfswebsites. Elk project is op maat ontwikkeld met de nieuwste technologieën."
    />
    <section className="w-full flex flex-col justify-center items-center gap-8 sm:gap-10 animate-slide-in px-4 sm:px-6 md:px-8 sm:py-8 lg:py-8">
      {/* Header */}
      <div className="text-center max-w-3xl space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Onze{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Projecten
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
          Twee live projecten die we ontworpen en gebouwd hebben. Met hosting en voortdurend beheer.
        </p>
      </div>

      {/* Project Cards */}
      <div className="flex flex-col gap-8 w-full max-w-4xl">
        {projects.map((project) => (
          <a
            key={project.id}
            target="_blank"
            href={project.link}
            className="group flex flex-col md:flex-row items-center md:items-start gap-6 p-6 sm:p-8 bg-gradient-to-br from-card/80 to-card/50 border border-border/50 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex-shrink-0 text-primary">{project.icon}</div>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">{project.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs sm:text-sm bg-primary/15 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Link */}
            <ExternalLink
              size={20}
              className="mt-4 md:mt-0 text-muted-foreground group-hover:text-primary transition-all"
            />
          </a>
        ))}
      </div>
    </section>
    </>
  )
}
