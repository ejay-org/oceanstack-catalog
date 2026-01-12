interface BatteryIconProps {
  percentage: number; // 0-100
  className?: string;
}

export function BatteryIcon({ percentage, className = "" }: BatteryIconProps) {
  // 퍼센트에 따른 색상 결정
  const getColor = (pct: number) => {
    if (pct >= 75) return "text-green-500";
    if (pct >= 50) return "text-blue-500";
    if (pct >= 25) return "text-yellow-500";
    return "text-red-500";
  };

  const color = getColor(percentage);
  const fillPercentage = Math.max(0, Math.min(100, percentage));

  return (
    <div className={`flex flex-col items-center gap-0.5 ${className}`}>
      {/* 배터리 아이콘 */}
      <div className="relative w-6 h-10 flex items-center justify-center">
        {/* 배터리 본체 */}
        <div className="relative w-5 h-8 border-2 border-current rounded-sm flex items-end overflow-hidden">
          {/* 배터리 채우기 */}
          <div
            className={`w-full ${color} bg-current transition-all duration-300`}
            style={{ height: `${fillPercentage}%` }}
          />
        </div>
        {/* 배터리 상단 돌기 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-1 bg-current rounded-t-sm" />
      </div>
      {/* 퍼센트 수치 */}
      <span className={`text-[10px] font-medium ${color}`}>
        {percentage}%
      </span>
    </div>
  );
}
