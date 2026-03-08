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
      <main className="container mx-auto px-4 py-10 sm:py-12 lg:py-14">
        <section className="max-w-2xl space-y-2">
          <p className="text-sm font-medium text-primary">Services</p>
          <h1 className="text-3xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-4xl">
            PROCESS가 운영하는 서비스
          </h1>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            실제로 운영하거나 개발한 서비스를 핵심 기능 중심으로 간단하게 소개합니다.
          </p>
        </section>

        <section className="mt-9 grid gap-5">
          {SERVICE_SHOWCASES.map((service, index) => (
            <article
              key={service.id}
              className="grid gap-6 rounded-[1.5rem] border border-border/70 bg-card p-5 shadow-sm sm:p-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch"
            >
              <div className={index === 1 ? 'lg:order-2 lg:h-full' : 'lg:h-full'}>
                <div className="relative flex h-full min-h-[260px] items-center justify-center overflow-hidden rounded-[1.1rem] border border-border/70 bg-gradient-to-br from-muted/40 via-background to-muted/20 p-3 sm:min-h-[320px] sm:p-4">
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
                          className="rounded-xl border border-border/70 bg-muted/20 px-3.5 py-2.5 text-sm text-foreground"
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
