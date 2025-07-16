import { ExternalLink, Calendar, Clock } from 'lucide-react'

interface ArticleBannerProps {
  title?: string
  excerpt?: string
  publishDate?: string
  readTime?: string
  articleUrl?: string
  category?: string
  authorName?: string
  authorAvatar?: string
}

export function MediumArticleBanner({
  title = 'Building Scalable React Applications: A Complete Guide',
  excerpt = 'Learn the essential patterns and best practices for creating maintainable React applications that can grow with your team and user base.',
  publishDate = 'Dec 15, 2024',
  readTime = '8 min read',
  articleUrl = '#',
  category = 'React',
  authorName = 'Your Name',
  authorAvatar = '/placeholder.svg?height=40&width=40',
}: ArticleBannerProps) {
  return (
    <div className="flex items-start gap-4">
      {/* Author Avatar */}
      <div className="flex-shrink-0 hidden sm:block">
        <img
          src={authorAvatar || '/placeholder.svg'}
          alt={authorName}
          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-400 text-slate-700">
            {category}
          </span>
          {/* <span className="text-sm text-muted-foreground">Latest Article</span> */}
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-foreground mb-2 leading-tight line-clamp-2">
          {title}
        </h2>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
          {excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{publishDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{readTime}</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={articleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-black text-foreground text-sm font-medium rounded-md hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Read on Medium
          <ExternalLink className="w-3 h-3 ml-1" />
        </a>
      </div>
    </div>
  )
}
