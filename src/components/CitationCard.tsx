import { AlertTriangle, Link2Off } from 'lucide-react';

interface CitationCardProps {
  citation: string;
  type: 'fake' | 'broken';
  index: number;
}

export function CitationCard({ citation, type, index }: CitationCardProps) {
  return (
    <div
      className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/20 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex-shrink-0 text-destructive">
        {type === 'fake' ? (
          <AlertTriangle className="w-4 h-4" />
        ) : (
          <Link2Off className="w-4 h-4" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-foreground break-all">{citation}</p>
        <span className="inline-block mt-1 text-xs text-destructive font-medium uppercase">
          {type === 'fake' ? 'Fabricated Source' : 'Broken Link'}
        </span>
      </div>
    </div>
  );
}
