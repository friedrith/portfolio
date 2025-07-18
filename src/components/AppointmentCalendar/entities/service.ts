export type Service = {
  name: string
  description?: string
  duration?: number // in minutes
  price?: number
  location?: string
}

export const convertService = (service: Service | string): Service => {
  if (typeof service === 'string') {
    return { name: service }
  }
  return service
}
