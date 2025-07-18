export const allSteps = [
  'start',
  'select-service',
  'select-date',
  'identify',
  'confirm',
  'success',
] as const

export type Step = (typeof allSteps)[number]
