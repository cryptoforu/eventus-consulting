/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'primary-gradient':
          'linear-gradient(to right, rgb(153, 246, 228), rgb(217, 249, 157))',
        'secondary-gradient':
          'linear-gradient(0deg, rgba(2,44,34,1) 0%, rgba(15,23,42,1) 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
     require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require("tailwind-gradient-mask-image")
    ],
}
