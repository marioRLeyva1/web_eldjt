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
        'slider': '0 0 100%',
        'slider80': '0 0 80%',
        'slider-auto': '0 0 auto'
      },
      backgroundImage: {
        'stairs': 'url(https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Fstairs.png?alt=media&token=69566548-bcf3-495b-aab8-7c7a575ca4ef)',
        'front': 'url(https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Ffront.jpg?alt=media&token=e776a382-f5dd-4b75-97f4-5a99da29fead)',
      },
      fontFamily: {
        'poppins': 'Poppins'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
