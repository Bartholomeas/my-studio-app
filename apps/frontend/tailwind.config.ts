import FormsPlugin from "@tailwindcss/forms";
import Animate from "tailwindcss-animate";

import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: ["./src/**/*.{ts,tsx,mdx}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "4%",
				screens: {
					"2xl": "1400px",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontSize: {
				// 1 rem = 16px
				xxxs: "0.6875rem", //11px
				xxs: "0.75rem", //12px
				xs: "0.8125rem", // 13px
				sm: "0.875rem", // 14px
				base: "1rem", // 16px
				// md: "1rem", // 16px
				lg: "1.25rem", // 18px
				lgPlus: "1.5rem", // 20px
			},
			colors: {
				background: {
					DEFAULT: "var(--background)",
					dark: "var(--background-dark)",
					light: "var(--background-light)",
				},
				foreground: {
					DEFAULT: "var(--foreground)",
					muted: "var(--foreground-muted)",
					light: "var(--foreground-light)",
					white: "var(--foreground-white)",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					50: "var(--primary-50)",
					100: "var(--primary-100)",
					200: "var(--primary-200)",
					300: "var(--primary-300)",
					400: "var(--primary-400)",
					500: "var(--primary-500)",
					600: "var(--primary-600)",
					700: "var(--primary-700)",
					800: "var(--primary-800)",
					900: "var(--primary-900)",
					950: "var(--primary-950)",
					DEFAULT: "var(--primary-500)",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
		},
		fontFamily: {
			sans: "var(--font-sans)",
			serif: "var(--font-serif)",
		},
	},
	plugins: [FormsPlugin, Animate],
} satisfies Config;
