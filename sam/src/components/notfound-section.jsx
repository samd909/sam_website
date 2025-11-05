import { Title, Meta } from "react-head"
import { Link } from "react-router-dom"

export default function NotFoundSection() {
  return (
    <>
      <Title>Pagina niet gevonden - SDICT</Title>
      <Meta
        name="description"
        content="De pagina die je zoekt bestaat niet of is verplaatst."
      />

      <section className="w-full flex flex-col justify-center items-center text-center px-4 py-20 animate-slide-in">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          404 — Pagina niet gevonden
        </h1>

        <p className="text-muted-foreground max-w-md mb-6">
          Oeps! De pagina die je zoekt bestaat niet of is verplaatst.
        </p>

        <Link
          to="/"
          className="px-6 py-3 rounded-lg font-medium bg-primary text-white hover:opacity-90 transition-all"
        >
          Terug naar Home
        </Link>
      </section>
    </>
  )
}
