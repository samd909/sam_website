import { Code, Users, Server } from "lucide-react"
import { Title, Meta } from "react-head"


export default function AboutSection() {
  return (
    <>
        <Title>Over mij - SDICT | Moderne Websites & Webapps</Title>
        <Meta
            name="description"
            content="Leer meer over SDICT: een recent afgestudeerde software developer gespecialiseerd in het bouwen van moderne, gebruiksvriendelijke en volledig op maat gemaakte websites en webapps — van ontwerp tot livegang."
        />

        <section className="w-full flex flex-col justify-center items-center gap-8 sm:gap-10 animate-slide-in px-4 sm:px-6 md:px-8 sm:py-8 lg:py-8">
        {/* Header */}
        <div className="text-center max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Over <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">SDICT</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Ik ben een recent afgestudeerde software developer die zich richt op het bouwen van gebruiksvriendelijke en moderne websites en webapps. 
            Elk project wordt specifiek op maat gemaakt voor de persoon of organisatie, zodat het precies doet wat jij nodig hebt. 
            Ik regel alles van ontwerp tot live zetten, zodat het direct klaar is voor gebruik.
            </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full max-w-5xl">
            <div className="flex flex-col items-center text-center p-6 sm:p-8 bg-gradient-to-br from-card/70 to-card/50 border border-border/50 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <Code size={36} className="text-primary mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">Maatwerk Oplossingen</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
                Websites en webapps die volledig zijn afgestemd op jouw wensen en gebruik, van ontwerp tot oplevering.
            </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 sm:p-8 bg-gradient-to-br from-card/70 to-card/50 border border-border/50 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <Server size={36} className="text-primary mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">Alles Geregeld</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
                Van hosting tot live zetten: ik zorg dat jouw project volledig functioneel online staat zonder gedoe.
            </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 sm:p-8 bg-gradient-to-br from-card/70 to-card/50 border border-border/50 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <Users size={36} className="text-primary mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">Persoonlijke Begeleiding</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
                Direct contact bij elk project, zodat alles nauwkeurig aansluit bij wat jij wilt en nodig hebt.
            </p>
            </div>
        </div>
        </section>
    </>
  )
}


