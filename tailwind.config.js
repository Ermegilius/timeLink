/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
      },
      keyframes: {
        'flicker-fadeout': {
        '0%, 100%': { opacity: '1' },
        '20%, 45%, 55%, 65%': { opacity: '0' },
        '40%, 50%, 60%, 70%': { opacity: '1' },
        '90%': { opacity: '0' },
        '100%': { opacity: '0' },
        },
        'move-up-slide-out': {
        '0%': { bottom: '0', opacity: '1', transform: 'translateX(0) translateY(0)' },
        '80%': { bottom: 'calc(100% - 10px)', opacity: '1', transform: 'translateX(0) translateY(0)' },
        '85%': { bottom: 'calc(100%)', opacity: '1', transform: 'translateX(0) translateY(0)' },
        '100%': { bottom: 'calc(100%)', opacity: '0', transform: 'translateX(-90%) translateY(-90px)' },
      },
        'flash': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'flicker-fadeout': 'flicker-fadeout 2s steps(10, end) 16s forwards',
        'move-up-slide-out': 'move-up-slide-out 3s ease-in-out 16.3s forwards, slide-out 1s ease-out 16.5s forwards',
        'flash': 'flash 0.25s step-start 2',
      },
    },  
    fontFamily: {
      'body': ["Righteous", "Gill Sans", "Gill Sans MT", "Calibri", "Trebuchet MS",
        "sans-serif"],
      'typewriter': ["VT323", "Gill Sans", "Gill Sans MT", "Calibri", "Trebuchet MS",
        "sans-serif"]
    },
  },  

  plugins: [require("daisyui")],

  // light theme
  daisyui: {
    themes: ["light"],
  },
};