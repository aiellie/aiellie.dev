export type Certification = {
  title: string
  issuer: string
  year?: string
  url?: string
}

export const certifications: Certification[] = [
  {
    title: "Certified Scrum Master",
    issuer: "Scrum Alliance",
    year: "2020",
    url: "https://www.scrumalliance.org/certifications/certified-scrummaster",
  },
]
/** Length drives the hero analytic card — add your certifications here. */
