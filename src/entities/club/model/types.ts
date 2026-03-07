export interface ProgramStage {
  step: string
  title: string
  description: string
  highlights: string[]
}

export interface ClubProfile {
  name: string
  title: string
  subtitle: string
  heroDescription: string
  badges: string[]
  programStages: ProgramStage[]
}
