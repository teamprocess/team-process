import { Badge, Button, Separator } from '@/shared/ui'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// 임시 데이터 (실제로는 CMS나 데이터베이스에서 가져올 데이터)
const posts = {
  'team-culture': {
    title: '우리 팀의 문화와 가치',
    author: '홍길동',
    date: '2024-02-03',
    readTime: '5분',
    tags: ['Culture', 'Team'],
    content: `
      <h2>팀 프로세스의 핵심 가치</h2>
      <p>우리 팀은 다음의 핵심 가치를 중심으로 운영됩니다:</p>

      <h3>1. 투명성</h3>
      <p>모든 정보는 팀 전체에 투명하게 공유됩니다. 의사결정 과정부터 결과까지,
      모든 구성원이 전체 맥락을 이해할 수 있도록 합니다.</p>

      <h3>2. 자율성</h3>
      <p>각 팀원은 자신의 업무에 대한 주도권을 가지고 있습니다.
      마이크로매니징 없이 신뢰를 바탕으로 일합니다.</p>

      <h3>3. 성장</h3>
      <p>개인과 팀 모두의 지속적인 성장을 추구합니다.
      실패를 두려워하지 않고, 배움의 기회로 삼습니다.</p>
    `
  },
  'remote-work': {
    title: '원격 근무 2년의 인사이트',
    author: '김개발',
    date: '2024-01-28',
    readTime: '7분',
    tags: ['Remote', 'Work'],
    content: `
      <h2>원격 근무 도입 배경</h2>
      <p>2022년부터 본격적으로 원격 근무를 시작했습니다...</p>
    `
  }
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: Props) {
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
            <Link href="/blog">← 목록으로</Link>
          </Button>
        </div>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <div className="flex gap-2 mb-4">
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
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }))
}
