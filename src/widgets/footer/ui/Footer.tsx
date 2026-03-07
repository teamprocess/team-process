import { Separator } from '@/shared/ui'
import { MAIN_NAVIGATION, SITE_CONFIG } from '@/shared/config'
import Image from 'next/image'
import Link from 'next/link'

const CLUB_FOCUS = ['Clash 운영', '기초 웹/Java 교육', 'Git/GitHub 협업', '프로젝트 멘토링']

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.3fr_0.85fr_0.85fr]">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image src={SITE_CONFIG.logo} alt={SITE_CONFIG.name} width={151} height={24} className="h-6 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">{SITE_CONFIG.description}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              {MAIN_NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">핵심 활동</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {CLUB_FOCUS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} {SITE_CONFIG.name}. School development club.</p>
          <p>기획부터 운영과 문서화까지 실제 서비스 흐름을 경험합니다.</p>
        </div>
      </div>
    </footer>
  )
}
