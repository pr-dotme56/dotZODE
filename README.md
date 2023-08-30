# Code Generator

This is a simple svelte app that allows users to generate and decode code messages. With this app, you can encode text messages into a code format (ie. ASCII format) and also decode previously encoded messages back to their original text form.

## Installation and Usage

Clone this repository to your local machine:
```
git clone https://github.com/iamAbhinavPR/Code-Generator.git
```
Navigate to the project directory:
```
cd Code-Generator
```
Install dependencies using npm:
```
npm install
```
Install Tailwind CSS:
```
npx svelte-add@latest tailwindcss
npm i
```
Install Flowbite Svelte:
```
npm i -D flowbite-svelte
```
Update the tailwind.config.cjs file: 
```
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        }
      }
    }
  }
};

module.exports = config;
```
Start the development server:
```
npm run dev
```
## Contributing
Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository, make your changes, and sumbit a pull request.
