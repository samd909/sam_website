import { Mail, Linkedin, Github, Phone, FileText } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center gap-6 sm:gap-8 animate-slide-in px-4 sm:px-6">
      <div className="text-center space-y-3 sm:space-y-4 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Laten we{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            Contact
          </span>{" "}
          Opnemen
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
          Interesse in een project? Vragen over mijn services? Stuur me een bericht of connect op social media.
        </p>
      </div>

      {/* Interactieve contactkaartjes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 pt-6 sm:pt-8 max-w-2xl mx-auto w-full">
        {[
          {
            icon: Mail,
            label: "Email",
            text: "info@sdict.nl",
            href: "mailto:info@sdict.nl",
          },
          {
            icon: Linkedin,
            label: "LinkedIn",
            text: "Connect met mij",
            href: "https://linkedin.com",
          },
          {
            icon: Github,
            label: "GitHub",
            text: "Bekijk mijn projecten",
            href: "https://github.com",
          },
        ].map((contact, idx) => (
          <a
            key={idx}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group p-5 sm:p-6 md:p-7 bg-gradient-to-br from-card/60 to-card/40 border border-border/50 rounded-xl hover:border-primary/60 hover:shadow-lg hover:shadow-primary/15 transition-all duration-300 text-center hover:scale-105 hover:-translate-y-1"
          >
            <contact.icon
              size={32}
              className="mx-auto mb-3 sm:mb-4 text-primary group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300"
            />
            <h3 className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
              {contact.label}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground break-all leading-relaxed mt-2">
              {contact.text}
            </p>
          </a>
        ))}
      </div>

      {/* Bedrijfsinformatie onder de kaartjes */}
      <div className="max-w-2xl mx-auto w-full mt-6 sm:mt-8">
        <div className="bg-gradient-to-br from-card/60 to-card/40 border border-border/50 rounded-xl p-6 sm:p-8 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300">
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-foreground">
            SDICT B.V.
          </h3>
          <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-primary" />
              <span>+31 6 12345678</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-primary" />
              <a href="mailto:info@sdict.nl" className="hover:underline">
                info@sdict.nl
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FileText size={20} className="text-primary" />
              <span>KvK: 12345678</span>
            </div>
            <div className="flex items-center gap-3">
              <FileText size={20} className="text-primary" />
              <span>BTW: NL123456789B01</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
