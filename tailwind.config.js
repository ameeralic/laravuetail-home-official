/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        ibm: ['IBM Plex Mono', 'monospace'],
    },
    colors: {
      laravel: '#ff2d20',
      vue:'#41b883',
      tailwind:'#38bdf8',
  },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

