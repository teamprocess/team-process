import { Badge, Button, Separator } from '@/shared/ui'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// 임시 데이터
const posts = {
  'nextjs-app-router': {
    title: 'Next.js App Router 완벽 가이드',
    author: '김개발',
    date: '2024-02-01',
    readTime: '12분',
    tags: ['Next.js', 'React', 'Frontend'],
    content: `
      <h2>App Router란?</h2>
      <p>Next.js 13부터 도입된 App Router는 기존 Pages Router를 대체하는 새로운 라우팅 시스템입니다.</p>

      <h3>주요 특징</h3>
      <ul>
        <li>파일 시스템 기반 라우팅</li>
        <li>Server Components 기본 지원</li>
        <li>스트리밍 및 Suspense 지원</li>
        <li>개선된 데이터 페칭</li>
      </ul>

      <h3>기본 구조</h3>
      <pre><code>app/
├── layout.tsx
├── page.tsx
└── dashboard/
    └── page.tsx</code></pre>
    `
  },
  'fsd-architecture': {
    title: 'Feature-Sliced Design 아키텍처 적용기',
    author: '김개발',
    date: '2024-01-25',
    readTime: '15분',
    tags: ['Architecture', 'FSD', 'Best Practice'],
    content: `
      <h2>FSD 아키텍처 소개</h2>
      <p>Feature-Sliced Design은 확장 가능하고 유지보수가 쉬운 프론트엔드 아키텍처입니다.</p>
    `
  }
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function TechBlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts[slug as keyof typeof posts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/tech-blog">← 목록으로</Link>
          </Button>
        </div>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <div className="flex gap-2 mb-4 flex-wrap">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="mb-4 text-4xl font-bold leading-[1.12] text-foreground">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span>{post.author}</span>
              <span>•</span>
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <Separator className="mb-8" />

          {/* Article Content */}
          <div
            className="prose prose-neutral dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <Separator className="my-12" />

        {/* Author Info */}
        <section className="bg-muted rounded-lg p-6">
          <h3 className="font-semibold mb-2">작성자</h3>
          <p className="text-muted-foreground">{post.author}</p>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold mb-4">관련 글</h3>
          <div className="text-muted-foreground">
            다른 기술 블로그 포스트를 확인해보세요
          </div>
        </section>
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }))
}
