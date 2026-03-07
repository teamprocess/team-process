import { Avatar, AvatarFallback, Card, CardContent, CardHeader, CardTitle } from '@/shared/ui'
import type { TeamMember } from '../model/types'

interface MemberCardProps {
  member: TeamMember
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <Card className="h-full border-border/70 bg-background shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="items-center text-center">
        <div className="flex justify-center mb-4">
          <Avatar className="h-20 w-20 border border-primary/20 bg-primary/10">
            <AvatarFallback className="bg-primary/10 text-xl font-semibold text-primary">
              {member.name.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="text-xl">{member.name}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 text-center">
        <p className="text-sm font-medium leading-6 text-muted-foreground">
          {member.role}
        </p>
      </CardContent>
    </Card>
  )
}
