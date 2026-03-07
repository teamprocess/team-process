export interface NavigationItem {
  name: string
  href: string
  newTab?: boolean
}

export const MAIN_NAVIGATION: NavigationItem[] = [
  { name: "동아리 소개", href: "/" },
  { name: "팀 구성", href: "/team" },
  { name: "서비스", href: "/services" },
  { name: "팀 블로그", href: "/blog" },
  { name: "기술 블로그", href: "/tech-blog" },
  { name: "Github", href: "https://github.com/teamprocess", newTab: true },
]
