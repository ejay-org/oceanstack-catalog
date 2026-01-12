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
    icon: "https://raw.githubusercontent.com/netbox-community/netbox/develop/docs/netbox_logo.svg",
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
    icon: "https://snipeitapp.com/img/logos/snipe-it-bug-black.svg",
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
    icon: "https://raw.githubusercontent.com/allegro/ralph/ng/docs/img/ralph_logo.png",
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
    icon: "https://www.greenbone.net/typo3conf/ext/customertemplate/Resources/Public/Images/Greenbone_Logo.svg",
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
    icon: "https://raw.githubusercontent.com/aquasecurity/trivy/main/docs/imgs/logo.png",
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
    icon: "https://cdn.simpleicons.org/vault",
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
    icon: "https://www.keycloak.org/resources/images/icon.svg",
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
    icon: "https://raw.githubusercontent.com/opencost/opencost/develop/docs/opencost-logo.png",
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
    icon: "https://raw.githubusercontent.com/infracost/infracost/master/assets/logo.svg",
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
    icon: "https://raw.githubusercontent.com/cloud-custodian/cloud-custodian/main/docs/logos/cloud-custodian.png",
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
    icon: "https://cdn.simpleicons.org/prometheus",
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
    icon: "https://cdn.simpleicons.org/grafana",
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
    icon: "https://cdn.simpleicons.org/zabbix",
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
    icon: "https://www.jaegertracing.io/img/jaeger-icon-color.svg",
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
    icon: "https://opentelemetry.io/img/logos/opentelemetry-horizontal-color.svg",
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
    icon: "https://cdn.simpleicons.org/prometheus",
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
    icon: "https://cdn.simpleicons.org/elasticsearch",
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
    icon: "https://alerta.io/en/latest/_static/images/alerta-logo.png",
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
    icon: "https://www.rundeck.com/hubfs/Assets/Images/rundeck-icon-black-2022.svg",
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
    icon: "https://raw.githubusercontent.com/StackStorm/st2/master/st2client/st2client/logo.png",
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
    icon: "https://cdn.simpleicons.org/ansible",
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
    icon: "https://cdn.simpleicons.org/kubernetes",
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
    icon: "https://osticket.com/sites/default/files/osTicket.png",
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
    icon: "https://glpi-project.org/wp-content/uploads/2022/02/GLPI_LOGO_BLEU.svg",
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
    icon: "https://zammad.com/media/pages/product/features/integrations/a9ec4b4e07-1706881714/zammad-logo-header.svg",
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
    icon: "https://camunda.com/wp-content/uploads/2020/05/logo-camunda-black.svg",
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
    icon: "https://n8n.io/favicon.svg",
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
    icon: "https://cdn.simpleicons.org/odoo",
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
    icon: "https://erpnext.com/files/erpnext-logo.svg",
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
    icon: "https://cdn.simpleicons.org/elasticsearch",
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
    icon: "https://min.io/resources/img/logo.svg",
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
    icon: "https://cdn.simpleicons.org/kibana",
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
    icon: "https://www.metabase.com/images/logo.svg",
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
    icon: "https://superset.apache.org/img/superset-logo-horiz-apache.svg",
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
    icon: "https://cdn.simpleicons.org/logstash",
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
    icon: "https://www.fluentd.org/assets/img/miscellany/fluentd-logo.png",
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
    icon: "https://airflow.apache.org/images/feature-image.png",
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
    icon: "https://python.langchain.com/img/brand/wordmark.png",
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
    icon: "https://www.llamaindex.ai/favicon.ico",
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
    icon: "https://rasa.com/static/rasa-logo-2dfe4ed20a.svg",
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
    icon: "https://cdn.simpleicons.org/jenkins",
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
    icon: "https://cdn.simpleicons.org/gitlab",
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
    icon: "https://argo-cd.readthedocs.io/en/stable/assets/logo.png",
  },
];
