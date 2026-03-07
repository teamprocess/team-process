'use client'

import { CLUB_PROFILE } from '@/entities/club'
import { SERVICES } from '@/entities/service'
import { cn } from '@/shared/lib'
import { Badge, Button, CardTitle } from '@/shared/ui'
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import {
  HiOutlineArrowRight,
  HiOutlineBookOpen,
  HiOutlineCodeBracket,
  HiOutlineRocketLaunch,
  HiOutlineUsers,
  HiOutlineWrenchScrewdriver,
} from 'react-icons/hi2'

const STAGE_ICONS = [
  HiOutlineBookOpen,
  HiOutlineCodeBracket,
  HiOutlineUsers,
  HiOutlineWrenchScrewdriver,
]

const SERVICE_ICONS = [
  HiOutlineRocketLaunch,
  HiOutlineBookOpen,
  HiOutlineUsers,
  HiOutlineCodeBracket,
]

export function ClubHome() {
  const [activeStageIndex, setActiveStageIndex] = useState(0)
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0]?.id ?? 1)
  const shouldReduceMotion = useReducedMotion()

  const activeStage = CLUB_PROFILE.programStages[activeStageIndex] ?? CLUB_PROFILE.programStages[0]
  const activeService = SERVICES.find((service) => service.id === activeServiceId) ?? SERVICES[0]

  const sectionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
      },
    },
  }

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
      },
    },
  }

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-primary/14 via-primary/4 to-transparent dark:from-primary/7 dark:via-primary/2" />
        <motion.div
          className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-primary/18 blur-3xl dark:bg-primary/12"
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, 24, 0], y: [0, -12, 0], scale: [1, 1.06, 1] }
          }
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-0 top-16 h-72 w-72 rounded-full bg-chart-1/16 blur-3xl dark:bg-chart-1/12"
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, -20, 0], y: [0, 16, 0], scale: [1, 1.08, 1] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative container mx-auto px-4 py-12 sm:py-16 lg:py-24">
          <div className="max-w-4xl">
            <motion.div
              variants={staggerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <Badge
                  variant="outline"
                  className="rounded-full px-4 py-1 text-[11px] uppercase tracking-[0.24em] text-primary"
                >
                  {CLUB_PROFILE.category}
                </Badge>
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  variants={itemVariants}
                  className="max-w-4xl whitespace-pre-line text-4xl font-semibold leading-[1.08] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl"
                >
                  {CLUB_PROFILE.title}
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg"
                >
                  {CLUB_PROFILE.subtitle}
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base"
                >
                  {CLUB_PROFILE.heroDescription}
                </motion.p>
              </div>

              <motion.div variants={staggerVariants} className="flex flex-wrap gap-2">
                {CLUB_PROFILE.badges.map((badge) => (
                  <motion.div key={badge} variants={itemVariants}>
                    <Badge
                      variant="outline"
                      className="rounded-full border-border/70 bg-background/80 px-4 py-1.5"
                    >
                      {badge}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild className="sm:min-w-40">
                  <Link href="#activity-explorer">
                    활동 영역 보기
                    <HiOutlineArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="sm:min-w-40">
                  <Link href="/team">팀 구성 보기</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="container mx-auto space-y-14 px-4 py-10 sm:space-y-16 sm:py-14 lg:space-y-20 lg:py-16">
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-[2rem] border border-border/70 bg-muted/20 p-6 shadow-sm sm:p-7 lg:p-8"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-primary">About PROCESS</p>
              <CardTitle className="text-2xl sm:text-3xl">
                실제 서비스 개발의 흐름을 직접 경험합니다.
              </CardTitle>
            </div>

            <LayoutGroup>
              <div className="grid gap-3 sm:grid-cols-2">
                {CLUB_PROFILE.programStages.map((stage, index) => {
                  const Icon = STAGE_ICONS[index] ?? HiOutlineWrenchScrewdriver
                  const isActive = index === activeStageIndex

                  return (
                    <motion.button
                      key={stage.step}
                      type="button"
                      layout
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                      onClick={() => setActiveStageIndex(index)}
                      className={cn(
                        'relative overflow-hidden rounded-2xl border px-4 py-4 text-left transition-colors',
                        isActive
                          ? 'border-primary/40 bg-background shadow-sm'
                          : 'border-border/70 bg-background/70 hover:border-primary/20 hover:bg-background'
                      )}
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="stage-active-indicator"
                          className="absolute inset-0 rounded-2xl border border-primary/30"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      ) : null}

                      <div className="relative flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold tracking-[0.2em] text-primary">{stage.step}</p>
                          <p className="mt-2 text-base font-semibold leading-6 text-foreground">{stage.title}</p>
                        </div>
                        <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="size-5" />
                        </div>
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </LayoutGroup>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.step}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: 'easeOut' }}
                className="rounded-3xl border border-border/70 bg-background p-5"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="rounded-full px-3 py-1">
                      {activeStage.step}
                    </Badge>
                    <h3 className="text-xl font-semibold leading-[1.2] text-foreground">
                      {activeStage.title}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                      {activeStage.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {activeStage.highlights.map((highlight) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: 'easeOut' }}
                      className="rounded-2xl border border-border/70 bg-muted/10 px-4 py-3 text-sm text-foreground"
                    >
                      {highlight}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        <motion.section
          id="activity-explorer"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6 scroll-mt-24"
        >
          <div className="max-w-4xl space-y-3">
            <Badge variant="outline" className="rounded-full px-4 py-1 text-xs text-primary">
              Activity Explorer
            </Badge>
            <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-foreground text-balance sm:text-4xl">
              PROCESS는 운영, 교육, 멘토링, 협업 프로젝트를 함께 다룹니다.
            </h2>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              아래 활동을 눌러 보면 실제로 어떤 방식으로 동아리가 움직이는지 상세하게 확인할 수 있습니다.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
            <LayoutGroup>
              <div className="flex gap-3 overflow-x-auto pb-1 xl:flex-col">
                {SERVICES.map((service, index) => {
                  const Icon = SERVICE_ICONS[index] ?? HiOutlineRocketLaunch
                  const isActive = service.id === activeServiceId

                  return (
                    <motion.button
                      key={service.id}
                      type="button"
                      layout
                      onClick={() => setActiveServiceId(service.id)}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                      className={cn(
                        'relative min-w-[17rem] overflow-hidden rounded-3xl border px-5 py-4 text-left xl:min-w-0',
                        isActive
                          ? 'border-primary/40 bg-background shadow-sm'
                          : 'border-border/70 bg-muted/20 hover:border-primary/20 hover:bg-background'
                      )}
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="service-active-indicator"
                          className="absolute inset-0 rounded-3xl border border-primary/30"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      ) : null}

                      <div className="relative flex items-start gap-4">
                        <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="size-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-base font-semibold leading-6 text-foreground">{service.title}</p>
                          <p className="mt-1 line-clamp-2 text-sm leading-6 text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </LayoutGroup>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -18 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: 'easeOut' }}
                className="rounded-[2rem] border border-border/70 bg-background p-6 shadow-sm sm:p-7"
              >
                <div className="space-y-3">
                  <Badge variant="secondary" className="rounded-full px-3 py-1">
                    PROCESS Activity
                  </Badge>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold leading-[1.18] text-foreground sm:text-3xl">
                      {activeService.title}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                      {activeService.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {activeService.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.28,
                        ease: 'easeOut',
                        delay: shouldReduceMotion ? 0 : index * 0.04,
                      }}
                      className="rounded-2xl border border-border/70 bg-muted/20 px-4 py-3"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        <p className="text-sm leading-6 text-foreground">{feature}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {activeService.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

      </main>
    </div>
  )
}
