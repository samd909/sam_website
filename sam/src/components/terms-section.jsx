import { Title, Meta } from "react-head"

export default function TermsSection() {
  return (
    <>
      <Title>Algemene Voorwaarden - SDICT</Title>
      <Meta
        name="description"
        content="Algemene voorwaarden van SDICT — heldere afspraken voor webontwikkeling en dienstverlening."
      />

      <section className="w-full flex flex-col justify-center items-center gap-6 px-4 sm:px-6 md:px-8 py-12 animate-slide-in">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Algemene<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> voorwaarden</span>
          </h2>

          <p className="text-muted-foreground">
            SDICT levert websites en webapplicaties op maat. Vooraf worden de wensen en doelen
            besproken en bevestigd. Na oplevering kunnen feedback-rondes of onderhoud worden
            afgesproken.
          </p>

          <p className="text-muted-foreground">
            Betaling dient te worden voldaan volgens de afgesproken termijn. Bij wijzigingen na
            akkoord kan extra tijd of vergoeding worden gevraagd.
          </p>

          <p className="text-muted-foreground">
            Alle geleverde code en designs blijven eigendom van SDICT totdat volledige betaling is
            voldaan.
          </p>

          <p className="text-muted-foreground">
            SDICT is niet aansprakelijk voor indirecte schade of verlies door gebruik van de
            website, maar doet altijd het maximale voor kwaliteit en veiligheid.
          </p>

          <p className="text-sm text-muted-foreground">
            Laatst bijgewerkt: {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </>
  )
}
