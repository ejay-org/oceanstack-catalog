import { Module, OpenSource } from "@/types";

/**
 * 오픈소스가 모듈의 요구사항을 충족하는지 확인
 * 모듈의 requiredFeatures 중 일부라도 오픈소스의 features에 있으면 매칭으로 간주
 */
export function isModuleSupported(openSource: OpenSource, module: Module): boolean {
  return module.requiredFeatures.some(feature =>
    openSource.features.includes(feature)
  );
}

/**
 * 특정 모듈을 지원하는 오픈소스 목록 반환
 */
export function getOpenSourceForModule(
  openSources: OpenSource[],
  module: Module
): OpenSource[] {
  return openSources.filter(os => isModuleSupported(os, module));
}

/**
 * 특정 오픈소스가 지원하는 모듈 목록 반환
 */
export function getModulesForOpenSource(
  modules: Module[],
  openSource: OpenSource
): Module[] {
  return modules.filter(module => isModuleSupported(openSource, module));
}

/**
 * 카테고리별 모듈-오픈소스 매핑 매트릭스 생성
 */
export function generateMappingMatrix(
  modules: Module[],
  openSources: OpenSource[]
): Map<string, Map<string, boolean>> {
  const matrix = new Map<string, Map<string, boolean>>();

  modules.forEach(module => {
    const moduleMap = new Map<string, boolean>();
    openSources.forEach(os => {
      moduleMap.set(os.id, isModuleSupported(os, module));
    });
    matrix.set(module.id, moduleMap);
  });

  return matrix;
}

/**
 * 매칭되는 feature 개수 반환
 */
export function getMatchingFeatureCount(openSource: OpenSource, module: Module): number {
  return module.requiredFeatures.filter(feature =>
    openSource.features.includes(feature)
  ).length;
}

/**
 * 매칭 점수 계산 (0-100)
 * requiredFeatures 중 몇 %가 충족되는지
 */
export function getMatchScore(openSource: OpenSource, module: Module): number {
  if (module.requiredFeatures.length === 0) return 0;

  const matchCount = getMatchingFeatureCount(openSource, module);
  return Math.round((matchCount / module.requiredFeatures.length) * 100);
}
