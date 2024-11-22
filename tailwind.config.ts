import type { Config } from 'tailwindcss'

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                theme: '#eeeeee',
                primary: '#af0000',
                secondary: '#0087af',
            },
        },
    },
    plugins: [],
} satisfies Config

