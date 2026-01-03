import { TrustScore } from './TrustScore';
import { ClaimCard } from './ClaimCard';
import { CitationCard } from './CitationCard';
import { FileText, Link2, AlertCircle } from 'lucide-react';

interface Claim {
  claim: string;
  status: string;
}

interface VerificationData {
  trust_score?: number;
  claims?: Claim[];
  fake_citations?: string[];
  broken_citations?: string[];
  error?: string;
}

interface VerificationResultsProps {
  data: VerificationData;
}

export function VerificationResults({ data }: VerificationResultsProps) {
  const hasClaims = data.claims && data.claims.length > 0;
  const hasFakeCitations = data.fake_citations && data.fake_citations.length > 0;
  const hasBrokenCitations = data.broken_citations && data.broken_citations.length > 0;
  const hasCitations = hasFakeCitations || hasBrokenCitations;

  const verifiedCount = data.claims?.filter(c => c.status.toLowerCase() === 'verified').length || 0;
  const hallucinatedCount = data.claims?.filter(c => c.status.toLowerCase() === 'hallucinated').length || 0;

  if (data.error) {
    return (
      <div className="flex items-center justify-center gap-3 p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
        <AlertCircle className="w-5 h-5 text-destructive" />
        <p className="text-sm text-destructive">{data.error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Trust Score Section */}
      <div className="flex flex-col items-center py-8 bg-secondary/30 rounded-xl border border-border">
        <TrustScore score={data.trust_score ?? 0} />
        
        {hasClaims && (
          <div className="flex items-center gap-6 mt-6 pt-6 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-success" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{verifiedCount}</span> Verified
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{hallucinatedCount}</span> Hallucinated
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Claims Section */}
      {hasClaims && (
        <section>
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-muted-foreground" />
            <h2 className="text-lg font-semibold text-foreground">Claims Analysis</h2>
            <span className="ml-auto text-sm text-muted-foreground">
              {data.claims?.length} claims detected
            </span>
          </div>
          <div className="space-y-3">
            {data.claims?.map((item, index) => (
              <ClaimCard
                key={index}
                claim={item.claim}
                status={item.status}
                index={index}
              />
            ))}
          </div>
        </section>
      )}

      {/* Citations Section */}
      {hasCitations && (
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Link2 className="w-5 h-5 text-muted-foreground" />
            <h2 className="text-lg font-semibold text-foreground">Problematic Citations</h2>
          </div>
          <div className="space-y-3">
            {data.fake_citations?.map((citation, index) => (
              <CitationCard
                key={`fake-${index}`}
                citation={citation}
                type="fake"
                index={index}
              />
            ))}
            {data.broken_citations?.map((citation, index) => (
              <CitationCard
                key={`broken-${index}`}
                citation={citation}
                type="broken"
                index={(data.fake_citations?.length || 0) + index}
              />
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {!hasClaims && !hasCitations && data.trust_score === undefined && (
        <div className="text-center py-8 text-muted-foreground">
          <p>No verification data available.</p>
        </div>
      )}
    </div>
  );
}
