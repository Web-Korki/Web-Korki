release: python manage.py migrate
web: python manage.py collectstatic --noinput
web: gunicorn backend.wsgi --log-file -