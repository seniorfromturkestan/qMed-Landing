/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1b59f8',
      },
      borderRadius: {
        sm: '5px',   // rounded-sm
        md: '7px',   // rounded-md
        btn: '30px', // rounded-btn — кнопки
        xl: '50px',  // rounded-xl
      },
      maxWidth: {
        container: '1200px', // max-w-container
      },
      fontFamily: {
        sans: [
          'Montserrat', 'system-ui', '-apple-system', 'BlinkMacSystemFont',
          '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
