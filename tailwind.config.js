/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// npx tailwindcss -i ./css/input.css -o ./css/style.css
// docker run -d -p 90:80 --name portfolio -v ./:/usr/share/nginx/html:ro --restart unless-stopped nginx:alpine