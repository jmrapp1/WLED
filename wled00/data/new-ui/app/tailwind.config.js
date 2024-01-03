const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontSize: {
            '2xs': ['0.75rem', { lineHeight: '1.25rem' }],
            xs: ['0.8125rem', { lineHeight: '1.5rem' }],
            sm: ['0.875rem', { lineHeight: '1.5rem' }],
            base: ['1rem', { lineHeight: '1.75rem' }],
            lg: ['1.125rem', { lineHeight: '1.75rem' }],
            xl: ['1.25rem', { lineHeight: '1.75rem' }],
            '2xl': ['1.5rem', { lineHeight: '2rem' }],
            '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
            '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
            '5xl': ['3rem', { lineHeight: '1' }],
            '6xl': ['3.75rem', { lineHeight: '1' }],
            '7xl': ['4.5rem', { lineHeight: '1' }],
            '8xl': ['6rem', { lineHeight: '1' }],
            '9xl': ['8rem', { lineHeight: '1' }],
        },
        extend: {
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
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-body': theme('colors.zinc.700'),
                        '--tw-prose-headings': theme('colors.zinc.900'),
                        '--tw-prose-links': theme('colors.customBlue.500'),
                        '--tw-prose-links-hover': theme('colors.customBlue.600'),
                        '--tw-prose-links-underline': theme('colors.customBlue.500 / 0.3'),
                        '--tw-prose-bold': theme('colors.zinc.900'),
                        '--tw-prose-counters': theme('colors.zinc.500'),
                        '--tw-prose-bullets': theme('colors.zinc.300'),
                        '--tw-prose-hr': theme('colors.zinc.900 / 0.05'),
                        '--tw-prose-quotes': theme('colors.zinc.900'),
                        '--tw-prose-quote-borders': theme('colors.zinc.200'),
                        '--tw-prose-captions': theme('colors.zinc.500'),
                        '--tw-prose-code': theme('colors.zinc.900'),
                        '--tw-prose-code-bg': theme('colors.zinc.100'),
                        '--tw-prose-code-ring': theme('colors.zinc.300'),
                        '--tw-prose-th-borders': theme('colors.zinc.300'),
                        '--tw-prose-td-borders': theme('colors.zinc.200'),

                        '--tw-prose-invert-body': theme('colors.zinc.400'),
                        '--tw-prose-invert-headings': theme('colors.white'),
                        '--tw-prose-invert-links': theme('colors.customBlue.400'),
                        '--tw-prose-invert-links-hover': theme('colors.customBlue.500'),
                        '--tw-prose-invert-links-underline': theme('colors.customBlue.500 / 0.3'),
                        '--tw-prose-invert-bold': theme('colors.white'),
                        '--tw-prose-invert-counters': theme('colors.zinc.400'),
                        '--tw-prose-invert-bullets': theme('colors.zinc.600'),
                        '--tw-prose-invert-hr': theme('colors.white / 0.05'),
                        '--tw-prose-invert-quotes': theme('colors.zinc.100'),
                        '--tw-prose-invert-quote-borders': theme('colors.zinc.700'),
                        '--tw-prose-invert-captions': theme('colors.zinc.400'),
                        '--tw-prose-invert-code': theme('colors.white'),
                        '--tw-prose-invert-code-bg': theme('colors.zinc.700 / 0.15'),
                        '--tw-prose-invert-code-ring': theme('colors.white / 0.1'),
                        '--tw-prose-invert-th-borders': theme('colors.zinc.600'),
                        '--tw-prose-invert-td-borders': theme('colors.zinc.700'),

                        // Base
                        color: 'var(--tw-prose-body)',
                        fontSize: theme('fontSize.sm')[0],
                        lineHeight: theme('lineHeight.7'),
                        maxWidth: '1000ch',

                        // Text
                        '[class~="lead"]': {
                            fontSize: theme('fontSize.base')[0],
                            ...theme('fontSize.base')[1],
                        },

                        // Horizontal rules
                        hr: {
                            borderColor: 'var(--tw-prose-hr)',
                            borderTopWidth: 1,
                            marginTop: theme('spacing.16'),
                            marginBottom: theme('spacing.16'),
                            maxWidth: 'none',
                            marginLeft: `calc(-1 * ${theme('spacing.4')})`,
                            marginRight: `calc(-1 * ${theme('spacing.4')})`,
                            '@screen sm': {
                                marginLeft: `calc(-1 * ${theme('spacing.6')})`,
                                marginRight: `calc(-1 * ${theme('spacing.6')})`,
                            },
                            '@screen lg': {
                                marginLeft: `calc(-1 * ${theme('spacing.8')})`,
                                marginRight: `calc(-1 * ${theme('spacing.8')})`,
                            },
                        },

                        // Headings
                        h1: {
                            color: 'var(--tw-prose-headings)',
                            fontWeight: '700',
                            fontSize: theme('fontSize.2xl')[0],
                            marginBottom: theme('spacing.2'),
                        },
                        h2: {
                            color: 'var(--tw-prose-headings)',
                            fontWeight: '600',
                            fontSize: theme('fontSize.lg')[0],
                            ...theme('fontSize.lg')[1],
                            marginTop: theme('spacing.16'),
                            marginBottom: theme('spacing.2'),
                        },
                        h3: {
                            color: 'var(--tw-prose-headings)',
                            fontSize: theme('fontSize.base')[0],
                            ...theme('fontSize.base')[1],
                            fontWeight: '600',
                            marginTop: theme('spacing.10'),
                            marginBottom: theme('spacing.2'),
                        },

                        // Media
                        'img, video, figure': {
                            marginTop: theme('spacing.8'),
                            marginBottom: theme('spacing.8'),
                        },
                        figcaption: {
                            color: 'var(--tw-prose-captions)',
                            fontSize: theme('fontSize.xs')[0],
                            ...theme('fontSize.xs')[1],
                            marginTop: theme('spacing.2'),
                        },

                        // Tables
                        table: {
                            width: '100%',
                            tableLayout: 'auto',
                            textAlign: 'left',
                            marginTop: theme('spacing.8'),
                            marginBottom: theme('spacing.8'),
                            lineHeight: theme('lineHeight.6'),
                        },
                        thead: {
                            borderBottomWidth: '1px',
                            borderBottomColor: 'var(--tw-prose-th-borders)',
                        },
                        'thead th': {
                            color: 'var(--tw-prose-headings)',
                            fontWeight: '600',
                            verticalAlign: 'bottom',
                            paddingRight: theme('spacing.2'),
                            paddingBottom: theme('spacing.2'),
                            paddingLeft: theme('spacing.2'),
                        },
                        'thead th:first-child': {
                            paddingLeft: '0',
                        },
                        'thead th:last-child': {
                            paddingRight: '0',
                        },
                        'tbody tr': {
                            borderBottomWidth: '1px',
                            borderBottomColor: 'var(--tw-prose-td-borders)',
                        },
                        'tbody tr:last-child': {
                            borderBottomWidth: '0',
                        },
                        'tbody td': {
                            verticalAlign: 'baseline',
                        },
                        tfoot: {
                            borderTopWidth: '1px',
                            borderTopColor: 'var(--tw-prose-th-borders)',
                        },
                        'tfoot td': {
                            verticalAlign: 'top',
                        },
                        ':is(tbody, tfoot) td': {
                            paddingTop: theme('spacing.2'),
                            paddingRight: theme('spacing.2'),
                            paddingBottom: theme('spacing.2'),
                            paddingLeft: theme('spacing.2'),
                        },
                        ':is(tbody, tfoot) td:first-child': {
                            paddingLeft: '0',
                        },
                        ':is(tbody, tfoot) td:last-child': {
                            paddingRight: '0',
                        },

                        // Inline elements
                        a: {
                            color: 'var(--tw-prose-links)',
                            textDecoration: 'underline transparent',
                            fontWeight: '500',
                            transitionProperty: 'color, text-decoration-color',
                            transitionDuration: theme('transitionDuration.DEFAULT'),
                            transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
                            '&:hover': {
                                color: 'var(--tw-prose-links-hover)',
                                textDecorationColor: 'var(--tw-prose-links-underline)',
                            },
                        },
                        ':is(h1, h2, h3) a': {
                            fontWeight: 'inherit',
                        },
                        strong: {
                            color: 'var(--tw-prose-bold)',
                            fontWeight: '600',
                        },
                        ':is(a, blockquote, thead th) strong': {
                            color: 'inherit',
                        },
                        code: {
                            color: 'var(--tw-prose-code)',
                            borderRadius: theme('borderRadius.lg'),
                            paddingTop: theme('padding.1'),
                            paddingRight: theme('padding[1.5]'),
                            paddingBottom: theme('padding.1'),
                            paddingLeft: theme('padding[1.5]'),
                            boxShadow: 'inset 0 0 0 1px var(--tw-prose-code-ring)',
                            backgroundColor: 'var(--tw-prose-code-bg)',
                            fontSize: theme('fontSize.2xs'),
                        },
                        ':is(a, h1, h2, h3, blockquote, thead th) code': {
                            color: 'inherit',
                        },
                        'h2 code': {
                            fontSize: theme('fontSize.base')[0],
                            fontWeight: 'inherit',
                        },
                        'h3 code': {
                            fontSize: theme('fontSize.sm')[0],
                            fontWeight: 'inherit',
                        },

                        // Overrides
                        ':is(h1, h2, h3) + *': {
                            marginTop: '0',
                        },
                        '> :first-child': {
                            marginTop: '0 !important',
                        },
                        '> :last-child': {
                            marginBottom: '0 !important',
                        },
                    },
                },
                invert: {
                    css: {
                        '--tw-prose-body': 'var(--tw-prose-invert-body)',
                        '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
                        '--tw-prose-links': 'var(--tw-prose-invert-links)',
                        '--tw-prose-links-hover': 'var(--tw-prose-invert-links-hover)',
                        '--tw-prose-links-underline': 'var(--tw-prose-invert-links-underline)',
                        '--tw-prose-bold': 'var(--tw-prose-invert-bold)',
                        '--tw-prose-counters': 'var(--tw-prose-invert-counters)',
                        '--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
                        '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
                        '--tw-prose-quotes': 'var(--tw-prose-invert-quotes)',
                        '--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
                        '--tw-prose-captions': 'var(--tw-prose-invert-captions)',
                        '--tw-prose-code': 'var(--tw-prose-invert-code)',
                        '--tw-prose-code-bg': 'var(--tw-prose-invert-code-bg)',
                        '--tw-prose-code-ring': 'var(--tw-prose-invert-code-ring)',
                        '--tw-prose-th-borders': 'var(--tw-prose-invert-th-borders)',
                        '--tw-prose-td-borders': 'var(--tw-prose-invert-td-borders)',
                    },
                },
            })
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        nextui()
    ],
}

