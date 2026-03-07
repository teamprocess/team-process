# Features Layer

사용자 인터랙션과 비즈니스 기능들입니다.

## 역할
- 사용자 시나리오/액션 구현 (로그인, 좋아요, 댓글 작성 등)
- Entities를 사용하여 기능 구현
- 비즈니스 로직 처리

## 구조
```
features/
  └── {slice}/
      ├── ui/           # 기능 UI 컴포넌트
      ├── model/        # 상태 관리
      ├── api/          # API 호출
      └── lib/          # 유틸리티
```

## 예시
- `auth/` - 인증 관련 기능
- `post-create/` - 게시글 작성
- `comment-like/` - 댓글 좋아요
