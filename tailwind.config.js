const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
    './*.md',
  ],
  theme: {
    fontSize: {
      sm: "0.8125rem", // 13px
      base: "1rem", // 16px
      lg: "1.25rem", // 20px
      xl: "1.5rem", // 24px
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1600px",
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        75: "18.75rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}