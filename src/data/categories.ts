import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "itam",
    name: "ITAM",
    description: "IT 자산 관리 - 하드웨어, 소프트웨어, 네트워크 자산 추적 및 관리",
  },
  {
    id: "itom",
    name: "ITOM",
    description: "IT 운영 관리 - 인프라 모니터링, 성능 관리, 용량 계획",
  },
  {
    id: "itsm",
    name: "ITSM",
    description: "IT 서비스 관리 - 인시던트, 문제, 변경, 서비스 요청 관리",
  },
  {
    id: "analysis",
    name: "Analysis",
    description: "데이터 분석 및 시각화 - 로그 분석, 메트릭 시각화, 보고서 생성",
  },
  {
    id: "ai-automation",
    name: "AI/Automation",
    description: "지능형 자동화 - CI/CD, 워크플로우 자동화, AIOps",
  },
];
