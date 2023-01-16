

FROM python:3.8.9

COPY . /app
WORKDIR /app

RUN python3 -m venv /opt/venv

COPY requirements.txt .
RUN python3 -m venv /opt/venv
RUN pip install -r requirements.txt

RUN python3 manage.py runserver