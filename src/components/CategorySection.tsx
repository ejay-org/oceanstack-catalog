import { Category, OpenSource } from "@/types";
import { OpenSourceCard } from "./OpenSourceCard";
import { modules } from "@/data/modules";

interface CategorySectionProps {
  category: Category;
  projects: OpenSource[];
}

export function CategorySection({ category, projects }: CategorySectionProps) {
  // 현재 카테고리의 모듈들 가져오기
  const categoryModules = modules.filter(m => m.category === category.id);

  return (
    <section className="mb-10" id={category.id}>
      <div className="mb-5">
        <h2 className="text-2xl font-bold mb-1.5">{category.name}</h2>
        <p className="text-sm text-muted-foreground">{category.description}</p>
        <div className="mt-1.5 text-xs text-muted-foreground">
          {projects.length}개의 오픈소스
        </div>
      </div>

      {/* 모듈별로 그룹화해서 표시 */}
      {categoryModules.map((module) => {
        const moduleProjects = projects.filter(p => p.module === module.id);
        if (moduleProjects.length === 0) return null;

        return (
          <div key={module.id} className="mb-6">
            <div className="mb-3">
              <h3 className="text-lg font-semibold mb-1">{module.name}</h3>
              <p className="text-xs text-muted-foreground">{module.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {moduleProjects.map((project) => (
                <OpenSourceCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
