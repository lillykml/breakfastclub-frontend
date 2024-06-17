module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'hero-img': "url('/img/hero-img.jpg')",
        }
      }
    },
    plugins: [],
  };