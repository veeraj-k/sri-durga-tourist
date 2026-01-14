# Docker Deployment Guide

This guide explains how to deploy the Incredible India Tours travel agency website using Docker.

## 🐳 Docker Setup

### Prerequisites
- Docker installed on your system
- Docker Compose (optional, but recommended)

### Files Created
- `Dockerfile` - Multi-stage build configuration
- `nginx.conf` - Optimized Nginx configuration
- `.dockerignore` - Files to exclude from Docker build
- `docker-compose.yml` - Complete deployment configuration

## 🚀 Deployment Options

### Option 1: Using Docker Compose (Recommended)

1. **Build and run with Docker Compose:**
```bash
# Build and start the container
docker-compose up --build -d

# View logs
docker-compose logs -f travel-agency

# Stop the container
docker-compose down
```

2. **Access the application:**
- Open your browser and navigate to `http://localhost`
- The app will be served on port 80

### Option 2: Using Docker Commands

1. **Build the Docker image:**
```bash
docker build -t incredible-india-tours .
```

2. **Run the container:**
```bash
docker run -d \
  --name incredible-india-tours \
  -p 80:80 \
  --restart unless-stopped \
  incredible-india-tours
```

3. **Access the application:**
- Navigate to `http://localhost` in your browser

## 🌐 Production Deployment

### Cloud Deployment

#### AWS ECS/Fargate
```bash
# Build and push to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com

docker build -t incredible-india-tours .
docker tag incredible-india-tours:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/incredible-india-tours:latest
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/incredible-india-tours:latest
```

#### Google Cloud Run
```bash
# Build and push to GCR
gcloud builds submit --tag gcr.io/PROJECT-ID/incredible-india-tours

# Deploy to Cloud Run
gcloud run deploy --image gcr.io/PROJECT-ID/incredible-india-tours --platform managed
```

#### Azure Container Instances
```bash
# Build and push to ACR
az acr build --registry myregistry --image incredible-india-tours .

# Deploy to ACI
az container create \
  --resource-group myResourceGroup \
  --name incredible-india-tours \
  --image myregistry.azurecr.io/incredible-india-tours:latest \
  --dns-name-label my-app
```

### VPS Deployment

1. **Install Docker on your VPS:**
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

2. **Deploy using Docker Compose:**
```bash
git clone <your-repo>
cd travel-agency
docker-compose up --build -d
```

3. **Set up reverse proxy (optional):**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 🔧 Configuration

### Environment Variables
You can customize the application by setting environment variables:

```yaml
# docker-compose.yml
environment:
  - NODE_ENV=production
  - REACT_APP_API_URL=https://api.yourdomain.com
  - REACT_APP_GOOGLE_ANALYTICS=GA_MEASUREMENT_ID
```

### Custom Nginx Configuration
The `nginx.conf` file includes:
- Gzip compression
- Security headers
- Static asset caching
- React Router support
- Health checks

### SSL/HTTPS Setup
For production with HTTPS:

1. **Using Let's Encrypt:**
```bash
# Add to docker-compose.yml
certbot:
  image: certbot/certbot
  volumes:
    - ./certbot/conf:/etc/letsencrypt
    - ./certbot/www:/var/www/certbot
```

2. **Update nginx.conf for SSL:**
```nginx
server {
    listen 443 ssl;
    server_name yourdomain.com;
    
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
}
```

## 📊 Monitoring

### Health Checks
The container includes built-in health checks:
```bash
# Check container health
docker ps

# View health logs
docker inspect incredible-india-tours | grep Health -A 10
```

### Logs
```bash
# View Nginx logs
docker-compose exec travel-agency tail -f /var/log/nginx/access.log
docker-compose exec travel-agency tail -f /var/log/nginx/error.log
```

## 🔄 Updates

### Updating the Application
```bash
# Pull latest changes
git pull

# Rebuild and restart
docker-compose up --build -d --force-recreate
```

### Rolling Updates
```bash
# Zero-downtime deployment
docker-compose up --build -d --no-deps travel-agency
```

## 🛠️ Troubleshooting

### Common Issues

1. **Port conflicts:**
```bash
# Check what's using port 80
sudo netstat -tulpn | grep :80

# Use different port
docker run -p 8080:80 incredible-india-tours
```

2. **Build failures:**
```bash
# Clear Docker cache
docker system prune -a

# Rebuild without cache
docker-compose build --no-cache
```

3. **Permission issues:**
```bash
# Fix file permissions
sudo chown -R $USER:$USER .
```

### Performance Optimization
- Use CDN for static assets
- Enable browser caching
- Optimize images
- Use HTTP/2

## 📈 Scaling

### Horizontal Scaling
```yaml
# docker-compose.yml
services:
  travel-agency:
    build: .
    deploy:
      replicas: 3
    ports:
      - "80-82:80"
```

### Load Balancing
```nginx
upstream travel-agency {
    server travel-agency-1:80;
    server travel-agency-2:80;
    server travel-agency-3:80;
}
```

## 🔒 Security

- Security headers configured in nginx.conf
- Regular security updates
- Network isolation
- Read-only filesystem where possible

## 📞 Support

For deployment issues:
1. Check Docker logs: `docker-compose logs`
2. Verify port availability
3. Ensure sufficient system resources
4. Check firewall settings

---

**Ready for production deployment! 🚀**
