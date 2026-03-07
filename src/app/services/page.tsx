import { Badge } from '@/shared/ui'

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <main className="container mx-auto px-4 py-12 sm:py-14 lg:py-16">
        <section className="mb-10 max-w-3xl space-y-4 sm:mb-12">
          <Badge variant="outline" className="rounded-full px-4 py-1 text-xs text-primary">
            Services
          </Badge>
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            PROCESS 서비스 페이지
          </h1>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            이 페이지는 별도 서비스 소개 내용으로 다시 구성할 예정입니다.
          </p>
        </section>
      </main>
    </div>
  )
}
