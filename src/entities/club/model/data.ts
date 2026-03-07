import type { ClubProfile } from "./types";

export const CLUB_PROFILE: ClubProfile = {
  name: "PROCESS",
  title: "실제 서비스를 운영하며 \n 실무 감각을 키우는 동아리",
  subtitle: "Clash 서비스 운영, 기초 교육, 협업 프로젝트를 하나의 흐름으로 연결합니다.",
  heroDescription:
    "PROCESS는 학습 기록 기반 경쟁 애플리케이션 Clash를 운영하면서 서비스 유지보수와 협업 개발을 경험하는 개발 동아리입니다.",
  badges: ["Clash 운영", "웹/서버 기초 교육", "Git/GitHub 협업", "프로젝트 멘토링"],
  programStages: [
    {
      step: "01",
      title: "기초 수업",
      description:
        "개발 환경 세팅부터 웹 기초, Java, Git/GitHub 사용법까지 개발자의 기반을 다집니다",
      highlights: ["개발 환경 세팅", "웹 기초 학습", "Java 학습", "Git/GitHub 실습"],
    },
    {
      step: "02",
      title: "개인 미니 프로젝트",
      description: "토이 프로젝트를 진행하며 스스로 구현하고 피드백을 반영하는 경험을 쌓습니다.",
      highlights: ["개인 토이 프로젝트", "주기적인 코드 피드백", "실제 문제 해결 경험"],
    },
    {
      step: "03",
      title: "협업 프로젝트",
      description:
        "기획부터 역할 분담, 기능 구현, 코드 리뷰까지 함께 진행하며 실제 팀 개발의 흐름을 익힙니다.",
      highlights: ["기획 및 역할 분담", "공동 기능 구현", "코드 리뷰와 기술 공유"],
    },
    {
      step: "04",
      title: "서비스 운영",
      description: "Clash 개선과 유지보수, 문서화, 인수인계까지 포함해 운영 경험을 연결합니다.",
      highlights: ["Clash 유지보수", "운영 문서화", "인수인계 경험"],
    },
  ],
};
