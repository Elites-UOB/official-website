import colors from "tailwindcss/colors";

export default {
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
  theme: {
    fontFamily: {
      sans: ["Tajawal"],
    },
    extend: {
      backgroundImage: { 
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))', 
        'gradient-radial-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))', 
        'gradient-radial-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))', 
        'gradient-radial-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))', 
        'gradient-radial-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))', 
        'gradient-radial-tl': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))', 
        'gradient-radial-tr': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))', 
        'gradient-radial-bl': 'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))', 
        'gradient-radial-br': 'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))', 
      }, 
      colors: {
        dark: "#0F0F11",
        light: "#F3F3F3",
        mid: "#B7B7B7",
      },
    },
  },
};
