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
        white2: '#ffff',
        orange: '#d25112',
        cream: '#FFE7D3'
      },
      height: {
        '128': '26rem',
      },
      width: {
        '1024': '1024px'
      },
      transitionProperty: {
        'index': 'z-index',
        'position': 'position'
      },
      flex:{
        'slider': '0 0 100%'
      },
      backgroundImage: {
        'stairs': 'url(https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Fstairs.png?alt=media&token=69566548-bcf3-495b-aab8-7c7a575ca4ef)'
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
