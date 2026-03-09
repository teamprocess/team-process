import Link from "next/link";
import { Button } from "@/shared/ui";

interface ClosedSectionProps {
  label: string;
  description: string;
}

export function ClosedSection({ label, description }: ClosedSectionProps) {
  return (
    <div className="bg-background">
      <section className="border-b border-border/70 bg-[linear-gradient(180deg,rgba(248,250,252,0.9),rgba(255,255,255,0.98))] dark:bg-[linear-gradient(180deg,rgba(44,47,50,0.92),rgba(51,54,57,0.96))]">
        <div className="container mx-auto max-w-6xl px-4 py-14 sm:py-16 lg:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
              {label}
            </p>
            <h1 className="process-display text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-5xl">
              나중에 만나요
            </h1>
            <p className="max-w-2xl text-base leading-8 text-foreground/78 dark:text-foreground/84">
              {description}
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-6xl px-4 py-10 sm:py-12 lg:py-14">
        <div className="process-surface mx-auto max-w-3xl rounded-[1.75rem] p-6 text-center sm:p-8">
          <div className="space-y-6">
            <p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              운영이 다시 시작되면 이 공간도 같은 톤으로 정리해 공개할 예정입니다.
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/">동아리 소개 보기</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/team">팀 구성 보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
