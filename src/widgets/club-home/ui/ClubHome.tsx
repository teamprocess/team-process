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
const HERO_META_ITEMS = ["Clash 운영", "Frontend · Server · AI · Network", "개인 프로젝트 멘토링"];
const INTRO_HIGHLIGHTS = [
  "최고의 선배",
  "과정 중심 멘토링",
  "실제 운영 경험",
] as const;

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
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground/52 dark:text-foreground/58">
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
                  <span className="size-1.5 rounded-full bg-[#5b8dca] dark:bg-[#7ca9de]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-6xl px-4 py-10 sm:py-12 lg:py-16">
        <div className="space-y-8 lg:space-y-10">
          <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-8">
            <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
              <div className="process-surface rounded-[1.05rem] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/58 dark:text-foreground/64">
                  Contents
                </p>
                <nav className="mt-4 space-y-2">
                  {PROCESS_HOME_SECTIONS.map((section, index) => (
                    <Link
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-foreground/72 transition-colors hover:bg-black/[0.03] hover:text-foreground dark:text-foreground/76 dark:hover:bg-white/[0.04]"
                    >
                      <span className="font-medium text-foreground/52 dark:text-foreground/58">
                        {formatSectionNumber(index)}
                      </span>
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
                  className={`process-surface process-fade-up ${SECTION_DELAYS[index]} rounded-[1.08rem] px-6 py-6 scroll-mt-24 sm:px-8 sm:py-8 lg:px-10`}
                >
                  <div className="mb-5 flex items-center justify-between gap-4 border-b border-border/70 pb-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/46 dark:text-foreground/54">
                      {section.label}
                    </p>
                    <span className="text-xs font-medium text-muted-foreground">
                      {formatSectionNumber(index)}
                    </span>
                  </div>
                  {section.id === "intro" ? (
                    <div className="space-y-7">
                      <MarkdownContent content={section.content} className="process-home-markdown" />

                      <div className="border-t border-border/70 pt-6 dark:border-white/8">
                        <div className="process-benefit-band rounded-[0.9rem] px-5 py-5 sm:px-6">
                          <div className="flex flex-col gap-5 lg:flex-row lg:justify-between items-center">
                            <div className="max-w-md space-y-2">
                              <p className="text-sm font-semibold text-foreground/82 dark:text-foreground/86">
                                프로세스만의 장점 3가지
                              </p>
                              <p className="text-sm leading-7 text-foreground/64 dark:text-foreground/72 sm:text-[0.95rem]">
                                좋은 선배와 멘토링, 실제 운영 경험이 한 흐름으로 이어져서 처음 시작해도 빠르게 감이 잡힙니다.
                              </p>
                            </div>

                            <div className="flex justify-center lg:justify-end">
                              <div className="flex items-end justify-center -space-x-3 sm:-space-x-4">
                                {INTRO_HIGHLIGHTS.map((item, highlightIndex) => (
                                  <div
                                    key={item}
                                    className={`process-benefit-orb flex items-center justify-center rounded-full px-3 text-center ${
                                      highlightIndex === 0
                                        ? "size-[5.2rem] sm:size-[5.8rem]"
                                        : highlightIndex === 1
                                          ? "relative z-10 size-[5.85rem] sm:size-[6.45rem]"
                                          : "size-[5.4rem] sm:size-[6rem]"
                                    }`}
                                  >
                                    <span className="text-[0.69rem] font-medium leading-4 text-foreground/92 sm:text-[0.8rem] sm:leading-5" style={{
                                      wordBreak: "auto-phrase"
                                    }}>
                                      {item}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <MarkdownContent content={section.content} className="process-home-markdown" />
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
