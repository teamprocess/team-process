import { Avatar, AvatarFallback, Badge, Card, CardContent, CardHeader, CardTitle } from '@/shared/ui'
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
        <p className="text-sm font-medium text-muted-foreground">학번 {member.studentId}</p>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Badge variant="secondary" className="rounded-full px-3 py-1">
          PROCESS 동아리원
        </Badge>
      </CardContent>
    </Card>
  )
}
