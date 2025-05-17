
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				quiz: {
					robot: '#7E69AB',
					machine: '#33C3F0',
					correct: '#4ade80',
					wrong: '#f87171',
					dark: '#1A1F2C',
					card: '#252A37',
				},
			},
			backgroundImage: {
				'tech-pattern': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIj48cGF0aCBkPSJNMCAwaDYwdjYwSDBWMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzBWMzB6TTAgMzBoMzB2MzBIMFYzMHoiIGZpbGw9IiMzMzM4NGQiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PHBhdGggZD0iTTMwIDBIMHYzMGgzMFYwem0wIDBoMzB2MzBIMzBWMHoiIGZpbGw9IiMzMzM4NGQiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PHBhdGggZD0iTTE1IDE1aDMwdjMwSDE1VjE1ek0xNSAxNWgtMTVoMzBIMTVWMHYxNXoiIGZpbGw9IiMzMzM4NGQiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')",
				'circuit-pattern': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4OCIgaGVpZ2h0PSI4OCIgdmlld0JveD0iMCAwIDg4IDg4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzM4NGQiIGZpbGwtb3BhY2l0eT0iLjAzIj48cGF0aCBkPSJNMCAwaDQ0djIySDBWMHptMCA0NGg0NHYyMkgwVjQ0em00NC00NEg4OHYyMkg0NFYwem0wIDQ0SDg4djIySDQ0VjQ0em0tMTMtMjJjNi42MjcgMCAxMi01LjM3MyAxMi0xMnMtNS4zNzMtMTItMTItMTItMTIgNS4zNzMtMTIgMTIgNS4zNzMgMTIgMTIgMTJ6bTAgMjJjNi42MjcgMCAxMi01LjM3MyAxMi0xMnMtNS4zNzMtMTItMTItMTItMTIgNS4zNzMtMTIgMTIgNS4zNzMgMTIgMTIgMTJ6bTI2LTIyYzYuNjI4IDAgMTItNS4zNzMgMTItMTJzLTUuMzcyLTEyLTEyLTEyLTEyIDUuMzczLTEyIDEyIDUuMzcyIDEyIDEyIDEyem0wIDIyYzYuNjI4IDAgMTItNS4zNzMgMTItMTJzLTUuMzcyLTEyLTEyLTEyLTEyIDUuMzczLTEyIDEyIDUuMzcyIDEyIDEyIDEyeiIvPjwvZz48L2c+PC9zdmc+')",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'card-flip': {
					'0%, 100%': { transform: 'rotateY(0deg)' },
					'50%': { transform: 'rotateY(180deg)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'card-flip': 'card-flip 0.5s ease-out',
				'float': 'float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
