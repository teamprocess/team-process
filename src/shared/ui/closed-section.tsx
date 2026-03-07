import Link from "next/link";
import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from "@/shared/ui";

interface ClosedSectionProps {
  label: string;
  description: string;
}

export function ClosedSection({ label, description }: ClosedSectionProps) {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <Card className="mx-auto max-w-3xl border-border/70 bg-muted/20">
          <CardHeader className="space-y-4 text-center">
            <div className="flex justify-center">
              <Badge variant="outline" className="rounded-full px-4 py-1 text-xs text-primary">
                {label}
              </Badge>
            </div>
            <CardTitle className="text-3xl sm:text-4xl">나중에 만나요!</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6 text-center">
            <p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              {description}
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/">동아리 소개 보기</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/team">팀 구성 보기</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
