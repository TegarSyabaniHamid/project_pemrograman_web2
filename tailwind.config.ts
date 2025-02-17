import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    // colors:{
    //   "color1": "#AD49E1",
    //   "color2": "#000000",
    // },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "color1": "#AD49E1",
        "color2": "#800000",
      },
      spacing: {
        "5px" : "5px",
        "10px" : "10px",
        "15px" : "15px",
        "10%"  : "10%",
        "30%"  : "30%",
      },
    },
  },
  plugins: [require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "corporate"],
  },
};
export default config;