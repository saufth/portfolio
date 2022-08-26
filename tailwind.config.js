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
  18: '4.5rem', /* 72px */
  18.75: '4.688rem', /* 75px */
  '600px': '600px'
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/core/ui/components/**/*.{js,ts,jsx,tsx}',
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
        'blue-violet': '#932fe9',
        'sky-magenta': '#c96bb6',
        'fluorescent-blue': '#23E8DA',
        'button-blue': '#25A1F5',
        'deep-carmine-pink': '#F53425',
        'cadmium-yellow': '#FFF601  ',
        bluebonnet: '#262FFF',
        sunglow: '#FFC837'
      },
      width: {
        ...sizeBreakpoints,
        ...sizeDefaults
      },
      height: {
        ...sizeBreakpoints,
        ...sizeDefaults
      },
      inset: {
        1.75: '0.4375rem'
      },
      boxShadow: {
        'lg-c': '0px 0px 20px -2px rgba(0, 0, 0, 0.3)'
      }
    }
  },
  plugins: []
}
