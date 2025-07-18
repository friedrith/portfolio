export const renderPrice = (price: number | undefined): string | undefined => {
  if (price === undefined || price === null) {
    return undefined
  }

  if (price === 0) {
    return 'Free'
  }
  return `${price} $`
}
