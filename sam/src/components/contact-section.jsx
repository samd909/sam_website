import { Mail, Linkedin, Github, Phone, FileText } from "lucide-react"
import { Title, Meta } from "react-head"


export default function ContactSection() {
  return (
    <>
        <Title>Contact - SDICT | Moderne Websites & Webapps</Title>
        <Meta
            name="description"
            content="Neem contact op met SDICT voor maatwerk websites en webapps. Of je nu vragen hebt over een project, een samenwerking zoekt of direct aan de slag wilt — ik help je graag persoonlijk verder."
        />
        <section className="w-full flex flex-col justify-center items-center gap-8 sm:gap-10 animate-slide-in px-4 sm:px-6 md:px-8 sm:py-8 lg:py-8">

        {/* Header tekst bovenaan */}
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Laten we{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                Contact
            </span>{" "}
            Opnemen
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
            Interesse in een project? Vragen over mijn services? Stuur me een bericht of connect op social media.
            </p>
        </div>

        {/* Onderdeel met bedrijfsinformatie en contactkaartjes */}
        <div className="flex flex-col items-center gap-12 sm:gap-16 w-full max-w-4xl">

            {/* Bedrijfsinformatie */}
            <div className="w-full max-w-md">
            <div className="bg-gradient-to-br from-card/60 to-card/40 border border-border/50 rounded-xl p-6 sm:p-8 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 flex flex-col gap-4">
                <h3 className="text-lg sm:text-xl font-bold text-foreground">SDICT</h3>
                <div className="flex flex-col gap-3 text-sm sm:text-base text-muted-foreground">
                <div className="flex items-center gap-3">
                    <Phone size={20} className="text-primary" />
                    <span>+31 6 19379387</span>
                </div>
                <div className="flex items-center gap-3">
                    <Mail size={20} className="text-primary" />
                    <a href="mailto:info@sdict.nl" className="hover:underline">
                    info@sdict.nl
                    </a>
                </div>
                {/* <div className="flex items-center gap-3">
                    <FileText size={20} className="text-primary" />
                    <span>KvK: 12345678</span>
                </div>
                <div className="flex items-center gap-3">
                    <FileText size={20} className="text-primary" />
                    <span>BTW: NL123456789B01</span>
                </div> */}
                </div>
            </div>
            </div>

            {/* Interactieve contactkaartjes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-xl">
            {[
                { icon: Mail, label: "Email", text: "info@sdict.nl", href: "mailto:info@sdict.nl" },
                { icon: Linkedin, label: "LinkedIn", text: "Connect met mij", href: "linkedin.com/in/sam-droste-b7a250305" },
                { icon: Github, label: "GitHub", text: "Bekijk mijn projecten", href: "https://github.com/" },
            ].map((contact, idx) => (
                <a
                key={idx}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center justify-center p-6 bg-gradient-to-br from-card/60 to-card/40 border border-border/50 rounded-xl hover:border-primary/60 hover:shadow-lg hover:shadow-primary/15 transition-all duration-300 text-center hover:scale-105 hover:-translate-y-1"
                >
                <contact.icon
                    size={32}
                    className="mb-3 sm:mb-4 text-primary group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300"
                />
                <h3 className="font-semibold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors">
                    {contact.label}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground break-all leading-relaxed mt-2">
                    {contact.text}
                </p>
                </a>
            ))}
            </div>
        </div>
        </section>
    </>
  )
}
