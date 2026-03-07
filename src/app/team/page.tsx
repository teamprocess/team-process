import { MemberCard, TEAM_MEMBERS } from '@/entities/team-member'
import { Badge } from '@/shared/ui'

export default function TeamPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12 sm:py-14 lg:py-16">
          <div className="max-w-3xl space-y-4">
            <Badge variant="outline" className="rounded-full px-4 py-1 text-xs text-primary">
              팀 구성
            </Badge>
            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
              PROCESS를 함께 운영하는 동아리원
            </h1>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              현재 PROCESS에서 함께 활동하고 있는 동아리원 명단입니다.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-10 sm:py-12 lg:py-14">
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {TEAM_MEMBERS.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </section>
      </main>
    </div>
  )
}
