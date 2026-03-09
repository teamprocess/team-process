import { MemberCard, TEAM_MEMBERS } from "@/entities/team-member";

export default function TeamPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border/70 bg-[linear-gradient(180deg,rgba(248,250,252,0.9),rgba(255,255,255,0.98))] dark:bg-[linear-gradient(180deg,rgba(38,41,45,0.94),rgba(45,48,52,0.97))]">
        <div className="container mx-auto max-w-6xl px-4 py-14 sm:py-16 lg:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
              Team
            </p>
            <h1 className="process-display text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-5xl">
              PROCESS 팀 구성
            </h1>
            <p className="max-w-2xl text-base leading-8 text-foreground/78 dark:text-foreground/84">
              PROCESS를 함께 운영하고 있는 팀 멤버입니다.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-6xl px-4 py-10 sm:py-12 lg:py-14">
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {TEAM_MEMBERS.map(member => (
            <MemberCard key={member.id} member={member} />
          ))}
        </section>
      </main>
    </div>
  );
}
