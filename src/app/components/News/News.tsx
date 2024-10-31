import { Carousel } from '@/components/Carousel'

import { Confoo } from './components/Confoo'
import { DesignSystemHub } from './components/DesignSystemHub'

export function News() {
  return <Carousel components={[<Confoo />, <DesignSystemHub />]} />
}
