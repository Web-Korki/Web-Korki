release: python backend/manage.py migrate
web: python backend/manage.py collectstatic --noinput
web: gunicorn backend/backend.wsgi --log-file -