import React from "react";

interface PasswordStrengthIndicatorProps {
  password: string;
}

export const PasswordStrengthIndicator: React.FC<
  PasswordStrengthIndicatorProps
> = ({ password }) => {
  const getPasswordStrength = (password: string) => {
    let score = 0;
    const checks = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    Object.values(checks).forEach((check) => {
      if (check) score++;
    });

    return { score, checks };
  };

  const { score, checks } = getPasswordStrength(password);

  const getStrengthLabel = (score: number) => {
    if (score === 0) return { label: "", color: "" };
    if (score <= 2) return { label: "Weak", color: "bg-destructive" };
    if (score <= 3) return { label: "Fair", color: "bg-accent" };
    if (score <= 4) return { label: "Good", color: "bg-success" };
    return { label: "Strong", color: "bg-primary" };
  };

  const { label, color } = getStrengthLabel(score);

  if (!password) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          Password strength:
        </span>
        <span
          className={`text-xs font-medium ${
            score <= 2
              ? "text-destructive"
              : score <= 3
              ? "text-accent"
              : score <= 4
              ? "text-success"
              : "text-primary"
          }`}
        >
          {label}
        </span>
      </div>

      <div className="grid grid-cols-5 gap-1 h-1">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`h-full rounded-full transition-all duration-300 ${
              index < score ? color : "bg-muted"
            }`}
          />
        ))}
      </div>

      <div className="text-xs text-muted-foreground space-y-1">
        <div className="grid grid-cols-1 gap-1">
          {Object.entries(checks).map(([key, passed]) => {
            const labels = {
              length: "At least 8 characters",
              uppercase: "One uppercase letter",
              lowercase: "One lowercase letter",
              number: "One number",
              special: "One special character",
            };

            return (
              <div
                key={key}
                className={`flex items-center text-xs ${
                  passed ? "text-success" : "text-muted-foreground"
                }`}
              >
                <span className={`mr-1 ${passed ? "✓" : "○"}`} />
                {labels[key as keyof typeof labels]}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
