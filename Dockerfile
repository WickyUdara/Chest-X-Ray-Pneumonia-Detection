# Build React frontend
FROM node:18 AS frontend-builder
WORKDIR /frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend ./
RUN npm run build

# Build FastAPI backend
FROM python:3.11-slim AS backend-builder
WORKDIR /app
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY backend /app/backend
COPY backend/models /app/backend/models

# Final image with Nginx and Supervisor
FROM nginx:alpine
WORKDIR /app

# Copy React build output to web root
COPY --from=frontend-builder /frontend/build /usr/share/nginx/html

# Copy FastAPI backend code and model
COPY --from=backend-builder /app/backend /app/backend

# Copy custom Nginx config and Supervisor config
COPY nginx.conf /etc/nginx/nginx.conf
RUN apk add --no-cache supervisor
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 7860  
# Hugging Face Spaces expects this port

CMD ["/usr/bin/supervisord"]
