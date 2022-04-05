FROM ubuntu:22.04
RUN apt-get update -y && apt install apache2 -y

ADD seguro /var/www/html
CMD ["apache2ctl", "-DFOREGROUND"]
