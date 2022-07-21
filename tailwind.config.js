/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// Tailwind CSS 설치

// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init
// tailwind.config.js 파일에 content: ["./src/**/*.{html,js}"] 넣기
// CSS파일에 @tailwind base; @tailwind components; @tailwind utilities; 붙여넣기
// npm start 다시 해서 실행 적용되는지 확인
