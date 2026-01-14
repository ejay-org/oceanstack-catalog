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
├── components/       # React 컴포넌트
│   └── ui/          # shadcn/ui 컴포넌트
├── data/            # 데이터 파일 (categories.ts, opensource.ts)
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

`src/data/opensource.ts` 파일에서 오픈소스 항목을 관리합니다:

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
  technologies: ["기술1"],    // 기반 기술
  category: "itam",          // 카테고리 ID
  icon: "Database"           // Lucide 아이콘 또는 이미지 URL
}
```

## PR(Pull Request) 생성 규칙

### 브랜치 네이밍

Conventional Commits 규칙을 따릅니다:

- `feat/기능명` - 새로운 기능 추가
- `fix/버그명` - 버그 수정
- `refactor/대상` - 코드 리팩토링
- `docs/문서명` - 문서 수정
- `style/대상` - 코드 포맷팅, 세미콜론 누락 등
- `test/테스트명` - 테스트 코드 추가/수정
- `chore/작업명` - 빌드 설정, 패키지 업데이트 등

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

## 참고사항

- 프로젝트는 GitHub Pages에 자동 배포됩니다 (main 브랜치)
- Next.js 정적 내보내기(static export) 사용
- Node.js 20.x 이상 필요
- 개발 서버: `npm run dev`
- 빌드: `npm run build`
