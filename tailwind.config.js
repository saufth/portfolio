const sizeBreakpoints = {
  xs: '20rem', /* 320px */
  sm: '24rem', /* 384px */
  md: '28rem', /* 448px */
  lg: '32rem', /* 512px */
  xl: '36rem', /* 576px */
  '2xl': '42rem', /* 672px */
  '3xl': '48rem', /* 768px */
  '4xl': '56rem', /* 896px */
  '5xl': '64rem', /* 1024px */
  '6xl': '72rem', /* 1152px */
  '7xl': '80rem' /* 1280px */
}

const sizeDefaults = {
  0.75: '0.1875rem', /* 3px */
  15: '3.75rem', /* 60px */
  18: '4.5rem', /* 72px */
  18.75: '4.688rem', /* 75px */
  '600px': '600px'
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/core/components/**/*.{js,ts,jsx,tsx}',
    './src/app/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      'helvnueu-black': ['Helvetica Nueu LT Pro Black', 'sans-serif'],
      'futura-light': ['Futura Light'],
      'futura-book': ['Futura Book'],
      'futura-medium': ['Futura Medium'],
      'futura-bold': ['Futura Bold'],
      'futura-extrabold': ['Futura ExtraBold'],
      'futura-heavy': ['Futura Heavy'],
      'proxnova-light': ['Proxima Nova Light'],
      'proxnova-light-i': ['Proxima Nova Light Italic'],
      'proxnova-regular': ['Proxima Nova Regular'],
      'proxnova-regular-i': ['Proxima Nova Regular Italic'],
      'proxnova-semi': ['Proxima Nova Semibold'],
      'proxnova-semi-i': ['Proxima Nova Semibold Italic'],
      'proxnova-bold': ['Proxima Nova Bold'],
      'proxnova-bold-i': ['Proxima Nova Bold Italic'],
      'proxnova-extrabold': ['Proxima Nova Extrabold'],
      'proxnova-extrabold-i': ['Proxima Nova Extrabold Italic'],
      'proxnova-black': ['Proxima Nova Black'],
      'proxnova-black-i': ['Proxima Nova Black Italic']
    },
    extend: {
      colors: {
        'button-blue': '#28A3F7',
        'blue-violet': '#932fe9',
        'cyan-cornflower-blue': '#1F82C4',
        'bright-green': '#0FFC55',
        'razzle-dazzle-rose': '#E83ACF',
        'deep-carmine-pink': '#F63627',
        'cadmium-yellow': '#FFF603',
        sunglow: '#FFCA39'
      },
      width: {
        ...sizeBreakpoints,
        ...sizeDefaults
      },
      height: {
        ...sizeBreakpoints,
        ...sizeDefaults
      },
      padding: {
        0.75: '0.1875rem' /* 3px */
      },
      boxShadow: {
        'center-sm': '0px 0px 16px -3px rgba(0, 0, 0, 0.3)'
      },
      animation: {
        'steam-to-t': 'steam-to-t 5s ease-in-out',
        'steam-to-b': 'steam-to-b 5s ease-in-out',
        'steam-to-r': 'steam-to-r 5s ease-in-out',
        'steam-to-tr': 'steam-to-tr 5s ease-in-out',
        'steam-to-br': 'steam-to-br 5s ease-in-out',
        'steam-to-l': 'steam-to-l 5s ease-in-out',
        'steam-to-tl': 'steam-to-tl 5s ease-in-out',
        'steam-to-bl': 'steam-to-bl 5s ease-in-out',
      },
      keyframes: {
        'steam-to-t': {
          '64%': { opacity: 0.4 },
          '100%': {
            transform: 'translateY(-8rem)',
            opacity: 0
          }
        },
        'steam-to-b': {
          '64%': { opacity: 0.4 },
          '100%': {
            transform: 'translateY(8rem)',
            opacity: 0
          }
        },
        'steam-to-r': {
          '64%': { opacity: 0.4 },
          '100%': {
            transform: 'translateX(8rem)',
            opacity: 0
          }
        },
        'steam-to-tr': {
          '64%': { opacity: 0.4 },
          '100%': {
            transform: 'translate(3rem, -8rem)',
            opacity: 0
          }
        },
        'steam-to-br': {
          '64%': { opacity: 0.4 },
          '100%': {
            transform: 'translate(3rem, 8rem)',
            opacity: 0
          }
        },
        'steam-to-l': {
          '64%': { opacity: 0.4 },
          '100%': {
            transform: 'translateX(-8rem)',
            opacity: 0
          }
        },
        'steam-to-tl': {
          '64%': { opacity: 0.4 },
          '100%': {
            transform: 'translate(-3rem, -8rem)',
            opacity: 0
          }
        },
        'steam-to-bl': {
          '64%': { opacity: 0.4 },
          '100%': {
            transform: 'translate(-3rem, 8rem)',
            opacity: 0
          }
        }
      },
      transitionDuration: {
        '50': '50ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms'
      },
      transitionDelay: {
        '0': '0ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms'
      }
    }
  },
  plugins: []
}
