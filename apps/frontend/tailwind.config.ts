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
					"2xl": "1800px",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontSize: {
				xxxs: "0.6875rem",
				xxs: "0.75rem",
				xs: "0.8125rem",
				sm: "0.875rem",
				base: "1rem",
				lg: "1.25rem",
				lgPlus: "1.5rem",
			},
			colors: {
				background: {
					DEFAULT: "var(--background)",
					opacity: "var(--background-opacity)",
					dark: "var(--background-dark)",
					light: "var(--background-light)",
					"light-2": "var(--background-light-2)",
					"light-3": "var(--background-light-3)",
					"light-4": "var(--background-light-4)",
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
					"50": "var(--primary-50)",
					"100": "var(--primary-100)",
					"200": "var(--primary-200)",
					"300": "var(--primary-300)",
					"400": "var(--primary-400)",
					"500": "var(--primary-500)",
					"600": "var(--primary-600)",
					"700": "var(--primary-700)",
					"800": "var(--primary-800)",
					"900": "var(--primary-900)",
					"950": "var(--primary-950)",
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
		fontFamily: {
			sans: "var(--font-sans)",
			serif: "var(--font-serif)",
		},
	},
	plugins: [FormsPlugin, Animate, require("@tailwindcss/typography")],
} satisfies Config;
