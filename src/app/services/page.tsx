import Image from 'next/image'

import { SERVICE_SHOWCASES } from '@/entities/service'
import { Button } from '@/shared/ui'
import { HiOutlineCodeBracket, HiOutlineGlobeAlt } from 'react-icons/hi2'

const LINK_ICONS = {
  github: HiOutlineCodeBracket,
  website: HiOutlineGlobeAlt,
  article: HiOutlineGlobeAlt,
} as const

export default function ServicesPage() {
  return (
    <div className="process-services bg-background">
      <section className="border-b border-border/70 bg-[linear-gradient(180deg,rgba(248,250,252,0.9),rgba(255,255,255,0.98))] dark:bg-[linear-gradient(180deg,rgba(18,21,25,0.99),rgba(24,28,33,0.98))]">
        <div className="container mx-auto max-w-6xl px-4 py-14 sm:py-16 lg:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
              Services
            </p>
            <h1 className="process-display text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
              PROCESS가 운영하는 서비스
            </h1>
            <p className="max-w-2xl text-base leading-8 text-foreground/78 dark:text-foreground/84">
              실제로 운영하거나 개발한 서비스를 핵심 기능 중심으로 소개합니다.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-6xl px-4 py-10 sm:py-12 lg:py-14">
        <section className="space-y-5">
          {SERVICE_SHOWCASES.map((service, index) => (
            <article
              key={service.id}
              className={`process-surface process-fade-up ${index === 0 ? 'process-delay-1' : 'process-delay-2'} rounded-[2rem] px-6 py-6 sm:px-8 sm:py-8 lg:px-10`}
            >
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-stretch">
                <div className={index % 2 === 1 ? 'lg:order-2' : undefined}>
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-border/70 bg-[linear-gradient(145deg,rgba(248,250,252,0.92),rgba(255,255,255,0.78))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:p-4 dark:border-white/10 dark:bg-[linear-gradient(145deg,rgba(33,37,42,0.94),rgba(23,26,31,0.88))] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,102,179,0.10),transparent_42%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(45,178,255,0.14),transparent_42%)]" />
                    <div className="relative flex min-h-[260px] items-center justify-center sm:min-h-[320px]">
                      <Image
                        src={service.image.src}
                        alt={service.image.alt}
                        width={1600}
                        height={900}
                        priority={index === 0}
                        className="relative z-10 h-full w-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : undefined}>
                  <div className="space-y-5">
                    <div className="space-y-2.5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75">
                        {service.headline}
                      </p>
                      <h2 className="process-display text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-4xl">
                        {service.title}
                      </h2>
                      <p className="text-sm leading-8 text-muted-foreground dark:text-foreground/78 sm:text-base">
                        {service.description}
                      </p>
                    </div>

                    {service.note ? (
                      <div className="rounded-[1.25rem] border border-primary/15 bg-primary/5 px-4 py-3 text-sm leading-7 text-foreground/84 dark:border-sky-400/16 dark:bg-sky-400/8 dark:text-foreground/80">
                        {service.note}
                      </div>
                    ) : null}

                    <div className="space-y-3">
                      <p className="text-sm font-medium text-foreground">주요 기능</p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 rounded-[1rem] border border-border/70 bg-muted/10 px-3.5 py-3 text-sm text-foreground dark:border-white/8 dark:bg-white/[0.03] dark:text-foreground/86"
                          >
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/70" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {service.links.length > 0 ? (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {service.links.map((link) => {
                          const Icon = LINK_ICONS[link.type]

                          if (!link.href) {
                            return (
                              <div
                                key={link.label}
                                className="inline-flex items-center gap-2 rounded-full border border-dashed border-border px-3 py-2 text-sm text-muted-foreground dark:border-white/10 dark:text-foreground/62"
                              >
                                {link.label}
                                <span className="text-xs">URL 추가 가능</span>
                              </div>
                            )
                          }

                          return (
                            <Button
                              key={link.label}
                              asChild
                              variant="outline"
                              className="h-9 rounded-full px-3.5"
                            >
                              <a href={link.href} target="_blank" rel="noreferrer">
                                {link.label}
                                <Icon className="size-4" />
                              </a>
                            </Button>
                          )
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
