# Shared Layer

프로젝트 전체에서 재사용되는 공통 코드입니다.

## 역할
- UI 컴포넌트 라이브러리
- 유틸리티 함수
- API 클라이언트
- 상수, 타입 정의
- 테마, 스타일 설정

## 구조
```
shared/
  ├── ui/              # 공통 UI 컴포넌트 (Button, Input 등)
  ├── lib/             # 유틸리티 함수
  ├── api/             # API 클라이언트, 인터셉터
  ├── config/          # 설정 파일 (theme, constants)
  └── model/           # 공통 타입, 인터페이스
```

## 예시
- `ui/button/` - 버튼 컴포넌트
- `lib/format-date/` - 날짜 포맷팅 함수
- `api/client/` - HTTP 클라이언트
- `config/theme/` - 테마 설정

## 원칙
- 비즈니스 로직 없음
- 순수하게 재사용 가능한 코드만 포함
- 다른 레이어에 의존하지 않음
