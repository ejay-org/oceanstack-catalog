interface BatteryIconProps {
  percentage: number; // 0-100
  className?: string;
}

export function BatteryIcon({ percentage, className = "" }: BatteryIconProps) {
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

  return (
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
}
