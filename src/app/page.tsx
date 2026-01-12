"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { openSourceProjects } from "@/data/opensource";
import { OpenSourceCard } from "@/components/OpenSourceCard";
import { MultiSelect } from "@/components/MultiSelect";

export default function Home() {
  // 필터 상태
  const [selectedLicenses, setSelectedLicenses] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // 모든 라이선스 옵션 추출
  const allLicenses = useMemo(() => {
    const licenses = new Set(openSourceProjects.map((p) => p.license));
    return Array.from(licenses).sort();
  }, []);

  // 모든 features 옵션 추출
  const allFeatures = useMemo(() => {
    const features = new Set(openSourceProjects.flatMap((p) => p.features));
    return Array.from(features).sort();
  }, []);

  // 필터링된 프로젝트 목록
  const filteredProjects = useMemo(() => {
    return openSourceProjects.filter((project) => {
      // 라이선스 필터
      if (selectedLicenses.length > 0 && !selectedLicenses.includes(project.license)) {
        return false;
      }

      // features 필터 (선택된 feature 중 하나라도 포함하면 통과)
      if (selectedFeatures.length > 0) {
        const hasFeature = selectedFeatures.some((feature) =>
          project.features.includes(feature)
        );
        if (!hasFeature) return false;
      }

      // 이름 검색
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        if (!project.name.toLowerCase().includes(query)) {
          return false;
        }
      }

      return true;
    });
  }, [selectedLicenses, selectedFeatures, searchQuery]);

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
              인벤토리 ({filteredProjects.length})
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
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* 필터 영역 */}
        <div className="mb-6 p-4 bg-accent/30 rounded-lg border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 라이선스 필터 */}
            <MultiSelect
              label="라이선스"
              options={allLicenses}
              selectedValues={selectedLicenses}
              onChange={setSelectedLicenses}
              placeholder="라이선스 선택"
            />

            {/* Features 필터 */}
            <MultiSelect
              label="Features"
              options={allFeatures}
              selectedValues={selectedFeatures}
              onChange={setSelectedFeatures}
              placeholder="기능 선택"
            />

            {/* 검색 박스 */}
            <div>
              <label className="block text-sm font-medium mb-1.5">검색</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="오픈소스 이름으로 검색"
                  className="w-full pl-9 pr-3 py-2 text-sm border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* 필터 요약 */}
          <div className="mt-3 text-sm text-muted-foreground">
            총 {filteredProjects.length}개의 오픈소스
            {openSourceProjects.length !== filteredProjects.length && (
              <span> (전체 {openSourceProjects.length}개 중)</span>
            )}
          </div>
        </div>

        {/* 프로젝트 카드 그리드 */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <OpenSourceCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-lg mb-2">검색 결과가 없습니다</p>
            <p className="text-sm">다른 필터 조건을 시도해보세요</p>
          </div>
        )}
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
