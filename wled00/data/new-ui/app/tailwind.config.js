const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: '1000ch',
                    }
                }
            },
            colors: {
                'cblue': {
                    500: '#007acc',
                    DEFAULT: '#007acc'
                },
                'cgray': {
                    0: "#9c9ca2",
                    100: "#75757d",
                    200: "#505056",
                    300: '#3e3e42',
                    500: '#2d2d30',
                    600: '#252526',
                    700: '#1e1e1e',
                    DEFAULT: '#2d2d30'
                },
            },
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        nextui()
    ],
}

