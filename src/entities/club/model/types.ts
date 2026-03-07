export interface ClubStat {
  value: string
  label: string
  description: string
}

export interface ClubFocus {
  title: string
  description: string
}

export interface ClubPillar {
  title: string
  description: string
  points: string[]
}

export interface ProgramStage {
  step: string
  title: string
  description: string
  highlights: string[]
}

export interface MonthlyPlan {
  month: string
  summary: string
  items: string[]
}

export interface ClubProfile {
  name: string
  category: string
  title: string
  subtitle: string
  heroDescription: string
  badges: string[]
  workflow: string[]
  stats: ClubStat[]
  introductionMarkdown: string
  expectedEffectsMarkdown: string
  focusAreas: ClubFocus[]
  pillars: ClubPillar[]
  programStages: ProgramStage[]
  monthlyPlans: MonthlyPlan[]
}
