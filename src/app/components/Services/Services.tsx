import { servicesList } from './servicesList'

export function Services() {
  return (
    <div className=' grid grid-cols-2 gap-4 font-sans'>
      {servicesList.map(service => (
        <div
          key={service.label}
          className='flex flex-col text-center items-center justify-center aspect-[4/3] p-3 rounded-lg bg-muted'
        >
          {service.label}
        </div>
      ))}
    </div>
  )
}
