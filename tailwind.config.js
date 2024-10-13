/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      screens: {
        'sm': '480px',    // Small devices (default is 640px)
        'md': '768px',    // Medium devices (default is 768px)
        'lg': '1024px',   // Large devices (default is 1024px)
        'xl': '1280px',   // Extra large devices (default is 1280px)
        '2xl': '1536px',  // 2X large devices (default is 1536px)
      },
      content: {
        empty: "''",
      },
      borderRadius: {
        'custom-top-left': '50% 100% 0 0',
        'custom-top-right': '50% 100% 0 0',
      },
      spacing: {
        '85p': '85%',
      },
      backgroundImage: {
        'black-teal-gradient': 'linear-gradient(to right, #000000, #00e6e6)',
      },
      boxShadow: {
        'glow': '0 0 10px rgba(0, 230, 230, 0.8), 0 0 15px rgba(0, 230, 230, 0.6)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top, #09203f 0%, #537895 100%)',
      },
      keyframes: {
        aboutSpinner: {
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)'},
        },
        animateBlob: {
          '0%, 100%': {
            'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '50%': {
            'border-radius': '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
        },
      },
      animation: {
        aboutspinner: 'aboutSpinner 8s linear infinite',
        animateBlob: 'animateBlob 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

