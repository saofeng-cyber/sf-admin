/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: "class", // or 'media' or 'class'
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
