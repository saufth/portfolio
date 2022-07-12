/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      'proxnova-light': ['Proxima Nova Light'],
      'proxnova-light-i': ['Proxima Nova Light Italic'],
      'proxnova-regular': ['Proxima Nova Regular'],
      'proxnova-regular-i': ['Proxima Nova Regular Italic'],
      'proxnova-semi': ['Proxima Nova Semibold'],
      'proxnova-semi-i': ['Proxima Nova Semibold Italic'],
      'proxnova-bold': ['Proxima Nova Bold'],
      'proxnova-bold-i': ['Proxima Nova Bold Italic'],
      'proxnova-extra': ['Proxima Nova Extrabold'],
      'proxnova-extra-i': ['Proxima Nova Extrabold Italic'],
      'proxnova-black': ['Proxima Nova Black'],
      'proxnova-black-i': ['Proxima Nova Black Italic']
    }
  },
  corePlugins: {
    container: false
  }
}
