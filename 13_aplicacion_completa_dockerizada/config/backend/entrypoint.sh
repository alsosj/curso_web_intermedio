#!/usr/bin/env bash

python manage.py collectstatic --noinput

until python manage.py makemigrations
do
    sleep 2
done

python manage.py migrate --noinput

gunicorn miweb.wsgi:application --workers 2 --bind 0.0.0.0:8000

