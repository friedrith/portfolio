import { Carousel } from '@/components/Carousel'

import { Confoo } from './components/Confoo'
import { DesignSystemHub } from './components/DesignSystemHub'
import { LatestArticle } from './components/LatestArticle'
import { LatestTestimonial } from './components/LatestTestimonial'

const components = [
  <Confoo />,
  <DesignSystemHub />,
  // <LatestArticle />,
  <LatestTestimonial />,
]

export function News() {
  return <Carousel components={components} />
}
