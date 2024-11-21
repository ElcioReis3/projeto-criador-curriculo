/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.print-color-adjust': {
          '-webkit-print-color-adjust': 'exact',
          'print-color-adjust': 'exact',
        },
      }, ['responsive', 'print']);
    },
  ],
}

