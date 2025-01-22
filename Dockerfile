# npx tailwindcss -i ./css/input.css -o ./css/style.css
# Use the official Nginx image
FROM nginx:latest

# Copy your portfolio files to the Nginx web root
COPY . /usr/share/nginx/html

# Expose port 90 to access the site
EXPOSE 90
