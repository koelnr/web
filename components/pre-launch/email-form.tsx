"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BellIcon, LoaderCircleIcon } from "lucide-react";

interface EmailFormProps {
  action: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prevState: any,
    formData: FormData,
  ) => Promise<{
    success: boolean;
    message?: string;
    error?: string;
  }>;
  placeholder: string;
  buttonText: string;
}

function SubmitButton({ buttonText }: { buttonText: string }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="min-w-30">
      {pending ? (
        <span className="flex items-center gap-2">
          <LoaderCircleIcon className="animate-spin h-4 w-4" />
          Saving...
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <BellIcon />
          {buttonText}
        </span>
      )}
    </Button>
  );
}

export function EmailForm({ action, placeholder, buttonText }: EmailFormProps) {
  const [state, formAction] = useActionState(action, null);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form on successful submission
  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state?.success]);

  return (
    <div className="max-w-md mx-auto pt-4 space-y-4">
      <form
        ref={formRef}
        action={formAction}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Input
          name="email"
          type="email"
          placeholder={placeholder}
          required
          disabled={state?.success}
          className="flex-1"
          autoComplete="email"
          aria-label="Email address"
        />
        <SubmitButton buttonText={buttonText} />
      </form>

      {/* Success Message */}
      {state?.success && (
        <div
          className="flex items-center gap-2 p-4 bg-primary/10 border border-primary/20 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300"
          role="status"
          aria-live="polite"
        >
          <svg
            className="h-5 w-5 text-primary shrink-0"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p className="text-sm font-medium text-primary">
            {state.message || "Thank you! We'll notify you when we launch."}
          </p>
        </div>
      )}

      {/* Error Message */}
      {state?.error && !state?.success && (
        <div
          className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/20 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300"
          role="alert"
          aria-live="assertive"
        >
          <svg
            className="h-5 w-5 text-destructive shrink-0"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p className="text-sm font-medium text-destructive">{state.error}</p>
        </div>
      )}
    </div>
  );
}
