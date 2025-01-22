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

// command: npx tailwindcss -i ./css/input.css -o ./css/style.css
// docker run -d -p 90:80 --name portfolio -v ./:/usr/share/nginx/html:ro nginx:latest