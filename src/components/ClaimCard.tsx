import { CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ClaimCardProps {
  claim: string;
  status: 'verified' | 'hallucinated' | string;
  index: number;
}

export function ClaimCard({ claim, status, index }: ClaimCardProps) {
  const isVerified = status.toLowerCase() === 'verified';
  
  return (
    <div
      className={cn(
        "group relative p-4 rounded-lg border transition-all duration-200 animate-fade-in",
        isVerified 
          ? "bg-success/5 border-success/20 hover:border-success/40" 
          : "bg-destructive/5 border-destructive/20 hover:border-destructive/40"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-3">
        <div className={cn(
          "flex-shrink-0 p-1 rounded-full",
          isVerified ? "text-success" : "text-destructive"
        )}>
          {isVerified ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <XCircle className="w-5 h-5" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground leading-relaxed">{claim}</p>
          <span className={cn(
            "inline-block mt-2 px-2 py-0.5 text-xs font-medium rounded-full uppercase tracking-wide",
            isVerified 
              ? "bg-success/10 text-success" 
              : "bg-destructive/10 text-destructive"
          )}>
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}
