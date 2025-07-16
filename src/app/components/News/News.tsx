import { Carousel } from '@/components/Carousel'

import { DesignSystemHub } from './components/DesignSystemHub'
import { LatestTestimonial } from './components/LatestTestimonial'
import { LatestArticle } from './components/LatestArticle'

const components = [
  { key: 'latest-article', component: <LatestArticle /> },

  { key: 'design-system-hub', component: <DesignSystemHub /> },
  // <LatestArticle />,
  { key: 'latest-testimonial', component: <LatestTestimonial /> },
]

export function News() {
  return <Carousel components={components} />
}
