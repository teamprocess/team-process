export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content?: string
  author: string
  date: string
  tags: string[]
  readTime: string
  thumbnail: string
}

export interface BlogPostCardProps {
  post: BlogPost
  href: string
}
