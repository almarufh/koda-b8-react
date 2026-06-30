FROM nginx:alpine

copy dist/ /usr/share/nginx/html

copy nginx.conf /etc/nginx/conf.d/default.conf