module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        base: ["16px", "17px"],
      },
      fontFamily: {
        sans: ["AlmoniNeue", "sans-serif"],
      },
      boxShadow: {
        gray: "0px 1px 4px 0px rgba(0, 0, 0, 0.12)",
      },
      borderWidth: {
        DEFAULT: "1px",
        3: "3px",
      },
      width: {
        275: "275px",
      },
      colors: {
        primary: {
          light: "#FFEBCD",
          DEFAULT: "#D78201",
          dark: "#E89923",
        },
        secondary: {
          light: "#FBBF24",
          DEFAULT: "#F59E0B",
          dark: "#B45309",
        },
        customColor: {
          gray: "#E7E7E7",
          textgrey: "#637381",
          dark: "#202124",
          graylight: "#f8f6f4",
          graydark: "#CBCBCB",
          red: "#FF705C",
          redlight: "#FFEEEB",
        },
      },
    },
  },
  plugins: [],
};
