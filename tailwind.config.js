module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    colors: {
      'purple': '#b93aa7',
      'orange': '#ff571f',
      'gray': '#efefef',
      'royal-purple':'#4e1846',
      'dark-orange': '#e05826'
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/page-graphics/hero_bg.png')",
        'gradient-bold': "url('./src/assets/images/page-graphics/bg-gradient-bold.png')",
        'dev-name': "url('./src/assets/images/page-graphics/ksmith-texture-landing.png')",
      },
      fontFamily: {
        chicle: ['Chicle', 'cursive'],
        chivo: ['Chivo', 'sans-serif'],
        shrikhand: ['Shrikhand', 'cursive'],
      },
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