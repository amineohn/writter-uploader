/**
 * TailwindCSS Configuration
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
    mode: "jit",
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "", // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
