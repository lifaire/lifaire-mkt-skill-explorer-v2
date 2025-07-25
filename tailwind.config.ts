import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          '"Space Grotesk"',
          '"Space Grotesk-fallback"',
          "Helvetica",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          "NotoColorEmoji",
          '"Noto Color Emoji"',
          '"Segoe UI Symbol"',
          '"Android Emoji"',
          "EmojiSymbols",
          "-apple-system",
          '"system-ui"',
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          '"Noto Sans"',
          "sans-serif",
        ],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        blue: {
          50: "hsl(220, 100%, 97%)",
          100: "hsl(220, 75%, 94%)",
          200: "hsl(220, 83%, 89%)",
          300: "hsl(220, 84%, 80%)",
          400: "hsl(220, 84%, 69%)",
          500: "hsl(220, 84%, 58%)",
          600: "hsl(220, 84%, 47%)",
          700: "hsl(220, 84%, 39%)",
          800: "hsl(220, 84%, 31%)",
          900: "hsl(220, 84%, 24%)",
        },
        purple: {
          50: "hsl(270, 100%, 98%)",
          100: "hsl(270, 87%, 96%)",
          200: "hsl(270, 95%, 92%)",
          300: "hsl(270, 95%, 85%)",
          400: "hsl(270, 91%, 74%)",
          500: "hsl(270, 91%, 62%)",
          600: "hsl(270, 91%, 51%)",
          700: "hsl(270, 91%, 42%)",
          800: "hsl(270, 91%, 35%)",
          900: "hsl(270, 91%, 28%)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
