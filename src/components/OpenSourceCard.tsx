import { OpenSource } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface OpenSourceCardProps {
  project: OpenSource;
}

export function OpenSourceCard({ project }: OpenSourceCardProps) {
  // 동적으로 아이콘 가져오기
  const getIcon = (iconName?: string): LucideIcon => {
    if (!iconName) return LucideIcons.Box;
    const Icon = (LucideIcons as any)[iconName];
    return Icon || LucideIcons.Box;
  };

  const ProjectIcon = getIcon(project.icon);

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-2">
          {/* 솔루션 아이콘 */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <ProjectIcon className="h-5 w-5 text-primary" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg mb-1 flex items-center gap-2">
              <span className="truncate">{project.name}</span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
              >
                <LucideIcons.ExternalLink className="h-3.5 w-3.5" />
              </a>
            </CardTitle>
            <CardDescription className="line-clamp-2 text-xs">
              {project.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2.5 pt-0">
        {/* 통계 정보 */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <LucideIcons.Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">
              {project.stars.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <LucideIcons.Calendar className="h-3.5 w-3.5" />
            <span>{project.startYear}</span>
          </div>
          <div className="flex items-center gap-1">
            <LucideIcons.Code className="h-3.5 w-3.5" />
            <span>{project.language}</span>
          </div>
        </div>

        {/* 라이선스 */}
        <div>
          <Badge variant="outline" className="text-xs">
            {project.license}
          </Badge>
        </div>

        {/* 기술 태그 */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
