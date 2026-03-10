import type { ClubProfile } from "./types";

export const CLUB_PROFILE: ClubProfile = {
  name: "PROCESS",
  // title: "최고를 향해,\n실제 서비스를 만드는 동아리",
  title: "처음의 떨림을,\n끝내 자신감으로 바꾸는 동아리",
  subtitle:
    "신입생도 괜찮습니다. 기초 교육부터 개인 프로젝트, 협업, 실제 서비스 운영까지 \n배우고 바로 해보는 흐름으로 성장합니다.",
  heroDescription:
    "웹 개발을 처음 시작해도 됩니다. 10기에서 실력을 증명한 선배들이 만든 신생 동아리에서 개발 환경 세팅부터 멘토링까지 함께하고, 1학년부터 직접 만들고 협업하고 운영합니다.",
  badges: [
    "Clash 서비스 운영",
    "Frontend/Server/AI/Network 멘토링",
    "과정형 멘토링",
    "높은 기준의 팀 문화",
  ],
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
      title: "1학년 개인 프로젝트",
      description:
        "개인 프로젝트를 진행하며 선배 멘토와 함께 기획, 구현, 피드백, 개선의 과정을 반복합니다.",
      highlights: ["개인 프로젝트", "과정형 멘토링", "주기적인 코드 피드백", "실제 문제 해결 경험"],
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
