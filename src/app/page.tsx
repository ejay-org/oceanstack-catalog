import { categories } from "@/data/categories";
import { openSourceProjects } from "@/data/opensource";
import { CategorySection } from "@/components/CategorySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* 헤더 */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-4xl font-bold mb-2">MSP 오픈소스 카탈로그</h1>
          <p className="text-lg text-muted-foreground">
            MSP 통합운영플랫폼을 위한 오픈소스 조사 및 정리
          </p>
        </div>
      </header>

      {/* 네비게이션 */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-[120px] z-10">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const count = openSourceProjects.filter(
                (project) => project.category === category.id
              ).length;
              return (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {category.name} ({count})
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 메인 콘텐츠 */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {categories.map((category) => {
          const categoryProjects = openSourceProjects.filter(
            (project) => project.category === category.id
          );
          return (
            <CategorySection
              key={category.id}
              category={category}
              projects={categoryProjects}
            />
          );
        })}
      </main>

      {/* 푸터 */}
      <footer className="border-t mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-center text-sm text-muted-foreground">
            MSP 통합운영플랫폼 구축을 위한 오픈소스 조사 프로젝트
          </p>
        </div>
      </footer>
    </div>
  );
}
