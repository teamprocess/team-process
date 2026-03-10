import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui";
import type { TeamMember } from "../model/types";

interface MemberCardProps {
  member: TeamMember;
}

function getGithubUrl(handle: string) {
  return `https://github.com/${handle.replace(/^@/, "")}`;
}

function getVelogUrl(handle: string) {
  return `https://velog.io/${handle.startsWith("@") ? handle : `@${handle}`}`;
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <Card className="process-surface h-full gap-4 overflow-hidden rounded-[1.05rem] py-5">
      <CardHeader className="items-center px-5 py-3 text-center">
        <div className="mb-2 flex justify-center">
          <Avatar className="h-[4.5rem] w-[4.5rem] border border-border bg-muted/30">
            <AvatarImage src={member.imageSrc} alt={member.name} className="object-cover" />
            <AvatarFallback className="bg-muted/40 text-xl font-semibold text-foreground">
              {member.name.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="min-h-[1.5rem] text-lg leading-6">{member.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col items-center px-5 pt-0 text-center">
        <div className="flex min-h-[2.75rem] items-start justify-center">
          <p className="text-sm font-medium leading-6 text-muted-foreground">{member.role}</p>
        </div>
        {member.github || member.velog ? (
          <div className="mt-auto flex justify-center gap-2 pt-3">
            {member.github ? (
              <Link
                href={getGithubUrl(member.github)}
                target="_blank"
                rel="noreferrer"
                aria-label={`${member.name} GitHub 프로필`}
                title={member.github}
                className="inline-flex h-10 w-10 mb-1 items-center justify-center rounded-full border border-white/90 bg-white text-slate-950 transition-colors duration-200 hover:bg-white/92 dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/[0.1]"
              >
                <FaGithub className="size-[1.1rem]" />
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/90 bg-white text-slate-950 transition-colors duration-200 hover:bg-white/92 dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/[0.1]"
              >
                <SiVelog className="size-[1.1rem]" />
                <span className="sr-only">{member.velog}</span>
              </Link>
            ) : null}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
