"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Check, X } from "lucide-react";

interface BatteryIconProps {
  percentage: number; // 0-100
  className?: string;
  requiredFeatures?: string[];
  supportedFeatures?: string[];
}

export function BatteryIcon({
  percentage,
  className = "",
  requiredFeatures = [],
  supportedFeatures = []
}: BatteryIconProps) {
  // 퍼센트에 따른 그라데이션 색상 결정 (파스텔톤)
  const getGradient = (pct: number) => {
    if (pct >= 75) return "from-green-300 to-emerald-400"; // 파스텔 그린
    if (pct >= 50) return "from-blue-300 to-cyan-400"; // 파스텔 블루
    if (pct >= 25) return "from-amber-300 to-yellow-400"; // 파스텔 옐로우
    return "from-rose-300 to-red-400"; // 파스텔 레드
  };

  // 퍼센트에 따른 텍스트 색상
  const getTextColor = (pct: number) => {
    if (pct >= 75) return "text-emerald-600";
    if (pct >= 50) return "text-cyan-600";
    if (pct >= 25) return "text-amber-600";
    return "text-rose-600";
  };

  const gradient = getGradient(percentage);
  const textColor = getTextColor(percentage);
  const fillPercentage = Math.max(0, Math.min(100, percentage));

  const batteryContent = (
    <div className={`flex flex-col items-center gap-0.5 ${className}`}>
      {/* 배터리 아이콘 */}
      <div className="relative w-4 h-7 flex items-center justify-center">
        {/* 배터리 본체 - 회색 테두리 */}
        <div className="relative w-3.5 h-6 border border-gray-400 rounded-sm flex items-end overflow-hidden bg-gray-100">
          {/* 배터리 채우기 - 그라데이션 마스킹 */}
          <div
            className={`w-full bg-gradient-to-t ${gradient} transition-all duration-300`}
            style={{ height: `${fillPercentage}%` }}
          />
        </div>
        {/* 배터리 상단 돌기 - 회색 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-0.5 bg-gray-400 rounded-t-sm" />
      </div>
      {/* 퍼센트 수치 */}
      <span className={`text-[9px] font-medium ${textColor}`}>
        {percentage}%
      </span>
    </div>
  );

  // requiredFeatures가 없으면 tooltip 없이 반환
  if (requiredFeatures.length === 0) {
    return batteryContent;
  }

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          {batteryContent}
        </TooltipTrigger>
        <TooltipContent side="left" className="max-w-xs">
          <div className="text-xs">
            <div className="font-semibold mb-2">Feature Match</div>
            <div className="space-y-1">
              {requiredFeatures.map((feature) => {
                const isSupported = supportedFeatures.includes(feature);
                return (
                  <div key={feature} className="flex items-center gap-2">
                    {isSupported ? (
                      <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                    ) : (
                      <X className="h-3 w-3 text-red-500 flex-shrink-0" />
                    )}
                    <span className={isSupported ? "text-foreground" : "text-muted-foreground"}>
                      {feature}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
