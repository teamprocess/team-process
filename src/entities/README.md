# Entities Layer

비즈니스 엔티티들입니다.

## 역할
- 도메인 모델 정의 (User, Post, Comment 등)
- 엔티티 관련 UI 컴포넌트
- 엔티티 데이터 관리 및 API

## 구조
```
entities/
  └── {slice}/
      ├── ui/           # 엔티티 UI 컴포넌트
      ├── model/        # 타입, 스키마, 상태
      ├── api/          # CRUD API
      └── lib/          # 유틸리티
```

## 예시
- `user/` - 사용자 엔티티
- `post/` - 게시글 엔티티
- `comment/` - 댓글 엔티티

## 원칙
- 다른 entities에 의존하지 않음
- 순수한 비즈니스 로직만 포함
