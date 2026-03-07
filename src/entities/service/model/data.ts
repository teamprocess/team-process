import type { Service } from "./types";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Clash 운영",
    description: "학습 기록 기반 경쟁 애플리케이션을 실제로 운영하며 유지보수 경험을 쌓습니다.",
    features: [
      "베타 테스트 및 정식 출시",
      "사용자 피드백 수집과 반영",
      "기능 개선 및 리팩토링",
      "운영 로그 확인과 안정화 작업",
    ],
    tags: ["Service Operation", "Feedback", "Refactoring"],
  },
  {
    id: 2,
    title: "기초 개발 교육",
    description: "1학년 학생들이 개발을 시작할 수 있도록 웹과 서버 기초를 체계적으로 다룹니다.",
    features: [
      "개발 환경 세팅과 도구 사용법 안내",
      "HTML/CSS/JavaScript 기초",
      "React 기초와 컴포넌트 실습",
      "Java 문법과 객체지향 기초",
      "Spring Boot 기본 구조와 REST API 실습",
      "Git/GitHub 실전 협업 사용법 실습",
    ],
    tags: ["HTML/CSS/JS", "Java", "Git/GitHub"],
  },
  {
    id: 3,
    title: "프로젝트 멘토링",
    description:
      "개인 토이 프로젝트와 팀 프로젝트 전 과정에서 코드 피드백과 기술 지원을 제공합니다.",
    features: [
      "토이 프로젝트 코드 리뷰",
      "기술 이슈 해결 지원",
      "주기적인 멘토링",
      "프로젝트 성과 공유와 피드백",
      "학습 방향 점검과 기술 스택 정리",
    ],
    tags: ["Mentoring", "Code Review", "Feedback"],
  },
  {
    id: 4,
    title: "협업 프로젝트",
    description: "학기와 방학 동안 역할 분담, 문서화, 회고까지 포함한 협업 프로젝트를 수행합니다.",
    features: [
      "Vanilla JS + Spring Boot 협업 프로젝트",
      "Spring Boot, React 심화 학습 연계",
      "온라인 협업 체계 구축",
      "프로젝트 결과 정리와 인수인계",
    ],
    tags: ["Team Project", "Spring Boot", "React"],
  },
];
