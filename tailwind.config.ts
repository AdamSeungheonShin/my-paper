import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yzy: {
          "100": "#e7e2bf",
          "200": "#e5dab7",
          "300": "#e8ca93",
          "400": "#c8c9ac",
          "500": "#928b61",
          "600": "#9a8262",
          black: "#090808",
        },
      },
    },
  },
  presets: [require("tailwindcss-preset-px-to-rem")],
}

export default config
