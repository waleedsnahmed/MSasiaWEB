/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                brand: {
                    bg: {
                        main: 'var(--bg-main)',
                        alt: 'var(--bg-alt)',
                        highlight: 'var(--bg-highlight)',
                        card: 'var(--bg-card)',
                    },
                    text: {
                        main: 'var(--text-main)',
                        muted: 'var(--text-muted)',
                    },
                    heading: {
                        h1: 'var(--heading-h1)',
                        h2: 'var(--heading-h2)',
                        h3: 'var(--heading-h3)',
                        h4: 'var(--heading-h4)',
                    },
                    link: {
                        DEFAULT: 'var(--link-default)',
                        hover: 'var(--link-hover)',
                    },
                    icon: {
                        primary: 'var(--icon-primary)',
                        eco: 'var(--icon-eco)',
                        muted: 'var(--icon-muted)',
                    },
                    border: {
                        soft: 'var(--border-soft)',
                        divider: 'var(--border-divider)',
                    },
                    btn: {
                        primary: 'var(--btn-primary)',
                        'primary-hover': 'var(--btn-primary-hover)',
                        secondary: 'var(--btn-secondary)',
                        'secondary-hover': 'var(--btn-secondary-hover)',
                    }
                }
            },
        },
    },
    plugins: [],
}
