# MSP 오픈소스 카탈로그

MSP(Managed Service Provider) 통합운영플랫폼 구축을 위한 오픈소스 조사 및 정리 웹사이트

## 프로젝트 개요

이 프로젝트는 MSP 통합운영플랫폼을 만들기 위해 필요한 오픈소스들을 영역별로 분류하여 카탈로그 형태로 보여주는 웹사이트입니다.

## 주요 기능

- **IT 관리 영역별 분류**: ITAM, ITOM, ITSM, Analysis, AI/Automation 5개 핵심 영역으로 구분
- **솔루션 아이콘**: 각 오픈소스별 시각적 아이콘 표시
- **상세 정보 표시**: 이름, 라이선스, GitHub Stars, 시작 년도, 개발 언어, 기반 기술 정보 제공
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 화면 크기 지원
- **빠른 네비게이션**: 상단 네비게이션을 통한 영역별 빠른 이동
- **50개 이상의 엄선된 오픈소스**: MSP 운영에 필요한 핵심 도구들

## 기술 스택

- **프레임워크**: Next.js 15 (React 19)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **UI 컴포넌트**: shadcn/ui
- **아이콘**: Lucide React

## 카테고리

### 1. ITAM (IT Asset Management)
IT 자산 관리 - 하드웨어, 소프트웨어, 네트워크 자산 추적 및 관리
- **NetBox** - IP 주소 및 데이터센터 인프라 관리 (IPAM & DCIM)
- **Snipe-IT** - IT 자산 관리 시스템
- **Ralph** - 데이터센터 및 백오피스 자산 관리
- **pgAdmin, phpMyAdmin, DBeaver** - 데이터베이스 관리 도구

### 2. ITOM (IT Operations Management)
IT 운영 관리 - 인프라 모니터링, 성능 관리, 용량 계획
- **모니터링**: Prometheus, Grafana, Zabbix, Nagios
- **인프라**: Terraform, OpenTofu, Kubernetes, Docker, Rancher, Portainer
- **네트워크**: OpenNMS
- **보안**: Wazuh, OSSEC, Suricata
- **백업**: Restic, Bacula, Duplicati

### 3. ITSM (IT Service Management)
IT 서비스 관리 - 인시던트, 문제, 변경, 서비스 요청 관리
- **Rundeck** - 운영 자동화 및 런북 관리
- **StackStorm** - 이벤트 기반 자동화 플랫폼
- **osTicket** - 헬프데스크 티켓 시스템
- **GLPI** - IT 자산 관리 및 헬프데스크
- **iTop** - ITIL 기반 서비스 관리

### 4. Analysis
데이터 분석 및 시각화 - 로그 분석, 메트릭 시각화, 보고서 생성
- **Elasticsearch, Logstash, Kibana** - ELK Stack
- **Fluentd** - 로그 수집 및 처리
- **Graylog** - 로그 관리 및 분석
- **Metabase, Apache Superset** - 비즈니스 인텔리전스

### 5. AI/Automation
지능형 자동화 - CI/CD, 워크플로우 자동화, AIOps
- **Ansible** - IT 자동화 및 구성 관리
- **Jenkins, GitLab** - CI/CD 플랫폼
- **Argo CD, Tekton** - Kubernetes용 GitOps/CI/CD
- **Apache Airflow, n8n** - 워크플로우 자동화

## 시작하기

### 필수 요구사항

- Node.js 20.x 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

개발 서버가 실행되면 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 프로젝트 구조

```
stackcatalog/
├── src/
│   ├── app/              # Next.js 앱 라우터
│   │   ├── layout.tsx    # 루트 레이아웃
│   │   ├── page.tsx      # 메인 페이지
│   │   └── globals.css   # 전역 스타일
│   ├── components/       # React 컴포넌트
│   │   ├── ui/          # shadcn/ui 컴포넌트
│   │   ├── CategorySection.tsx
│   │   └── OpenSourceCard.tsx
│   ├── data/            # 데이터 파일
│   │   ├── categories.ts
│   │   └── opensource.ts
│   ├── types/           # TypeScript 타입 정의
│   │   └── index.ts
│   └── lib/             # 유틸리티 함수
│       └── utils.ts
├── public/              # 정적 파일
└── package.json
```

## 데이터 추가하기

새로운 오픈소스를 추가하려면 `src/data/opensource.ts` 파일을 수정하세요:

```typescript
{
  id: "unique-id",
  name: "프로젝트 이름",
  description: "프로젝트 설명",
  license: "라이선스",
  githubUrl: "https://github.com/...",
  stars: 12345,
  startYear: 2020,
  language: "개발 언어",
  technologies: ["기술1", "기술2"],
  category: "itam", // itam, itom, itsm, analysis, ai-automation
  icon: "Database" // Lucide React 아이콘 이름
}
```

### 카테고리 ID
- `itam` - IT 자산 관리
- `itom` - IT 운영 관리
- `itsm` - IT 서비스 관리
- `analysis` - 데이터 분석
- `ai-automation` - AI/자동화

### 아이콘 선택
[Lucide React](https://lucide.dev) 아이콘을 사용합니다. 예시:
- `Database` - 데이터베이스 관련
- `Activity`, `LineChart` - 모니터링
- `Container` - 컨테이너
- `Shield` - 보안
- `GitBranch`, `GitMerge` - CI/CD
- `Workflow` - 워크플로우
- `Search` - 검색/분석

## 라이선스

MIT License
