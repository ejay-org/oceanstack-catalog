"use client";

import { useState } from "react";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ProjectIconImageProps {
  iconUrl: string | null;
  iconName?: string;
  projectName: string;
  size?: "sm" | "md";
}

export function ProjectIconImage({
  iconUrl,
  iconName,
  projectName,
  size = "md"
}: ProjectIconImageProps) {
  const [imageError, setImageError] = useState(false);

  // 동적으로 아이콘 가져오기
  const getIcon = (name?: string): LucideIcon => {
    if (!name) return LucideIcons.Box;
    const Icon = (LucideIcons as any)[name];
    return Icon || LucideIcons.Box;
  };

  const ProjectIcon = getIcon(iconName);
  const iconSize = size === "sm" ? "w-5 h-5" : "w-6 h-6";
  const lucideSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  if (iconUrl && !imageError) {
    return (
      <img
        src={iconUrl}
        alt={projectName}
        className={`${iconSize} object-contain`}
        onError={() => setImageError(true)}
      />
    );
  }

  return <ProjectIcon className={`${lucideSize} text-primary`} />;
}
