import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui'
import type { BlogPostCardProps } from '../model/types'
import Image from 'next/image'
import Link from 'next/link'

export function PostCard({ post, href }: BlogPostCardProps) {
  return (
    <Link href={href}>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full overflow-hidden">
        {/* Thumbnail */}
        <div className="relative w-full h-48 overflow-hidden bg-muted">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover transition-transform hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <CardHeader>
          <div className="flex gap-2 mb-2 flex-wrap">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
          <CardDescription className="line-clamp-3">
            {post.excerpt}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{post.author}</span>
            <span>{post.readTime}</span>
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            {post.date}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
