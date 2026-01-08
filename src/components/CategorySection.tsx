import { Category, OpenSource } from "@/types";
import { OpenSourceCard } from "./OpenSourceCard";

interface CategorySectionProps {
  category: Category;
  projects: OpenSource[];
}

export function CategorySection({ category, projects }: CategorySectionProps) {
  return (
    <section className="mb-10" id={category.id}>
      <div className="mb-5">
        <h2 className="text-2xl font-bold mb-1.5">{category.name}</h2>
        <p className="text-sm text-muted-foreground">{category.description}</p>
        <div className="mt-1.5 text-xs text-muted-foreground">
          {projects.length}개의 오픈소스
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <OpenSourceCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
