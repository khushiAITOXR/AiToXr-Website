import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins as the default sans-serif font
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'gr-start': '#E45D25',
        'gr-end': '#F58E1E',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        gradientMove: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        gradientBackgroundMove: {
          '0%': { backgroundPosition: '100% 0%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out forwards',
        slideUp: 'slideUp 0.5s ease-in forwards',
        slideIn: 'slideIn 0.5s ease-in-out',
        slideOut: 'slideOut 0.5s ease-in-out',
        gradientMove: 'gradientMove 0.4s ease-in-out forwards',
        gradientBackgroundMove: 'gradientMove 0.5s ease-in-out forwards',
      },
      
    },
  },
  variants: {
    extend: {
      backgroundColor: ['before'],
      backgroundImage: ['before'],
      borderColor: ['before'],
      borderWidth: ['before'],
      inset: ['before'],
      padding: ['before'],
      position: ['before'],
      zIndex: ['before'],
      content: ['before'],
      // Add other utilities as needed
    },
  },
  plugins: [],
};
export default config;
