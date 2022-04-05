FROM ubuntu:22.04
#Set timezone
ENV timezone America/Guayaquil


RUN ln -snf /usr/share/zoneinfo/$timezone /etc/localtime && echo $timezone > /etc/timezone \
&& apt update -y && DEBIAN_FRONTEND=noninteractive && apt install apache2 -y \
&& apt install php php-cli php-common openssl tzdata systemctl -y  \
&& a2enmod ssl 

RUN systemctl restart apache2

COPY webfiles /var/www/html
RUN echo "<?php echo phpinfo(); ?>"  > /var/www/html/hola.php

COPY apache.crt /etc/ssl/certs/apache.crt
COPY apache.key /etc/ssl/private/apache.key
COPY localhost.conf /etc/apache2/sites-available/localhost.conf

RUN a2ensite localhost.conf \
&& systemctl reload apache2

RUN systemctl restart apache2

EXPOSE 443

#CMD apache2ctl -DFOREGROUND
CMD ["apache2ctl", "-DFOREGROUND"]




