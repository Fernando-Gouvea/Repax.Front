export const theme = {
  colors: {
    background: "hsl(225, 25%, 97%)",
    foreground: "hsl(230, 25%, 12%)",
    card: "hsl(0, 0%, 100%)",
    cardForeground: "hsl(230, 25%, 12%)",
    primary: "hsl(230, 60%, 22%)",
    primaryForeground: "hsl(0, 0%, 100%)",
    secondary: "hsl(225, 20%, 92%)",
    secondaryForeground: "hsl(230, 25%, 12%)",
    muted: "hsl(225, 15%, 94%)",
    mutedForeground: "hsl(225, 10%, 48%)",
    accent: "hsl(28, 95%, 55%)",
    accentForeground: "hsl(0, 0%, 100%)",
    destructive: "hsl(0, 72%, 51%)",
    destructiveForeground: "hsl(0, 0%, 100%)",
    border: "hsl(225, 15%, 88%)",
    input: "hsl(225, 15%, 88%)",
    ring: "hsl(28, 95%, 55%)",
    success: "hsl(152, 60%, 42%)",
    successForeground: "hsl(0, 0%, 100%)",
    warning: "hsl(38, 92%, 50%)",
    warningForeground: "hsl(0, 0%, 100%)",
    info: "hsl(210, 80%, 52%)",
    infoForeground: "hsl(0, 0%, 100%)",
  },
  gradients: {
    primary:
      "linear-gradient(135deg, hsl(230, 60%, 22%) 0%, hsl(230, 50%, 30%) 100%)",
    accent:
      "linear-gradient(135deg, hsl(28, 95%, 55%) 0%, hsl(35, 95%, 58%) 100%)",
    hero: "linear-gradient(135deg, hsl(230, 60%, 16%) 0%, hsl(230, 50%, 24%) 50%, hsl(230, 40%, 30%) 100%)",
  },
  shadows: {
    card: "0 4px 20px -4px hsla(230, 25%, 12%, 0.08), 0 2px 8px -2px hsla(230, 25%, 12%, 0.04)",
    cardHover:
      "0 8px 30px -4px hsla(230, 25%, 12%, 0.12), 0 4px 12px -2px hsla(230, 25%, 12%, 0.06)",
  },
  fonts: {
    sans: "'Inter', system-ui, sans-serif",
    display: "'Space Grotesk', 'Inter', system-ui, sans-serif",
  },
  radius: "0.75rem",
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

export type Theme = typeof theme;
