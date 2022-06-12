module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C28128',
        secondary: '#EA9A28',
        light: '#DFE0DF',
        dark: '#402E32',
        extra: '#b7521e',
        white: '#ffff',
        orange: '#d25112',
        cream: '#FFE7D3'
      },
      height: {
        '128': '26rem',
      },
      transitionProperty: {
        'index': 'z-index',
        'position': 'position'
      },
      flex:{
        'slider': '0 0 100%'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
