# App Layer (Next.js Routing)

Next.js의 App Router 디렉토리입니다. 라우팅과 페이지 컴포넌트를 함께 관리합니다.

## 역할
- 페이지 라우팅 및 페이지 컴포넌트 (page.tsx)
- 레이아웃 정의 (layout.tsx)
- API Routes (api/)
- 전역 스타일 (globals.css)
- 메타데이터 및 SEO 설정
- Loading, Error UI

## 구조
```
app/
├── (auth)/          # Route Group (URL에 포함되지 않음)
│   ├── login/
│   │   └── page.tsx
│   └── layout.tsx
├── dashboard/       # /dashboard 경로
│   └── page.tsx
├── layout.tsx       # 루트 레이아웃
└── page.tsx         # 홈 페이지
```

## 페이지 컴포넌트 작성
페이지에서는 widgets, features, entities를 조합합니다:

```typescript
// app/dashboard/page.tsx
import { Header } from '@/widgets/header'
import { UserProfile } from '@/features/user-profile'
import { DashboardCard } from '@/widgets/dashboard-card'

export default function DashboardPage() {
  return (
    <>
      <Header />
      <UserProfile />
      <DashboardCard />
    </>
  )
}
```
