release: python manage.py migrate
web: python backend/manage.py collectstatic --noinput
web: gunicorn backend.wsgi --log-file -