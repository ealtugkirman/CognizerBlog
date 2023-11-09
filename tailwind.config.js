module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        myfont: ['Poppins', 'sans-serif'],
        mysecondfont: ['Cormorant Garamond', 'sans-serif'],

      },
      spacing: {
        '2/3': '66.666667%',
      },
      colors: {
        first: '#F9FBE7',
        footer: '#031B34',
      },
    },
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
    },
  },
  plugins: [],
};
