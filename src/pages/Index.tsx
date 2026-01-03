import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { VerificationResults } from '@/components/VerificationResults';
import {
  Shield,
  Loader2,
  Sparkles,
  CheckCircle,
  XCircle,
  FileSearch,
  Trash2,
  Wand2,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface VerificationData {
  trust_score?: number;
  claims?: Array<{ claim: string; status: string }>;
  fake_citations?: string[];
  broken_citations?: string[];
  error?: string;
}

const SAMPLE_TEXT = `The Great Wall of China is visible from the Moon.
According to a 2021 Harvard study, humans use only 10% of their brain.
The capital of Australia is Sydney.`;

const Index = () => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<VerificationData | null>(null);
  const { toast } = useToast();

  const handleVerify = async () => {
    if (!text.trim()) {
      toast({
        title: 'Input required',
        description: 'Please paste some text to verify.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setResults(null);

    try {
      const response = await fetch(
        'https://ps03-ai-verifier.onrender.com/verify',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: text.trim() }),
        }
      );

      if (!response.ok) {
        throw new Error(`Verification failed`);
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      toast({
        title: 'Verification failed',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
      setResults({ error: 'Failed to verify content.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-10 border-b border-border bg-card/60 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 py-5 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-primary/15">
            <Shield className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              AI Verifier
            </h1>
            <p className="text-sm text-muted-foreground">
              Trust • Transparency • Truth
            </p>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-5xl mx-auto px-4 py-10 space-y-12">
        {/* HERO */}
        <section className="text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Verify AI Content Before You Trust It
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Detect hallucinations, verify factual claims, and identify fake or
            broken citations in AI-generated text.
          </p>

          {/* FEATURE BADGES */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-sm">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Claim Verification
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-sm">
              <XCircle className="w-4 h-4 text-red-500" />
              Hallucination Detection
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-sm">
              <FileSearch className="w-4 h-4 text-blue-500" />
              Citation Analysis
            </span>
          </div>
        </section>

        {/* INPUT CARD */}
        <section className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-xl p-6 shadow-xl space-y-5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-muted-foreground" />
            <h3 className="text-lg font-semibold">
              Paste AI-Generated Text
            </h3>
          </div>

          <Textarea
            placeholder="Paste AI-generated content here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={isLoading}
            className="min-h-[180px] sm:min-h-[220px] resize-y text-base leading-relaxed bg-background/70"
          />

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              {text.length.toLocaleString()} characters
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                variant="secondary"
                onClick={() => setText(SAMPLE_TEXT)}
              >
                <Wand2 className="w-4 h-4 mr-2" />
                Use Sample
              </Button>

              <Button
                variant="outline"
                onClick={() => setText('')}
                disabled={!text}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear
              </Button>

              <Button
                onClick={handleVerify}
                disabled={isLoading || !text.trim()}
                size="lg"
                className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 shadow-lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4 mr-2" />
                    Verify Content
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* PROGRESS BAR */}
          {isLoading && (
            <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full w-1/2 bg-primary animate-pulse" />
            </div>
          )}
        </section>

        {/* RESULTS */}
        {results && !isLoading && (
          <section className="animate-in fade-in slide-in-from-bottom-4">
            <VerificationResults data={results} />
          </section>
        )}

        {/* EMPTY STATE */}
        {!results && !isLoading && (
          <div className="text-center py-20 space-y-4">
            <div className="inline-flex p-5 rounded-full bg-secondary">
              <Shield className="w-9 h-9 text-muted-foreground" />
            </div>
            <p className="text-lg font-semibold">
              Ready to Verify AI Content
            </p>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Paste text above or try the sample to see how verification works.
            </p>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border mt-24">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-xs text-muted-foreground">
          © 2026 AI Verifier • Hackathon-ready • Built for trustworthy AI
        </div>
      </footer>
    </div>
  );
};

export default Index;
