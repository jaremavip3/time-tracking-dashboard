/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-bg-blue": "var(--clr-bg-blue)",
        "clr-work-light-red": "var(--clr-work-light-red)",
        "clr-play-soft-blue": "var(--clr-play-soft-blue)",
        "clr-study-light-red": "var(--clr-study-light-red)",
        "clr-exercise-lime-green": "var(--clr-exercise-lime-green)",
        "clr-social-violet": "var(--clr-social-violet)",
        "clr-self-care-light-orange": "var(--clr-self-care-light-orange)",
        "clr-neutral-very-dark-blue": "var(--clr-neutral-very-dark-blue)",
        "clr-neutral-dark-blue": "var(--clr-neutral-dark-blue)",
        "clr-neutral-desaturated-blue": "var(--clr-neutral-desaturated-blue)",
        "clr-neutral-pale-blue": "var(--clr-neutral-pale-blue)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
