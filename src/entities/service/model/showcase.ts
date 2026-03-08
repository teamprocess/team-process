import type { ServiceShowcase } from './types'

export const SERVICE_SHOWCASES: ServiceShowcase[] = [
  {
    id: 'sh4re',
    title: 'Sh4re',
    headline: '정보 수업에 최적화된 학습 관리 플랫폼',
    description:
      'Sh4re는 정보 수업에서 반복적으로 발생하던 과제 제출과 확인의 불편을 줄이기 위해 만든 LMS입니다. 교사는 과제를 더 효율적으로 관리할 수 있고, 학생은 제출 결과를 더 직관적으로 확인할 수 있도록 과제 운영 흐름 전반을 수업 환경에 맞게 설계했습니다.',
    note: 'Velog 월간 1위를 기록한 소개글을 통해 프로젝트의 배경과 방향을 함께 확인할 수 있습니다.',
    features: [
      '과제 대시보드',
      '웹 뷰어',
      '파이썬 과제 자동 채점',
      '수업자료 공유',
      '코드 공유',
    ],
    links: [
      {
        label: 'Velog 소개글',
        href: 'https://velog.io/@__chaeyn/%EA%B3%A01%EC%9D%98-%EC%8B%A4%EC%82%AC%EC%9A%A9-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8',
        type: 'article',
      },
      {
        label: 'Web GitHub',
        href: 'https://github.com/teamprocess/sh4re-web-v3',
        type: 'github',
      },
      {
        label: 'Server GitHub',
        href: 'https://github.com/teamprocess/sh4re-server-v3',
        type: 'github',
      },
    ],
    image: {
      src: '/services/sh4re-overview.png',
      alt: '과제 대시보드와 웹 뷰어를 함께 보여주는 Sh4re 대표 화면',
    },
  },
  {
    id: 'clash',
    title: 'Clash',
    headline: '학습 기록을 기반으로 습관을 만드는 경쟁형 서비스',
    description:
      'Clash는 친구와 실시간으로 학습량을 비교하고 기록하며, 꾸준한 공부 습관을 만들 수 있도록 돕는 서비스입니다. 타이머, 데이터 시각화, 경쟁 요소를 결합해 학습 동기를 자연스럽게 이어갈 수 있는 경험을 제공합니다.',
    features: [
      '백그라운드 IDE 트래킹',
      'GitHub 정보 연동',
      '경쟁 시스템',
      '학습시간 기록',
      '상점 기능',
      '로드맵',
    ],
    links: [
      {
        label: 'Client GitHub',
        href: 'https://github.com/TeamProcess/clash-client',
        type: 'github',
      },
      {
        label: 'Server GitHub',
        href: 'https://github.com/teamprocess/clash-server',
        type: 'github',
      },
    ],
    image: {
      src: '/services/clash-overview.png',
      alt: '학습 기록과 경쟁 흐름을 보여주는 Clash 대표 화면',
    },
  },
]
