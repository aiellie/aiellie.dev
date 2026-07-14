import { HeroSection } from "@/components/hero-section"
import { SocialsCard } from "@/components/socials-card"

export default function Page() {
  return (
    <>
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:items-center md:gap-12">
        <HeroSection className="md:flex-1" />
        <SocialsCard className="shrink-0" />
      </section>
    </>
  )
}
