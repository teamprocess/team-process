import { redirect } from 'next/navigation'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function TechBlogPostPage({ params }: Props) {
  await params
  redirect('/tech-blog')
}

export async function generateStaticParams() {
  return [{ slug: 'nextjs-app-router' }, { slug: 'fsd-architecture' }]
}
