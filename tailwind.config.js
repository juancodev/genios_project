/** @type {import('tailwindcss').Config} */
import formsPlugin from "@tailwindcss/forms";
import flowbite from "flowbite-react/tailwind"

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#ecfeff",
          "100": "#cffafe",
          "200": "#a5f3fc",
          "300": "#67e8f9",
          "400": "#22d3ee",
          "500": "#06b6d4",
          "600": "#0891b2",
          "700": "#0e7490",
          "800": "#155e75",
          "900": "#164e63",
          "950": "#083344"
        }
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0, marginLeft: '3em'},
          '100%': {opacity: 1}
        },
        fade_button: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1
          }
        }
      },
      animation: {
        fade: 'fade 4s',
        fade_button: 'fade_button 4s'
      }
    },
    fontFamily: {
      'body': [
        'Montserrat',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      'sans': [
        'Montserrat',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    }
  },
  plugins: [
    formsPlugin,
    flowbite.plugin()
  ],
}