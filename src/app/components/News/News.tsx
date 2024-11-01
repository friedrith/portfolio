import { Carousel } from '@/components/Carousel'

import { Confoo } from './components/Confoo'
import { DesignSystemHub } from './components/DesignSystemHub'
import { LatestArticle } from './components/LatestArticle'

const components = [<Confoo />, <DesignSystemHub />, <LatestArticle />]

export function News() {
  return <Carousel components={components} />
}
