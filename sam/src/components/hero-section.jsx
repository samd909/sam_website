import { ArrowRight, Zap } from "lucide-react"

export default function HeroSection({ setActiveTab }) {
  return (
    <section className="min-h-[50vh] sm:min-h-[60vh] flex flex-col justify-center items-center text-center gap-6 sm:gap-8 animate-slide-in px-4">
      <div className="space-y-4 max-w-3xl">
        <div className="inline-block mb-4">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 justify-center">
            <Zap size={16} /> Complete Weboplossingen
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-balance leading-tight">
          Wij maken{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            moderne websites
          </span>{" "}
          en beheren ze
        </h2>
        <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          SDICT levert professionele websites, hosting en ondersteuning. Van concept tot launch en beheer—alles wat je
          nodig hebt.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 w-full sm:w-auto justify-center">
        <button
          onClick={() => setActiveTab("projects")}
          className="px-6 sm:px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group text-sm sm:text-base"
        >
          Projecten Bekijken
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button
         onClick={() => setActiveTab("contact")}
         className="px-6 sm:px-8 py-3 border-2 border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base">
          Contacteer ons
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 w-full max-w-md">
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-primary">2</p>
          <p className="text-xs sm:text-sm text-muted-foreground">Live Projecten</p>
        </div>
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-primary">100%</p>
          <p className="text-xs sm:text-sm text-muted-foreground">Hosting Uptime</p>
        </div>
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-primary">24/7</p>
          <p className="text-xs sm:text-sm text-muted-foreground">Support</p>
        </div>
      </div>
    </section>
  )
}
