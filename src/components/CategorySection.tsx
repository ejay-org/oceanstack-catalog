import { Category, OpenSource } from "@/types";
import { OpenSourceCard } from "./OpenSourceCard";

interface CategorySectionProps {
  category: Category;
  projects: OpenSource[];
}

export function CategorySection({ category, projects }: CategorySectionProps) {
  return (
    <section className="mb-12" id={category.id}>
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">{category.name}</h2>
        <p className="text-muted-foreground">{category.description}</p>
        <div className="mt-2 text-sm text-muted-foreground">
          {projects.length}개의 오픈소스
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <OpenSourceCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
