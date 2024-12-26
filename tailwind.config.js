/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'srs-primary': '#3e70b9',
        'srs-secondary': '',
        'srs-primary-hover': '#3864a6',
      },
      // backgroundColor: {
      //   'srs-bg-primary': '',
      //   'srs-bg-secondary': '',
      //   'dark-primary': '',
      //   'dark-secondary': '',
      // },
      // textColor: {
      //   'custom-red': '#DC2626',
      //   'custom-green': '#16A34A',
      //   'dark-text': '#D1D5DB',
      // },
      // fontSize: {
      //   'tiny': '0.625rem',
      //   'xxl': '1.75rem',
      // },
    },
  },
  plugins: [],
}