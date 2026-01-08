# MSP 오픈소스 카탈로그

MSP(Managed Service Provider) 통합운영플랫폼 구축을 위한 오픈소스 조사 및 정리 웹사이트

## 프로젝트 개요

이 프로젝트는 MSP 통합운영플랫폼을 만들기 위해 필요한 오픈소스들을 영역별로 분류하여 카탈로그 형태로 보여주는 웹사이트입니다.

## 주요 기능

- **영역별 분류**: 모니터링, 로그 관리, 인프라 관리 등 10개 영역으로 오픈소스 분류
- **상세 정보 표시**: 각 오픈소스의 이름, 라이선스, GitHub Stars, 시작 년도, 개발 언어, 기반 기술 정보 제공
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 화면 크기 지원
- **빠른 네비게이션**: 상단 네비게이션을 통한 영역별 빠른 이동

## 기술 스택

- **프레임워크**: Next.js 15 (React 19)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **UI 컴포넌트**: shadcn/ui
- **아이콘**: Lucide React

## 카테고리

1. **모니터링** - Prometheus, Grafana, Zabbix, Nagios
2. **로그 관리** - Elasticsearch, Logstash, Fluentd, Graylog
3. **인프라 관리** - Terraform, Ansible, OpenTofu
4. **자동화** - Rundeck, StackStorm
5. **보안** - Wazuh, OSSEC, Suricata
6. **백업 및 복구** - Restic, Bacula, Duplicati
7. **네트워크 관리** - NetBox, OpenNMS
8. **데이터베이스 관리** - pgAdmin, phpMyAdmin, DBeaver
9. **컨테이너 오케스트레이션** - Kubernetes, Docker, Rancher, Portainer
10. **CI/CD** - Jenkins, GitLab, Argo CD, Tekton

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
  category: "카테고리ID"
}
```

## 라이선스

MIT License
