import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { VerificationResults } from '@/components/VerificationResults';
import { Shield, Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface VerificationData {
  trust_score?: number;
  claims?: Array<{ claim: string; status: string }>;
  fake_citations?: string[];
  broken_citations?: string[];
  error?: string;
}

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
      const response = await fetch('https://ps03-ai-verifier.onrender.com/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text.trim() }),
      });

      if (!response.ok) {
        throw new Error(`Verification failed: ${response.statusText}`);
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Verification error:', error);
      toast({
        title: 'Verification failed',
        description: error instanceof Error ? error.message : 'An unexpected error occurred.',
        variant: 'destructive',
      });
      setResults({ error: 'Failed to verify content. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-foreground">AI Verifier</h1>
            <p className="text-sm text-muted-foreground">Detect hallucinations & verify claims</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Input Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-muted-foreground" />
            <h2 className="text-lg font-medium text-foreground">Paste AI-Generated Text</h2>
          </div>
          
          <Textarea
            placeholder="Paste the AI-generated content you want to verify here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[200px] resize-y text-base leading-relaxed placeholder:text-muted-foreground/60"
            disabled={isLoading}
          />

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {text.length.toLocaleString()} characters
            </p>
            <Button 
              onClick={handleVerify} 
              disabled={isLoading || !text.trim()}
              size="lg"
              className="min-w-[160px]"
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
        </section>

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-16 space-y-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-4 border-border border-t-primary animate-spin" />
            </div>
            <div className="text-center">
              <p className="text-foreground font-medium">Analyzing content...</p>
              <p className="text-sm text-muted-foreground">This may take a few moments</p>
            </div>
          </div>
        )}

        {/* Results Section */}
        {results && !isLoading && (
          <section>
            <VerificationResults data={results} />
          </section>
        )}

        {/* Empty State */}
        {!results && !isLoading && (
          <div className="text-center py-16 space-y-4">
            <div className="inline-flex p-4 rounded-full bg-secondary">
              <Shield className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
              <p className="text-foreground font-medium">Ready to verify</p>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Paste AI-generated text above to check for hallucinations, verify factual claims, and detect problematic citations.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-auto">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          AI Verification Tool — Helping you trust AI-generated content
        </div>
      </footer>
    </div>
  );
};

export default Index;
