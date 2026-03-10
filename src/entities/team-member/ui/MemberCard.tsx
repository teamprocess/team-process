import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { SiVelog } from 'react-icons/si'
import { Avatar, AvatarFallback, AvatarImage, Card, CardContent, CardHeader, CardTitle } from '@/shared/ui'
import type { TeamMember } from '../model/types'

interface MemberCardProps {
  member: TeamMember
}

function getGithubUrl(handle: string) {
  return `https://github.com/${handle.replace(/^@/, '')}`
}

function getVelogUrl(handle: string) {
  return `https://velog.io/${handle.startsWith('@') ? handle : `@${handle}`}`
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <Card className="process-surface h-full overflow-hidden rounded-[1.5rem] transition-transform duration-200 hover:-translate-y-0.5">
      <CardHeader className="items-center text-center">
        <div className="flex justify-center mb-4">
          <Avatar className="h-20 w-20 border border-primary/20 bg-primary/8">
            <AvatarImage src={member.imageSrc} alt={member.name} className="object-cover" />
            <AvatarFallback className="bg-primary/10 text-xl font-semibold text-primary">
              {member.name.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="text-xl">{member.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-0 text-center">
        <p className="text-sm font-medium leading-6 text-muted-foreground">
          {member.role}
        </p>
        {member.github || member.velog ? (
          <div className="flex justify-center gap-2 pt-1">
            {member.github ? (
              <Link
                href={getGithubUrl(member.github)}
                target="_blank"
                rel="noreferrer"
                aria-label={`${member.name} GitHub 프로필`}
                title={member.github}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/90 bg-white text-slate-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/92 hover:shadow-md dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:shadow-none dark:hover:bg-white/[0.1]"
              >
                <FaGithub className="size-5" />
                <span className="sr-only">{member.github}</span>
              </Link>
            ) : null}
            {member.velog ? (
              <Link
                href={getVelogUrl(member.velog)}
                target="_blank"
                rel="noreferrer"
                aria-label={`${member.name} Velog 프로필`}
                title={member.velog}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/90 bg-white text-slate-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/92 hover:shadow-md dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:shadow-none dark:hover:bg-white/[0.1]"
              >
                <SiVelog className="size-5" />
                <span className="sr-only">{member.velog}</span>
              </Link>
            ) : null}
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}
