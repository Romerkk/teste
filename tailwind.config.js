 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['InterVariable', 'sans-serif'],
      sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
}