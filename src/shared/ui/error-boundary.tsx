import * as React from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-background flex min-h-svh items-center justify-center p-6">
          <Card className="w-full max-w-md py-6">
            <CardHeader className="items-center text-center">
              <div className="bg-destructive/10 text-destructive mb-2 flex size-11 items-center justify-center rounded-xl">
                <AlertTriangle className="size-5" />
              </div>
              <CardTitle className="text-lg font-semibold">
                Something went wrong
              </CardTitle>
              <CardDescription className="text-xs">
                An unexpected runtime error occurred while rendering this view.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {this.state.error?.message && (
                <pre className="bg-muted text-muted-foreground overflow-x-auto rounded-lg border p-3 font-mono text-xs">
                  {this.state.error.message}
                </pre>
              )}
              <Button onClick={this.handleReset} className="w-full gap-2">
                <RotateCcw className="size-4" />
                <span>Reload Application</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
