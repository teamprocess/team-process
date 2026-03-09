import type { TeamMember } from "./types";

const SURNAME_IMAGE_SRC = {
  장: "/people/jang.png",
  채: "/people/chae.png",
  오: "/people/oh.png",
  홍: "/people/hong.png",
  박: "/people/park.png",
  김: "/people/kim.png",
  권: "/people/kwon.png",
  황: "/people/hwang.png",
} as const;

function getImageSrc(name: string) {
  const surname = name.charAt(0) as keyof typeof SURNAME_IMAGE_SRC;
  return SURNAME_IMAGE_SRC[surname];
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "장준혁",
    role: "Network Engineer",
    imageSrc: getImageSrc("장준혁"),
  },
  {
    id: 2,
    name: "채근영",
    role: "Team Leader & Software Engineer",
    imageSrc: getImageSrc("채근영"),
  },
  {
    id: 3,
    name: "오용준",
    role: "Frontend Developer",
    imageSrc: getImageSrc("오용준"),
  },
  {
    id: 4,
    name: "홍준기",
    role: "Backend Developer",
    imageSrc: getImageSrc("홍준기"),
  },
  {
    id: 5,
    name: "박승아",
    role: "Product Designer & Frontend Developer",
    imageSrc: getImageSrc("박승아"),
  },
  {
    id: 6,
    name: "김연호",
    role: "Backend Leader",
    imageSrc: getImageSrc("김연호"),
  },
  {
    id: 7,
    name: "권대형",
    role: "Software Engineer & AI Researcher",
    imageSrc: getImageSrc("권대형"),
  },
  {
    id: 8,
    name: "황정빈",
    role: "Backend Developer",
    imageSrc: getImageSrc("황정빈"),
  },
];
