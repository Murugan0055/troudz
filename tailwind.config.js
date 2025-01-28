/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"], // Scans files for classes
	theme: {
    	extend: {
    		backgroundImage: {
    			'gradient-primary': 'linear-gradient(to bottom right, #006CFC, #00DDE8)',
    			'gradient-primary-hover': 'linear-gradient(to top left, #006CFC, #00DDE8)'
    		},
    		borderRadius: {
    			lg: '0.5rem',
    			md: '0.375rem',
    			sm: '0.25rem'
    		},
    		colors: {
    			dark: '#000',
    			background: '#f8fafc',
    			foreground: '#1e293b',
    			card: {
    				DEFAULT: '#ffffff',
    				foreground: '#1e293b'
    			},
    			popover: {
    				DEFAULT: '#f1f5f9',
    				foreground: '#111827'
    			},
    			primary: {
    				DEFAULT: '#111827',
    				foreground: '#ffffff'
    			},
    			secondary: {
    				DEFAULT: '#1B255E',
    				foreground: '#ffffff'
    			},
    			muted: {
    				DEFAULT: '#d1d5db',
    				foreground: '#1f2937'
    			},
    			accent: {
    				DEFAULT: '#14b8a6',
    				foreground: '#ffffff'
    			},
    			destructive: {
    				DEFAULT: '#ef4444',
    				foreground: '#ffffff'
    			},
    			border: '#e2e8f0',
    			input: '#f1f5f9',
    			ring: '#60a5fa',
    			chart: {
    				'1': '#6366f1',
    				'2': '#f43f5e',
    				'3': '#10b981',
    				'4': '#f59e0b',
    				'5': '#3b82f6'
    			}
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
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [require('tailwindcss-animate')],
};
