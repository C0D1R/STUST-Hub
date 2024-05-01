/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,vue}',
  ],
  theme: {
    extend: {
      opacity: {
        '8': '.08',
      },
    },
  },
  plugins: [],
}

