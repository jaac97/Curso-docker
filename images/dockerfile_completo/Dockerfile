FROM nginx

RUN useradd Antonio

WORKDIR /usr/share/nginx/html

COPY music .

ENV archivo docker

EXPOSE 90

LABEL version=1

USER Antonio

RUN echo "Yo soy $(whoami)" > /tmp/yo.html

USER root

RUN cp /tmp/yo.html ./yo.html

VOLUME /var/log/nginx

CMD nginx -g 'daemon off;'
