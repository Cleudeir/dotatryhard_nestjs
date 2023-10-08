FROM nginx:latest
LABEL Author="Gustavo Soares" 

EXPOSE 80
ENTRYPOINT [ "nginx" ]

CMD [ "-g", "daemon off;" ]