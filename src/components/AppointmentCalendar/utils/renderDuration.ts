export function renderDuration(duration: number): string | undefined {
  if (duration <= 0) {
    return undefined
  }
  return `${duration} min`
}
