module.exports = {
  theme: {
    extend: {
      padding: {
        '15pc': '15%',
        '20pc': '20%',
        '30pc': '30%',
        '35pc': '35%',
        '40pc': '40%',
        '50pc': '50%',
        '70pc': '70%',
      },
      width: {
        '92': '18rem',
        '100': '20rem',
      },
      height: {
        '6/10': '60%',
        '9/10': '90%',
        '92': '18rem',
        '100': '20rem',
      },
      fontSize: {
        '7xl': '5rem',
      },
      textColor: {
        'blue-primary': '#364f6b',
        'blue-light': '#43dde6',
        'pink-primary': '#fc5185',
        'gray-light': '#f0f0f0',
        'green-light': '#21e6c1',
      },
      backgroundColor: {
        'blue-primary': '#364f6b',
        'blue-light': '#43dde6',
        'pink-primary': '#fc5185',
        'gray-light': '#f0f0f0',
        'green-light': '#21e6c1',
      },
      borderColor: {
        'blue-primary': '#364f6b',
        'blue-light': '#43dde6',
        'pink-primary': '#fc5185',
        'gray-light': '#f0f0f0',
        'green-light': '#21e6c1',
      },
      maxHeight: {
        '0': '0px',
      },
      opacity: {
        '0': '0',
        '10': '.1',
        '20': '.2',
        '30': '.3',
        '40': '.4',
        '60': '.6',
        '70': '.7',
        '80': '.8',
        '90': '.9',
      },
      boxShadow: {
        'sm-soft': '2px 2px 5px 0px rgba(186, 190, 204, 0.8), -2px -2px 5px 0px rgba(255, 255, 255, 0.91)',
        'md-soft': '5px 5px 10px 0px rgba(186, 190, 204, 0.6), -5px -5px 10px 0px rgba(255, 255, 255, 0.91)',
        'lg-soft': '10px 10px 15px 0px rgba(186, 190, 204, 0.4), -10px -10px 20px 0px rgba(255, 255, 255, 0.91)',
        'inner-lg': 'inset 2px 2px 5px rgb(186, 192, 210, 0.8), inset -5px -5px 10px #ffffff',
        'inner-md': 'inset 1px 1px 2px rgb(186, 192, 210, 0.8), inset -2px -2px 4px #ffffff',
      }
    },
    inset: {
      '0': 0,
      auto: 'auto',
      '1/2': '50%',
      'full': '100%',
    },
    screens: {
      'xs': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  variants: {
    display: ['responsive', 'group-hover'],
    height: ['responsive', 'hover', 'group-hover', 'focus'],
    maxHeight: ['responsive', 'group-hover', 'hover'],
    opacity: ['responsive', 'group-hover', 'hover', 'disabled'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'disabled'],
    margin: ['responsive', 'first'],
    textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    margin: ['responsive', 'hover', 'focus', 'group-hover'],
    width: ['responsive', 'hover', 'focus'],
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    cursor: ['responsive', 'hover', 'focus', 'disabled'],
  },
  plugins: []
}
