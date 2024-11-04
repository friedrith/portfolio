import { Carousel } from '@/components/Carousel'

import { Confoo } from './components/Confoo'
import { DesignSystemHub } from './components/DesignSystemHub'
import { LatestTestimonial } from './components/LatestTestimonial'

const components = [
  { key: 'confoo', component: <Confoo /> },
  { key: 'design-system-hub', component: <DesignSystemHub /> },
  // <LatestArticle />,
  { key: 'latest-testimonial', component: <LatestTestimonial /> },
]

export function News() {
  return <Carousel components={components} />
}
