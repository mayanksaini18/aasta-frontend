// tailwind.config.ts

import type { Config } from 'tailwindcss';

const config: Config = {
  // Ensure your content paths correctly point to all your components (like the .tsx files)
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // This links the CSS variable defined in layout.tsx to a Tailwind class
        baloo2: ['var(--font-baloo2)', 'sans-serif'], 
        roboto: ['var(--font-roboto)', 'sans-serif'],
        'dela-gothic-one': ['var(--font-dela-gothic-one)', 'cursive'],
        'just-another-hand': ['var(--font-just-another-hand)', 'cursive'],
      },
      // You may also need to extend colors or other styles for the design replication
    },
  },
  plugins: [],
};

export default config;