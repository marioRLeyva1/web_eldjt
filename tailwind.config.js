module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    colors: {
      primary: '#C28128',
      secondary: '#EA9A28',
      light: '#DFE0DF',
      dark: '#402E32',
      extra: '#b7521e'
    },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
