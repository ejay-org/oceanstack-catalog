import { Module } from "@/types";

export const modules: Module[] = [
  // ITAM 모듈
  {
    id: "itam-asset",
    name: "자산관리",
    description: "인벤토리 자동 수집, 토폴로지 시각화",
    category: "itam",
    requiredFeatures: [
      "inventory-collection",
      "asset-tracking",
      "topology-visualization",
      "ipam",
      "dcim",
    ],
  },
  {
    id: "itam-security",
    name: "보안관리",
    description: "취약점 스캔, 콘솔/자원 접근 제어",
    category: "itam",
    requiredFeatures: [
      "vulnerability-scanning",
      "access-control",
      "secrets-management",
      "authentication",
      "authorization",
    ],
  },
  {
    id: "itam-cost",
    name: "비용관리",
    description: "비용/사용량 조회, 예산/진척 관리, 최적화 추천",
    category: "itam",
    requiredFeatures: [
      "cost-tracking",
      "budget-management",
      "usage-monitoring",
      "optimization-recommendations",
      "cost-analysis",
    ],
  },

  // ITOM 모듈
  {
    id: "itom-monitoring",
    name: "모니터링",
    description: "성능/로그/이벤트 수집, 모니터링 메트릭 관리, 트레이스 수집",
    category: "itom",
    requiredFeatures: [
      "metrics-collection",
      "log-collection",
      "trace-collection",
      "performance-monitoring",
      "event-monitoring",
      "observability",
    ],
  },
  {
    id: "itom-detection",
    name: "이상감지/전파",
    description: "전파체계 관리, 전파채널 자동연계",
    category: "itom",
    requiredFeatures: [
      "alerting",
      "anomaly-detection",
      "notification-routing",
      "alert-management",
    ],
  },
  {
    id: "itom-recovery",
    name: "자동복구",
    description: "자동화 스크립트 관리, 상황 판단 및 자동 대응",
    category: "itom",
    requiredFeatures: [
      "automation",
      "orchestration",
      "auto-remediation",
      "configuration-management",
      "infrastructure-as-code",
    ],
  },

  // ITSM 모듈
  {
    id: "itsm-desk",
    name: "서비스 데스크",
    description: "고객 VoC 접수, 만족도 조사",
    category: "itsm",
    requiredFeatures: [
      "ticketing",
      "customer-feedback",
      "satisfaction-survey",
      "help-desk",
    ],
  },
  {
    id: "itsm-workflow",
    name: "워크플로우 관리",
    description: "고객 서비스 요청, 앱/인프라 변경 요청",
    category: "itsm",
    requiredFeatures: [
      "workflow-engine",
      "change-management",
      "request-management",
      "approval-process",
      "bpm",
    ],
  },
  {
    id: "itsm-contract",
    name: "계약/실적 관리",
    description: "서비스 계약 관리, M/M 진척관리, SLA 관리",
    category: "itsm",
    requiredFeatures: [
      "contract-management",
      "sla-management",
      "progress-tracking",
      "erp",
      "project-management",
    ],
  },

  // Analysis 모듈
  {
    id: "analysis-lake",
    name: "데이터 레이크",
    description: "분석 데이터 통합, 상세 데이터 검색",
    category: "analysis",
    requiredFeatures: [
      "data-storage",
      "data-integration",
      "search",
      "time-series-db",
      "object-storage",
    ],
  },
  {
    id: "analysis-trend",
    name: "트렌드/예측 분석",
    description: "대시보드 시각화, 보고서 생성",
    category: "analysis",
    requiredFeatures: [
      "dashboard",
      "visualization",
      "reporting",
      "analytics",
      "business-intelligence",
    ],
  },
  {
    id: "analysis-report",
    name: "자동 리포팅",
    description: "리포트 자동 생성, 정기/비정기 발송",
    category: "analysis",
    requiredFeatures: [
      "report-generation",
      "scheduling",
      "automated-reporting",
      "data-pipeline",
      "etl",
    ],
  },

  // AI/Automation 모듈
  {
    id: "ai-agent",
    name: "AI Agent",
    description: "KB/RAG 구축, 고객/운영자 Copilot",
    category: "ai-automation",
    requiredFeatures: [
      "llm-integration",
      "rag",
      "knowledge-base",
      "chatbot",
      "ai-assistant",
      "embedding",
    ],
  },
  {
    id: "ai-automation-module",
    name: "Automation",
    description: "반복업무 자동화, Agent용 API 제공",
    category: "ai-automation",
    requiredFeatures: [
      "ci-cd",
      "automation",
      "api-integration",
      "gitops",
      "workflow-automation",
    ],
  },
];
