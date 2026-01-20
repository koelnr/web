"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface EmailFormProps {
  action: (prevState: any, formData: FormData) => Promise<{
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
    <Button type="submit" disabled={pending} className="min-w-[120px]">
      {pending ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Saving...
        </span>
      ) : (
        buttonText
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
      <form ref={formRef} action={formAction} className="flex flex-col sm:flex-row gap-4">
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
          className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300"
          role="status"
          aria-live="polite"
        >
          <svg
            className="h-5 w-5 text-green-500 flex-shrink-0"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p className="text-sm font-medium text-green-600 dark:text-green-400">
            {state.message || "Thank you! We'll notify you when we launch."}
          </p>
        </div>
      )}

      {/* Error Message */}
      {state?.error && !state?.success && (
        <div
          className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300"
          role="alert"
          aria-live="assertive"
        >
          <svg
            className="h-5 w-5 text-red-500 flex-shrink-0"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p className="text-sm font-medium text-red-600 dark:text-red-400">{state.error}</p>
        </div>
      )}
    </div>
  );
}
