import Link from "next/link";
import { openSourceProjects } from "@/data/opensource";
import { OpenSourceCard } from "@/components/OpenSourceCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* 헤더 */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-4xl font-bold">MSP 오픈소스 카탈로그</h1>
        </div>
      </header>

      {/* 네비게이션 */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-[89px] z-10">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-foreground border-b-2 border-primary pb-1"
            >
              인벤토리 ({openSourceProjects.length})
            </Link>
            <Link
              href="/mapping"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              모듈 매핑
            </Link>
          </div>
        </div>
      </nav>

      {/* 메인 콘텐츠 - 인벤토리 */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">전체 오픈소스 인벤토리</h2>
          <p className="text-sm text-muted-foreground">
            MSP 통합운영플랫폼 구축에 활용 가능한 오픈소스 목록
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {openSourceProjects.map((project) => (
            <OpenSourceCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      {/* 푸터 */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-center text-sm text-muted-foreground">
            MSP 통합운영플랫폼 구축을 위한 오픈소스 조사 프로젝트
          </p>
        </div>
      </footer>
    </div>
  );
}
