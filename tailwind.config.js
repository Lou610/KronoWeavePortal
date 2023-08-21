/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js", // add this line
  ],
  theme: {
    colors: {
      // Dark theme colors
      "dark-primary": "#ff500b",
      "dark-secondary-bg": "#424242",
      "dark-theme": "#424242",
      "dark-header-color": "#424242",
      "dark-route-link-active": "#ff500b",
      "dark-link-color": "#fff",
      "dark-border-color": "#1cd61c",
    },
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")({
      charts: true,
    }),
  ],
};
