import { cn } from '@/lib/utils'
import { socialsList } from './socialsList'

export interface SocialsProps {
  className?: string
}

export function Socials({ className }: SocialsProps) {
  return (
    <div className={cn('flex items-center justify-center gap-8', className)}>
      {socialsList.map((social, index) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          className={cn(
            'flex p-1 items-center text-foreground/70 hover:text-foreground transition-colors',
            index >= 4 ? 'hidden 2xl:flex' : ''
          )}
        >
          <span className="sr-only">{social.name}</span>
          <div className="w-7 3xl:w-9 aspect-square flex items-stretch justify-center">
            {social.icon}
          </div>
        </a>
      ))}
    </div>
  )
}
