import { useMemo } from 'react';

interface TrustScoreProps {
  score: number;
}

export function TrustScore({ score }: TrustScoreProps) {
  const { color, label } = useMemo(() => {
    if (score >= 80) return { color: 'text-success', label: 'High Trust' };
    if (score >= 50) return { color: 'text-warning', label: 'Moderate Trust' };
    return { color: 'text-destructive', label: 'Low Trust' };
  }, [score]);

  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-36 h-36">
        {/* Background circle */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="8"
          />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke={score >= 80 ? 'hsl(var(--success))' : score >= 50 ? 'hsl(var(--warning))' : 'hsl(var(--destructive))'}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        {/* Score text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-4xl font-bold ${color}`}>{score}</span>
          <span className="text-xs text-muted-foreground uppercase tracking-wider">/ 100</span>
        </div>
      </div>
      <div className="text-center">
        <p className={`text-sm font-medium ${color}`}>{label}</p>
        <p className="text-xs text-muted-foreground">Trust Score</p>
      </div>
    </div>
  );
}
