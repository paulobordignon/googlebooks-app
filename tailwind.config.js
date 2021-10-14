module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#fefaf6',
        name: '#FF6978',
        link: '#4ABDF1',
      },
      backgroundImage: {
        'readingBook': "url('/images/readingBook.svg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
