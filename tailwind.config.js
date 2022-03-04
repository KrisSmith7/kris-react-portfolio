module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    colors: {
      'purple': '#b93aa7',
      'orange': '#ff7849',
      'gray': '#efefef'
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(1deg)' },
          '50%': { transform: 'rotate(2deg)' },
        }
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}