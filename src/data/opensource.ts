import { OpenSource } from "@/types";

export const openSourceProjects: OpenSource[] = [
  // NetBox - IPAM & DCIM
  {
    id: "netbox",
    name: "NetBox",
    description: "IP 주소 관리 및 데이터센터 인프라 관리 (IPAM & DCIM)",
    license: "Apache-2.0",
    githubUrl: "https://github.com/netbox-community/netbox",
    stars: 16000,
    startYear: 2016,
    language: "Python",
    features: ["ipam", "dcim", "asset-tracking", "inventory-collection", "topology-visualization"],
    icon: "Database",
  },
  
  // Snipe-IT - Asset Management
  {
    id: "snipe-it",
    name: "Snipe-IT",
    description: "IT 자산 관리 시스템 - 하드웨어, 소프트웨어, 라이선스 추적",
    license: "AGPL-3.0",
    githubUrl: "https://github.com/snipe/snipe-it",
    stars: 11000,
    startYear: 2013,
    language: "PHP",
    features: ["asset-tracking", "inventory-collection"],
    icon: "Package",
  },
  
  // Ralph - Asset Management Platform
  {
    id: "ralph",
    name: "Ralph",
    description: "데이터센터 및 백오피스 자산 관리 플랫폼",
    license: "Apache-2.0",
    githubUrl: "https://github.com/allegro/ralph",
    stars: 2200,
    startYear: 2010,
    language: "Python",
    features: ["dcim", "asset-tracking", "inventory-collection"],
    icon: "Server",
  },
  
  // RackTables - Data Center Asset Management
  {
    id: "racktables",
    name: "RackTables",
    description: "데이터센터 자산 관리 및 문서화",
    license: "GPL-2.0",
    githubUrl: "https://github.com/RackTables/racktables",
    stars: 700,
    startYear: 2008,
    language: "PHP",
    features: ["dcim", "asset-tracking", "topology-visualization"],
    icon: "Database",
  },
  
  // OpenVAS - Vulnerability Scanner
  {
    id: "openvas",
    name: "OpenVAS",
    description: "강력한 취약점 스캔 및 관리 시스템",
    license: "GPL-2.0",
    githubUrl: "https://github.com/greenbone/openvas-scanner",
    stars: 3200,
    startYear: 2009,
    language: "C",
    features: ["vulnerability-scanning"],
    icon: "Shield",
  },
  
  // Trivy - Container Security Scanner
  {
    id: "trivy",
    name: "Trivy",
    description: "컨테이너 이미지 취약점 스캐너",
    license: "Apache-2.0",
    githubUrl: "https://github.com/aquasecurity/trivy",
    stars: 23000,
    startYear: 2019,
    language: "Go",
    features: ["vulnerability-scanning"],
    icon: "ShieldCheck",
  },
  
  // Vault - Secrets Management
  {
    id: "vault",
    name: "HashiCorp Vault",
    description: "시크릿 및 데이터 보호 관리",
    license: "MPL-2.0",
    githubUrl: "https://github.com/hashicorp/vault",
    stars: 31000,
    startYear: 2015,
    language: "Go",
    features: ["secrets-management", "access-control", "authentication"],
    icon: "Lock",
  },
  
  // Keycloak - Identity and Access Management
  {
    id: "keycloak",
    name: "Keycloak",
    description: "오픈소스 인증 및 권한 관리 솔루션",
    license: "Apache-2.0",
    githubUrl: "https://github.com/keycloak/keycloak",
    stars: 23000,
    startYear: 2014,
    language: "Java",
    features: ["authentication", "authorization", "access-control"],
    icon: "Key",
  },
  
  // OpenCost - Cloud Cost Monitoring
  {
    id: "opencost",
    name: "OpenCost",
    description: "Kubernetes 비용 모니터링 및 관리",
    license: "Apache-2.0",
    githubUrl: "https://github.com/opencost/opencost",
    stars: 5000,
    startYear: 2021,
    language: "Go",
    features: ["cost-tracking", "cost-analysis", "usage-monitoring"],
    icon: "DollarSign",
  },
  
  // Infracost - Infrastructure Cost Estimation
  {
    id: "infracost",
    name: "Infracost",
    description: "인프라 비용 예측 및 분석 도구",
    license: "Apache-2.0",
    githubUrl: "https://github.com/infracost/infracost",
    stars: 11000,
    startYear: 2020,
    language: "Go",
    features: ["cost-analysis", "optimization-recommendations", "budget-management"],
    icon: "Calculator",
  },
  
  // Cloud Custodian - Cloud Governance
  {
    id: "cloud-custodian",
    name: "Cloud Custodian",
    description: "클라우드 자원 관리 및 비용 최적화",
    license: "Apache-2.0",
    githubUrl: "https://github.com/cloud-custodian/cloud-custodian",
    stars: 5300,
    startYear: 2016,
    language: "Python",
    features: ["cost-tracking", "optimization-recommendations", "automation"],
    icon: "Cloud",
  },
  
  // Prometheus - Monitoring System
  {
    id: "prometheus",
    name: "Prometheus",
    description: "강력한 메트릭 수집 및 모니터링 시스템",
    license: "Apache-2.0",
    githubUrl: "https://github.com/prometheus/prometheus",
    stars: 55000,
    startYear: 2012,
    language: "Go",
    features: ["metrics-collection", "performance-monitoring", "time-series-db", "alerting"],
    icon: "https://prometheus.io/assets/favicons/android-chrome-192x192.png",
  },
  
  // Grafana - Visualization Platform
  {
    id: "grafana",
    name: "Grafana",
    description: "메트릭 시각화 및 대시보드 플랫폼",
    license: "AGPL-3.0",
    githubUrl: "https://github.com/grafana/grafana",
    stars: 64000,
    startYear: 2014,
    language: "TypeScript",
    features: ["dashboard", "visualization", "analytics", "reporting", "alerting"],
    icon: "https://grafana.com/static/img/menu/grafana2.svg",
  },
  
  // Zabbix - Enterprise Monitoring
  {
    id: "zabbix",
    name: "Zabbix",
    description: "엔터프라이즈급 모니터링 솔루션",
    license: "GPL-2.0",
    githubUrl: "https://github.com/zabbix/zabbix",
    stars: 4500,
    startYear: 2001,
    language: "C",
    features: ["metrics-collection", "performance-monitoring", "event-monitoring", "alerting"],
    icon: "Activity",
  },
  
  // Jaeger - Distributed Tracing
  {
    id: "jaeger",
    name: "Jaeger",
    description: "분산 추적 시스템",
    license: "Apache-2.0",
    githubUrl: "https://github.com/jaegertracing/jaeger",
    stars: 20000,
    startYear: 2017,
    language: "Go",
    features: ["trace-collection", "observability", "performance-monitoring"],
    icon: "Network",
  },
  
  // OpenTelemetry - Observability Framework
  {
    id: "opentelemetry",
    name: "OpenTelemetry",
    description: "통합 관측성 프레임워크",
    license: "Apache-2.0",
    githubUrl: "https://github.com/open-telemetry/opentelemetry-collector",
    stars: 4300,
    startYear: 2019,
    language: "Go",
    features: ["metrics-collection", "log-collection", "trace-collection", "observability"],
    icon: "Telescope",
  },
  
  // Alertmanager - Alert Management
  {
    id: "alertmanager",
    name: "Alertmanager",
    description: "알림 관리 및 전파 시스템",
    license: "Apache-2.0",
    githubUrl: "https://github.com/prometheus/alertmanager",
    stars: 6500,
    startYear: 2015,
    language: "Go",
    features: ["alerting", "notification-routing", "alert-management"],
    icon: "Bell",
  },
  
  // ElastAlert - Alerting for Elasticsearch
  {
    id: "elastalert",
    name: "ElastAlert",
    description: "Elasticsearch 기반 알림 프레임워크",
    license: "Apache-2.0",
    githubUrl: "https://github.com/jertel/elastalert2",
    stars: 900,
    startYear: 2020,
    language: "Python",
    features: ["alerting", "anomaly-detection", "notification-routing"],
    icon: "AlertTriangle",
  },
  
  // Alerta - Alert Consolidation
  {
    id: "alerta",
    name: "Alerta",
    description: "통합 알림 관리 시스템",
    license: "Apache-2.0",
    githubUrl: "https://github.com/alerta/alerta",
    stars: 2300,
    startYear: 2012,
    language: "Python",
    features: ["alerting", "alert-management", "notification-routing"],
    icon: "BellRing",
  },
  
  // Rundeck - Runbook Automation
  {
    id: "rundeck",
    name: "Rundeck",
    description: "작업 스케줄링 및 자동화 플랫폼",
    license: "Apache-2.0",
    githubUrl: "https://github.com/rundeck/rundeck",
    stars: 5500,
    startYear: 2010,
    language: "Java",
    features: ["automation", "orchestration", "scheduling"],
    icon: "PlayCircle",
  },
  
  // StackStorm - Event-Driven Automation
  {
    id: "stackstorm",
    name: "StackStorm",
    description: "이벤트 기반 자동화 플랫폼",
    license: "Apache-2.0",
    githubUrl: "https://github.com/StackStorm/st2",
    stars: 6000,
    startYear: 2014,
    language: "Python",
    features: ["automation", "orchestration", "auto-remediation"],
    icon: "Zap",
  },
  
  // Ansible - Configuration Management
  {
    id: "ansible",
    name: "Ansible",
    description: "구성 관리 및 자동화 도구",
    license: "GPL-3.0",
    githubUrl: "https://github.com/ansible/ansible",
    stars: 63000,
    startYear: 2012,
    language: "Python",
    features: ["automation", "configuration-management", "orchestration", "infrastructure-as-code"],
    icon: "Settings",
  },
  
  // Kubernetes - Container Orchestration
  {
    id: "kubernetes",
    name: "Kubernetes",
    description: "컨테이너 오케스트레이션 플랫폼",
    license: "Apache-2.0",
    githubUrl: "https://github.com/kubernetes/kubernetes",
    stars: 110000,
    startYear: 2014,
    language: "Go",
    features: ["orchestration", "automation", "auto-remediation", "infrastructure-as-code"],
    icon: "https://kubernetes.io/images/favicon.png",
  },
  
  // osTicket - Help Desk System
  {
    id: "osticket",
    name: "osTicket",
    description: "오픈소스 헬프데스크 티켓 시스템",
    license: "GPL-2.0",
    githubUrl: "https://github.com/osTicket/osTicket",
    stars: 3200,
    startYear: 2006,
    language: "PHP",
    features: ["ticketing", "help-desk", "customer-feedback"],
    icon: "Ticket",
  },
  
  // GLPI - IT Asset Management & Help Desk
  {
    id: "glpi",
    name: "GLPI",
    description: "IT 자산 관리 및 헬프데스크 솔루션",
    license: "GPL-3.0",
    githubUrl: "https://github.com/glpi-project/glpi",
    stars: 4100,
    startYear: 2003,
    language: "PHP",
    features: ["ticketing", "help-desk", "asset-tracking", "inventory-collection"],
    icon: "Inbox",
  },
  
  // Zammad - Ticket System
  {
    id: "zammad",
    name: "Zammad",
    description: "현대적인 웹 기반 티켓 시스템",
    license: "AGPL-3.0",
    githubUrl: "https://github.com/zammad/zammad",
    stars: 4400,
    startYear: 2012,
    language: "Ruby",
    features: ["ticketing", "help-desk", "customer-feedback"],
    icon: "MessageSquare",
  },
  
  // Camunda - Workflow Engine
  {
    id: "camunda",
    name: "Camunda",
    description: "워크플로우 및 의사결정 자동화 플랫폼",
    license: "Apache-2.0",
    githubUrl: "https://github.com/camunda/camunda-bpm-platform",
    stars: 4100,
    startYear: 2013,
    language: "Java",
    features: ["workflow-engine", "bpm", "automation", "orchestration"],
    icon: "Workflow",
  },
  
  // n8n - Workflow Automation
  {
    id: "n8n",
    name: "n8n",
    description: "노코드 워크플로우 자동화 도구",
    license: "Fair-code",
    githubUrl: "https://github.com/n8n-io/n8n",
    stars: 47000,
    startYear: 2019,
    language: "TypeScript",
    features: ["workflow-engine", "automation", "api-integration", "workflow-automation"],
    icon: "GitBranch",
  },
  
  // Odoo - ERP & CRM
  {
    id: "odoo",
    name: "Odoo",
    description: "통합 비즈니스 관리 소프트웨어",
    license: "LGPL-3.0",
    githubUrl: "https://github.com/odoo/odoo",
    stars: 38000,
    startYear: 2005,
    language: "Python",
    features: ["erp", "contract-management", "project-management", "workflow-engine"],
    icon: "Briefcase",
  },
  
  // ERPNext - ERP Solution
  {
    id: "erpnext",
    name: "ERPNext",
    description: "오픈소스 ERP 솔루션",
    license: "GPL-3.0",
    githubUrl: "https://github.com/frappe/erpnext",
    stars: 20000,
    startYear: 2008,
    language: "Python",
    features: ["erp", "contract-management", "project-management", "sla-management"],
    icon: "FolderKanban",
  },
  
  // Elasticsearch - Search & Analytics Engine
  {
    id: "elasticsearch",
    name: "Elasticsearch",
    description: "분산 검색 및 분석 엔진",
    license: "SSPL",
    githubUrl: "https://github.com/elastic/elasticsearch",
    stars: 70000,
    startYear: 2010,
    language: "Java",
    features: ["search", "data-storage", "data-integration", "analytics", "log-collection"],
    icon: "Search",
  },
  
  // MinIO - Object Storage
  {
    id: "minio",
    name: "MinIO",
    description: "고성능 S3 호환 오브젝트 스토리지",
    license: "AGPL-3.0",
    githubUrl: "https://github.com/minio/minio",
    stars: 47000,
    startYear: 2014,
    language: "Go",
    features: ["object-storage", "data-storage"],
    icon: "HardDrive",
  },
  
  // Kibana - Data Visualization
  {
    id: "kibana",
    name: "Kibana",
    description: "Elasticsearch 데이터 시각화 도구",
    license: "SSPL",
    githubUrl: "https://github.com/elastic/kibana",
    stars: 20000,
    startYear: 2011,
    language: "TypeScript",
    features: ["dashboard", "visualization", "analytics", "search"],
    icon: "BarChart",
  },
  
  // Metabase - Business Intelligence
  {
    id: "metabase",
    name: "Metabase",
    description: "간편한 BI 및 데이터 시각화 도구",
    license: "AGPL-3.0",
    githubUrl: "https://github.com/metabase/metabase",
    stars: 38000,
    startYear: 2015,
    language: "Clojure",
    features: ["dashboard", "visualization", "analytics", "business-intelligence", "reporting"],
    icon: "PieChart",
  },
  
  // Superset - Data Exploration
  {
    id: "superset",
    name: "Apache Superset",
    description: "현대적인 데이터 탐색 및 시각화 플랫폼",
    license: "Apache-2.0",
    githubUrl: "https://github.com/apache/superset",
    stars: 62000,
    startYear: 2015,
    language: "Python",
    features: ["dashboard", "visualization", "analytics", "business-intelligence"],
    icon: "LineChart",
  },
  
  // Logstash - Data Processing Pipeline
  {
    id: "logstash",
    name: "Logstash",
    description: "데이터 수집 및 처리 파이프라인",
    license: "SSPL",
    githubUrl: "https://github.com/elastic/logstash",
    stars: 14000,
    startYear: 2009,
    language: "Ruby",
    features: ["log-collection", "data-pipeline", "etl", "data-integration"],
    icon: "Layers",
  },
  
  // Fluentd - Unified Logging Layer
  {
    id: "fluentd",
    name: "Fluentd",
    description: "통합 로깅 레이어",
    license: "Apache-2.0",
    githubUrl: "https://github.com/fluent/fluentd",
    stars: 13000,
    startYear: 2011,
    language: "Ruby",
    features: ["log-collection", "data-pipeline", "data-integration"],
    icon: "Filter",
  },
  
  // Apache Airflow - Workflow Orchestration
  {
    id: "airflow",
    name: "Apache Airflow",
    description: "워크플로우 스케줄링 및 모니터링 플랫폼",
    license: "Apache-2.0",
    githubUrl: "https://github.com/apache/airflow",
    stars: 37000,
    startYear: 2014,
    language: "Python",
    features: ["scheduling", "data-pipeline", "etl", "workflow-engine", "automation"],
    icon: "Calendar",
  },
  
  // LangChain - LLM Application Framework
  {
    id: "langchain",
    name: "LangChain",
    description: "LLM 애플리케이션 개발 프레임워크",
    license: "MIT",
    githubUrl: "https://github.com/langchain-ai/langchain",
    stars: 93000,
    startYear: 2022,
    language: "Python",
    features: ["llm-integration", "rag", "ai-assistant", "chatbot"],
    icon: "BrainCircuit",
  },
  
  // LlamaIndex - Data Framework for LLM
  {
    id: "llamaindex",
    name: "LlamaIndex",
    description: "LLM용 데이터 프레임워크",
    license: "MIT",
    githubUrl: "https://github.com/run-llama/llama_index",
    stars: 36000,
    startYear: 2022,
    language: "Python",
    features: ["llm-integration", "rag", "knowledge-base", "embedding"],
    icon: "BookOpen",
  },
  
  // Rasa - Conversational AI
  {
    id: "rasa",
    name: "Rasa",
    description: "오픈소스 대화형 AI 플랫폼",
    license: "Apache-2.0",
    githubUrl: "https://github.com/RasaHQ/rasa",
    stars: 18000,
    startYear: 2016,
    language: "Python",
    features: ["chatbot", "ai-assistant", "llm-integration"],
    icon: "MessageCircle",
  },
  
  // Jenkins - CI/CD Automation
  {
    id: "jenkins",
    name: "Jenkins",
    description: "오픈소스 자동화 서버",
    license: "MIT",
    githubUrl: "https://github.com/jenkinsci/jenkins",
    stars: 23000,
    startYear: 2011,
    language: "Java",
    features: ["ci-cd", "automation", "workflow-automation"],
    icon: "GitBranch",
  },
  
  // GitLab - DevOps Platform
  {
    id: "gitlab",
    name: "GitLab",
    description: "DevOps 플랫폼",
    license: "MIT",
    githubUrl: "https://github.com/gitlabhq/gitlabhq",
    stars: 24000,
    startYear: 2011,
    language: "Ruby",
    features: ["ci-cd", "automation", "gitops", "api-integration"],
    icon: "GitMerge",
  },
  
  // Argo CD - GitOps Continuous Delivery
  {
    id: "argocd",
    name: "Argo CD",
    description: "Kubernetes용 GitOps CD 도구",
    license: "Apache-2.0",
    githubUrl: "https://github.com/argoproj/argo-cd",
    stars: 18000,
    startYear: 2018,
    language: "Go",
    features: ["gitops", "ci-cd", "automation"],
    icon: "GitPullRequest",
  },
];
