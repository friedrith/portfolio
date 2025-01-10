'use client'

import { Tag } from '@/components/Tag'

const getAge = (birthDate: string) =>
  Math.floor(
    (new Date().getTime() - new Date(birthDate).getTime()) / 3.15576e10
  )

export function AgeTag() {
  const age = getAge('1990-12-01')

  return <Tag>{age} yo</Tag>
}
