import { PostCard, TEAM_BLOG_POSTS } from '@/entities/blog-post'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="mb-4 text-4xl font-bold leading-[1.12] text-foreground">Team Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            팀의 일상과 문화, 그리고 함께 성장하는 이야기를 공유합니다
          </p>
        </section>

        {/* Blog Posts Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_BLOG_POSTS.map((post) => (
            <PostCard key={post.id} post={post} href={`/blog/${post.slug}`} />
          ))}
        </section>
      </main>
    </div>
  )
}
