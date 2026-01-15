# Claude Instructions for OceanStack Catalog

## 역할

MSP 오픈소스 카탈로그 웹사이트의 개발, 유지보수, 개선 작업을 수행합니다.

## 허용되는 행동

- 버그 수정 및 기능 개선
- 새로운 오픈소스 항목 추가 또는 기존 항목 수정
- UI/UX 개선 및 스타일 수정
- 성능 최적화
- 문서 업데이트
- 테스트 코드 작성
- 의존성 업데이트 (보안 패치 포함)
- 코드 리뷰 및 제안

## 금지되는 행동

- 사용자 동의 없이 프로젝트의 핵심 아키텍처 변경
- 기존 디렉터리 구조를 벗어나는 임의의 디렉터리 생성
- 사용자 동의 없이 주요 의존성 제거 또는 교체
- 보안에 취약한 코드 작성 (XSS, 코드 인젝션 등)
- 불필요한 과도한 엔지니어링
- 명시적 요청 없이 대규모 리팩토링 수행

## 코드 작성 및 수정 규칙

### 디렉터리 구조 준수

반드시 기존 디렉터리 구조를 따릅니다:

```
src/
├── app/              # Next.js 앱 라우터 (페이지, 레이아웃, 전역 스타일)
│   └── mapping/     # 매핑 뷰 페이지 (기능별 시각화)
├── components/       # React 컴포넌트
│   └── ui/          # shadcn/ui 컴포넌트
├── data/            # 데이터 파일 (opensource.ts, features.ts)
├── types/           # TypeScript 타입 정의
└── lib/             # 유틸리티 함수
```

**새 파일 생성 시:**
- 컴포넌트는 `src/components/` 에 배치
- shadcn/ui 컴포넌트는 `src/components/ui/` 에 배치
- 데이터 파일은 `src/data/` 에 배치
- 타입 정의는 `src/types/` 에 배치
- 유틸리티 함수는 `src/lib/` 에 배치
- 정적 파일은 `public/` 에 배치

**구조 변경이 필요한 경우:**
- 변경 전 반드시 사유를 명확히 제시
- 사용자 승인 후 진행

### 코딩 스타일

- **언어**: TypeScript 사용
- **프레임워크**: Next.js 15 App Router 규칙 준수
- **스타일링**: Tailwind CSS 클래스 사용
- **컴포넌트**: 함수형 컴포넌트 사용
- **타입**: 명시적 타입 정의 (any 지양)
- **네이밍**:
  - 컴포넌트: PascalCase
  - 함수/변수: camelCase
  - 상수: UPPER_SNAKE_CASE
  - 파일명: 컴포넌트는 PascalCase.tsx, 유틸리티는 kebab-case.ts

### 코드 품질

- 간결하고 명확한 코드 작성
- 불필요한 추상화 지양
- 재사용 가능한 컴포넌트 설계
- 적절한 에러 처리
- 접근성(a11y) 고려
- 반응형 디자인 준수

### 데이터 추가/수정

`src/data/opensource.ts` 파일에서 오픈소스 항목을 관리합니다.

#### 데이터 구조

이 프로젝트는 **기능 기반 매핑 시스템**을 사용합니다. 각 프로젝트는 카테고리 대신 여러 `features` 태그로 분류됩니다.

```typescript
{
  id: "unique-id",           // 고유 ID (kebab-case)
  name: "프로젝트 이름",
  description: "간결한 설명",
  license: "라이선스 타입",
  githubUrl: "GitHub URL",
  stars: 12345,              // GitHub Stars 수
  startYear: 2020,           // 시작 연도
  language: "주 개발 언어",
  features: [                // 기능 태그 배열 (필수)
    "ipam",
    "asset-tracking",
    "automation"
  ],
  icon: "Database"           // Lucide 아이콘 이름 또는 이미지 URL
}
```

#### 기능 기반 시스템 (Feature-based System)

프로젝트는 단일 카테고리가 아닌 **여러 기능 태그**로 분류됩니다. 이를 통해:
- 하나의 프로젝트가 여러 영역에 걸쳐 있을 수 있음 (예: GLPI는 ticketing, help-desk, asset-tracking 모두 지원)
- 매핑 뷰(`src/app/mapping/`)에서 기능별로 프로젝트를 시각화
- 사용자가 특정 기능을 가진 프로젝트를 쉽게 필터링

**주요 기능 태그 예시:**
- ITAM: `ipam`, `dcim`, `asset-tracking`, `inventory-collection`
- Security: `vulnerability-scanning`, `secrets-management`, `authentication`, `authorization`
- FinOps: `cost-tracking`, `cost-analysis`, `budget-management`
- Monitoring: `metrics-collection`, `log-collection`, `trace-collection`, `alerting`
- Automation: `automation`, `orchestration`, `workflow-engine`, `ci-cd`

#### 아이콘 설정

`icon` 필드는 두 가지 방식을 지원합니다:

1. **이미지 URL** (권장): GitHub avatar나 공식 로고 URL
   ```typescript
   icon: "https://avatars.githubusercontent.com/u/19204781?s=200&v=4"
   ```

2. **Lucide 아이콘 이름**: URL이 없을 경우 대체 사용
   ```typescript
   icon: "Database"
   ```

대부분의 프로젝트는 이미지 URL을 사용하며, 이것이 선호됩니다.

## PR(Pull Request) 생성 규칙

### 브랜치 네이밍

Conventional Commits 규칙을 따릅니다 (영문 사용):

- `feat/feature-name` - 새로운 기능 추가
- `fix/bug-name` - 버그 수정
- `refactor/target` - 코드 리팩토링
- `docs/document-name` - 문서 수정
- `style/target` - 코드 포맷팅, 세미콜론 누락 등
- `test/test-name` - 테스트 코드 추가/수정
- `chore/task-name` - 빌드 설정, 패키지 업데이트 등

**예시:**
- `feat/add-filtering` (O) / `feat/기능명` (X)
- `fix/broken-logos` (O) / `fix/버그명` (X)

### PR 제목

변경 의도가 명확히 드러나야 합니다:

**좋은 예:**
- `feat: Add filtering functionality to inventory page`
- `fix: Resolve broken logo URLs for GitHub icons`
- `refactor: Improve CategorySection component performance`
- `docs: Update README with deployment instructions`

**나쁜 예:**
- `Update files`
- `Fix bug`
- `Changes`

### PR 설명

다음 내용을 포함합니다:

```markdown
## 변경 사항
- 주요 변경 사항 요약 (bullet points)

## 변경 이유
- 왜 이 변경이 필요한지 설명

## 테스트 방법
- 변경 사항을 확인하는 방법

## 스크린샷 (UI 변경 시)
- Before/After 이미지
```

### PR 범위

- **단일 목적**: 하나의 PR은 하나의 목적만 수행
- **적절한 크기**: 500줄 이하 권장
- **분리 원칙**: 대규모 변경은 여러 PR로 분리
  - 예: 리팩토링 + 기능 추가 → 2개의 PR로 분리

### 커밋 메시지

```
type: 간결한 제목 (50자 이하)

상세 설명 (필요시)
- 변경 사항
- 이유
```

**타입:**
- feat, fix, refactor, docs, style, test, chore

## 변경 전 체크리스트

변경 작업 전 다음을 확인합니다:

- [ ] 변경 범위가 명확한가?
- [ ] 기존 디렉터리 구조를 따르는가?
- [ ] 타입 에러가 없는가?
- [ ] 빌드가 성공하는가?
- [ ] 기존 기능이 정상 작동하는가?
- [ ] 반응형 디자인이 유지되는가?
- [ ] 접근성이 고려되었는가?
- [ ] (데이터 변경 시) 기능 기반 데이터 구조(`features` 배열)를 따르는가?
- [ ] (아이콘 추가 시) 아이콘 URL이 접근 가능하거나 유효한 Lucide 아이콘 이름인가?
- [ ] (프로젝트 추가 시) GitHub URL이 유효하고 접근 가능한가?
- [ ] GitHub Pages 배포 설정이 올바른가? (`next.config.js`의 `basePath`, `assetPrefix` 등)

## 참고사항

- 프로젝트는 GitHub Pages에 자동 배포됩니다 (main 브랜치)
- Next.js 정적 내보내기(static export) 사용
- Node.js 20.x 이상 필요
- 개발 서버: `npm run dev`
- 빌드: `npm run build`
