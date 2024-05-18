const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
      "./resources/js/**/*.jsx",
      "./resources/js/**/*.tsx",
      'node_modules/flowbite-react/lib/esm/**/*.js',
      flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
      flowbite.plugin()
  ],
}

