'use client'

interface LatestArticleAnimationProps {
  children: React.ReactNode
}

export function LatestArticleAnimation({
  children,
}: LatestArticleAnimationProps) {
  return (
    <div className="w-full overflow-hidden relative flex flex-col gap-4 items-center justify-center">
      <div className=" max-w-2xl mx-auto rounded-xl shadow-lg bg-muted hover:shadow-xl transition-shadow duration-300  p-6">
        {children}
      </div>
    </div>
  )
}
