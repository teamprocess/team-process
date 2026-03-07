# Widgets Layer

독립적이고 재사용 가능한 큰 UI 블록들입니다.

## 역할
- 완전한 기능을 가진 UI 블록 (헤더, 사이드바, 푸터 등)
- Features와 Entities를 조합
- 복잡한 비즈니스 로직 포함 가능

## 구조
```
widgets/
  └── {slice}/
      ├── ui/           # 위젯 컴포넌트
      ├── model/        # 상태 관리
      ├── api/          # API 호출
      └── lib/          # 유틸리티
```

## 예시
- `header/` - 네비게이션 헤더
- `sidebar/` - 사이드바
- `user-card/` - 사용자 카드 위젯
