import Link from "next/link";
import { categories } from "@/data/categories";
import { modules } from "@/data/modules";
import { openSourceProjects } from "@/data/opensource";
import { getOpenSourceForModule, getMatchScore } from "@/lib/mapping";
import { BatteryIcon } from "@/components/BatteryIcon";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

export default function MappingPage() {
  // 아이콘이 URL인지 확인
  const isIconUrl = (icon?: string): boolean => {
    if (!icon) return false;
    return icon.startsWith('http://') || icon.startsWith('https://') || icon.startsWith('/');
  };

  // 동적으로 아이콘 가져오기
  const getIcon = (iconName?: string): LucideIcon => {
    if (!iconName || isIconUrl(iconName)) return LucideIcons.Box;
    const Icon = (LucideIcons as any)[iconName];
    return Icon || LucideIcons.Box;
  };

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
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              인벤토리 ({openSourceProjects.length})
            </Link>
            <Link
              href="/mapping"
              className="text-sm font-medium text-foreground border-b-2 border-primary pb-1"
            >
              모듈 매핑
            </Link>
          </div>
        </div>
      </nav>

      {/* 메인 콘텐츠 - 매핑 테이블 */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">카테고리/모듈별 오픈소스 매핑</h2>
          <p className="text-sm text-muted-foreground">
            각 모듈의 요구사항을 충족하는 오픈소스 목록 (feature 기반 매칭)
          </p>
        </div>

        {/* 카테고리별 섹션 */}
        <div className="space-y-10">
          {categories.map((category) => {
            const categoryModules = modules.filter(m => m.category === category.id);

            return (
              <section key={category.id} id={category.id}>
                {/* 카테고리 색상 바 */}
                <div className={`mb-6 -mx-6 px-6 py-3 bg-gradient-to-r ${category.color?.gradient || 'from-primary/20 to-primary/5'} border-l-4 ${category.color?.border || 'border-primary'}`}>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className={`text-xl font-bold ${category.color?.text || 'text-foreground'}`}>
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* 모듈별 테이블 */}
                <div className="space-y-6">
                  {categoryModules.map((module) => {
                    const supportingProjects = getOpenSourceForModule(openSourceProjects, module);

                    return (
                      <div key={module.id} className="border rounded-lg p-4">
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-base font-semibold">{module.name}</h4>
                            <span className="text-xs text-muted-foreground">
                              {supportingProjects.length}개 오픈소스
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">{module.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {module.requiredFeatures.map((feature) => (
                              <span
                                key={feature}
                                className="text-xs px-1.5 py-0.5 rounded bg-primary/10 text-primary"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* 오픈소스 목록 */}
                        {supportingProjects.length > 0 ? (
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                            {supportingProjects.map((project) => {
                              const ProjectIcon = getIcon(project.icon);
                              const iconUrl = isIconUrl(project.icon) ? project.icon : null;
                              const matchScore = getMatchScore(project, module);

                              return (
                                <a
                                  key={project.id}
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 p-2 border rounded-lg bg-accent/30 hover:bg-accent transition-colors group"
                                >
                                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                                    {iconUrl ? (
                                      <img
                                        src={iconUrl}
                                        alt={project.name}
                                        className="w-5 h-5 object-contain"
                                      />
                                    ) : (
                                      <ProjectIcon className="h-4 w-4 text-primary" />
                                    )}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium truncate group-hover:text-primary">
                                      {project.name}
                                    </div>
                                  </div>
                                  <BatteryIcon percentage={matchScore} />
                                </a>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="text-sm text-muted-foreground text-center py-4">
                            해당 모듈을 지원하는 오픈소스가 없습니다.
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
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
