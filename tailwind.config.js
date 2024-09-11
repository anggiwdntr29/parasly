const { addDynamicIconSelectors } = require("@iconify/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.html", // This will capture HTML files inside 'src'
        "./index.html", // Specifically include the 'index.html' file in the root
        "./src/**/*.js", // Capture JS files inside 'src'
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                primary: "#FFFFFF",
                secondary: "#27A3AB",
                accent: "#D0FE68",
                text: "#000000",
                gray: "#F0F0F0",
                text_gray: "#888888",
                green: "#00BE1E",
                red: "#D60000",
            },
        },
    },
    plugins: [addDynamicIconSelectors()],
};
