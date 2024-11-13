/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'delivery': "url('/assets/deliveryBackgroundWithOverlay.png')",
      },
      colors: {
        'primary': '#F95C19',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}