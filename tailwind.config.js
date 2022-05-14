const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu","ui-sans-serif", "system-ui"],
        mono: ["Source Sans Pro", "ui-monospace"],
        'source': ['Source Sans Pro', 'sans-serif'],
      },
      'colors': {
        'primary': '#FA9600',
        'secondary': '#020A39',
        'paragraph': '#999999',
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/hero.png)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat"
        },
        ".shadow-skill": {
          "box-shadow": "3px 3px 10px #999999"
        }
      };

      addUtilities(utilities);
    })
  ],
}
