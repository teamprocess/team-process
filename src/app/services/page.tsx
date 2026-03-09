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
    <div className="bg-background">
      <section className="border-b border-border/70 bg-[linear-gradient(180deg,rgba(248,250,252,0.9),rgba(255,255,255,0.98))] dark:bg-[linear-gradient(180deg,rgba(38,41,45,0.94),rgba(45,48,52,0.97))]">
        <div className="container mx-auto max-w-6xl px-4 py-14 sm:py-16 lg:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
              Services
            </p>
            <h1 className="process-display text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-5xl">
              PROCESS가 운영하는 서비스
            </h1>
            <p className="max-w-2xl text-base leading-8 text-foreground/78 dark:text-foreground/84">
              실제로 운영하거나 개발한 서비스를 핵심 기능 중심으로 소개합니다.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-6xl px-4 py-10 sm:py-12 lg:py-14">

        <section className="mt-9 grid gap-5">
          {SERVICE_SHOWCASES.map((service, index) => (
            <article
              key={service.id}
              className="process-surface grid gap-6 rounded-[1.75rem] p-5 sm:p-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch"
            >
              <div className={index === 1 ? 'lg:order-2 lg:h-full' : 'lg:h-full'}>
                <div className="relative flex h-full min-h-[260px] items-center justify-center overflow-hidden rounded-[1.25rem] border border-border/70 bg-gradient-to-br from-muted/30 via-background to-muted/10 p-3 sm:min-h-[320px] sm:p-4">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,102,179,0.08),transparent_45%)]" />
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    width={1600}
                    height={900}
                    priority={index === 0}
                    className="relative h-full w-full object-contain"
                  />
                </div>
              </div>

              <div className={index === 1 ? 'lg:order-1' : undefined}>
                <div className="space-y-5">
                  <div className="space-y-2.5">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary/80">
                      {service.headline}
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                      {service.description}
                    </p>
                  </div>

                  {service.note ? (
                    <p className="text-sm leading-6 text-foreground/85">{service.note}</p>
                  ) : null}

                  <div className="space-y-3">
                    <p className="text-sm font-medium text-foreground">주요 기능</p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {service.features.map(feature => (
                        <li
                          key={feature}
                          className="rounded-xl border border-border/70 bg-muted/15 px-3.5 py-2.5 text-sm text-foreground"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.links.length > 0 ? (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {service.links.map(link => {
                        const Icon = LINK_ICONS[link.type]

                        if (!link.href) {
                          return (
                            <div
                              key={link.label}
                              className="inline-flex items-center gap-2 rounded-full border border-dashed border-border px-3 py-2 text-sm text-muted-foreground"
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
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
