FROM python:3.11-slim

# Установка клиента PostgreSQL (для pg_isready)
RUN apt-get update && \
    apt-get install -y --no-install-recommends postgresql-client && \
    rm -rf /var/lib/apt/lists/*

# Рабочая директория
WORKDIR /app

# Копируем зависимости и устанавливаем их
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Копируем весь код
COPY . .

# Запуск: ожидание БД → миграции → запуск приложения
CMD ["sh", "-c", "until pg_isready -h \"$DB_HOST\" -p \"$DB_PORT\" -U \"$DB_USER\"; do echo 'Waiting for database...'; sleep 2; done && alembic upgrade head && uvicorn app.main:app --host 0.0.0.0 --port 8000"]
