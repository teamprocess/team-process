import { CLUB_PROFILE, MarkdownContent, PROCESS_HOME_SECTIONS } from "@/entities/club";
import Link from "next/link";
import { HeroBackdrop } from "./HeroBackdrop";

const SECTION_DELAYS = [
  "process-delay-1",
  "process-delay-2",
  "process-delay-3",
  "process-delay-3",
  "process-delay-3",
];
const HERO_META_ITEMS = ["Clash 운영", "Frontend · Server · AI", "개인 프로젝트 멘토링"];

function formatSectionNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function ClubHome() {
  return (
    <div className="process-home bg-background">
      <section className="process-hero relative overflow-hidden border-b border-border/70">
        <HeroBackdrop />

        <div className="container relative z-10 mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">
          <div className="process-fade-up max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
              PROCESS Developer Club
            </p>
            <h1 className="process-display whitespace-pre-line text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
              {CLUB_PROFILE.title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-foreground/82 sm:text-lg dark:text-foreground/88">
              {CLUB_PROFILE.subtitle}
            </p>
            <p className="max-w-2xl text-sm leading-7 text-foreground/66 sm:text-base dark:text-foreground/74">
              {CLUB_PROFILE.heroDescription}
            </p>
            <div className="process-fade-up process-delay-1 flex flex-wrap gap-x-4 gap-y-2 pt-2 text-sm text-foreground/72 dark:text-foreground/78">
              {HERO_META_ITEMS.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary/70" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-6xl px-4 py-10 sm:py-12 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-8">
          <aside className="process-fade-up process-delay-2 lg:sticky lg:top-24 lg:self-start">
            <div className="process-surface rounded-[1.75rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
                Contents
              </p>
              <nav className="mt-4 space-y-2">
                {PROCESS_HOME_SECTIONS.map((section, index) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground"
                  >
                    <span className="font-medium text-primary/70">{formatSectionNumber(index)}</span>
                    <span>{section.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-5">
            {PROCESS_HOME_SECTIONS.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className={`process-surface process-fade-up ${SECTION_DELAYS[index]} rounded-[2rem] px-6 py-6 scroll-mt-24 sm:px-8 sm:py-8 lg:px-10`}
              >
                <div className="mb-5 flex items-center justify-between gap-4 border-b border-border/70 pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
                    {section.label}
                  </p>
                  <span className="text-xs font-medium text-muted-foreground">
                    {formatSectionNumber(index)}
                  </span>
                </div>
                <MarkdownContent content={section.content} className="process-home-markdown" />
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
