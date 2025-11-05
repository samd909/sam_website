import { Title, Meta } from "react-head"

export default function PrivacySection() {
  return (
    <>
      <Title>Privacybeleid - SDICT</Title>
      <Meta
        name="description"
        content="Lees hoe SDICT zorgvuldig met jouw persoonsgegevens omgaat en waarom jouw privacy belangrijk is."
      />

      <section className="w-full flex flex-col justify-center items-center gap-6 px-4 sm:px-6 md:px-8 py-12 animate-slide-in">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Privacy<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">beleid</span>
          </h2>

          <p className="text-muted-foreground">
            SDICT gaat zorgvuldig om met jouw gegevens. Persoonsgegevens worden uitsluitend gebruikt
            om contact op te nemen, offertes op te stellen of een project uit te voeren.
          </p>

          <p className="text-muted-foreground">
            Ik verkoop of deel geen gegevens met derden, tenzij dit noodzakelijk is voor
            dienstverlening (denk aan hosting of e-mail geleverd via een betrouwbare partij).
          </p>

          <p className="text-muted-foreground">
            Wil je jouw gegevens laten verwijderen? Neem eenvoudig contact op via het formulier op de website.
          </p>

          <p className="text-sm text-muted-foreground">
            Laatst bijgewerkt: {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </>
  )
}
