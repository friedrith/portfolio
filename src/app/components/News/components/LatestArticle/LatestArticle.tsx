import { LatestMediumArticle } from '@/components/LatestMediumArticle'
import { LatestArticleAnimation } from './LatestArticleAnimation'
import { cn } from '@/lib/utils'

export function LatestArticle() {
  return (
    <div>
      <h1
        className={cn(
          'font-sans text-3xl md:text-4xl font-bold text-foreground text-center mb-9'
        )}
      >
        Latest Article
      </h1>
      <LatestArticleAnimation>
        <LatestMediumArticle />
      </LatestArticleAnimation>
    </div>
  )
}
