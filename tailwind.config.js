/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
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
            },
        },
    },
    plugins: [],
};
