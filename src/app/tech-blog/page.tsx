import { PostCard, TECH_BLOG_POSTS } from '@/entities/blog-post'

export default function TechBlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="mb-4 text-4xl font-bold leading-[1.12] text-foreground">Tech Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            최신 기술 트렌드와 개발 경험을 공유합니다
          </p>
        </section>

        {/* Blog Posts Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_BLOG_POSTS.map((post) => (
            <PostCard key={post.id} post={post} href={`/tech-blog/${post.slug}`} />
          ))}
        </section>
      </main>
    </div>
  )
}
