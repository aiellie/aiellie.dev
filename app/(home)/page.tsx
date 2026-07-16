import { HeroSection } from "@/components/hero-section"
import { ProjectsGrid } from "@/components/projects-grid"
import { SocialsCard } from "@/components/socials-card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:items-center md:gap-12">
        <HeroSection className="md:flex-1" />
        <SocialsCard className="shrink-0" />
      </section>
      <section className="mx-auto w-full  px-16 py-16">
        <ProjectsGrid />
      </section>
      <SiteFooter />
    </>
  )
}
