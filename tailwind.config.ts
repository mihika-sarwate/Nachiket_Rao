import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00137a',
      },
      fontFamily: {
        heading: ['Magnolia Script', 'cursive'],
        body: ['Kaisei Decol', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
