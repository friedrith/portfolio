import { services } from '@/config/services.json'
import Link from 'next/link'

export function Services() {
  return (
    <div className=" grid grid-cols-2 gap-4 font-sans">
      {services.map((service) => (
        <Link
          key={service.label}
          className="flex flex-col text-center items-center justify-center aspect-[4/3] p-3 rounded-lg bg-muted transition-colors duration-500 hover:bg-background font-semibold text-foreground text-md 2xl:text-lg"
          href={`/services/#${service.href ?? ''}`}
        >
          {service.label}
        </Link>
      ))}
    </div>
  )
}
