import { Projects } from "@/components/projects"
import { SocialsCard } from "@/components/socials-card"

export default function Page() {
  return (
    <>
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:items-center md:gap-12">
        <SocialsCard className="shrink-0" />
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Hey, I&apos;m Ellie.
          </h1>
          <p className="max-w-md text-muted-foreground">
            Designer and developer building fast, thoughtful things for the
            web. Currently based in New York.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 pb-24">
        <Projects />
      </section>
    </>
  )
}
