FROM ubuntu:22.04

LABEL version=1.0
LABEL description="This is an apache server"
LABEL vendor="Josué Alarcón"

WORKDIR /var/www/html

RUN apt-get update -y && apt install apache2 -y

VOLUME /var/www/html

COPY card .

RUN echo "$(whoami)" > ./user3.html

RUN useradd antonio

RUN chown antonio /var/www/html -R

#USER antonio

#RUN echo "$(whoami)" > ./user2.html

#USER root
CMD ["apache2ctl", "-DFOREGROUND"]
