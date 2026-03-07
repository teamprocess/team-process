import { redirect } from 'next/navigation'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: Props) {
  await params
  redirect('/blog')
}

export async function generateStaticParams() {
  return [{ slug: 'team-culture' }, { slug: 'remote-work' }]
}
