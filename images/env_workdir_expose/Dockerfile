FROM ubuntu:22.04
RUN apt-get update -y && apt-get install apache2 -y

WORKDIR /var/www/html

ENV contenido probando

COPY seguro .

RUN echo "$contenido" > ./prueba.html

CMD ["apache2ctl","-DFOREGROUND"]
