# React App with GitHub Actions CI/CD

[![Deploy to GitHub Pages](https://github.com/Sam-Maqsoudi/ssd3900_sample_ci_cd/actions/workflows/deploy.yml/badge.svg)](https://github.com/Sam-Maqsoudi/ssd3900_sample_ci_cd/actions/workflows/deploy.yml)

## Project Description

This project demonstrates a complete CI/CD pipeline for a React application using Docker for local development and GitHub Actions for automated deployment to GitHub Pages.

## Live Demo

[View the live demo](https://github.com/Sam-Maqsoudi/ssd3900_sample_ci_cd)

## Technology Stack

- React
- Vite
- Docker
- GitHub Actions
- GitHub Pages

## Local Development

### Prerequisites

- Docker and Docker Compose
- Git

### Setup and Run

1. Clone the repository

```bash
git clone https://github.com/Sam-Maqsoudi/ssd3900_sample_ci_cd.git
cd ssd3900_sample_ci_cd
```

2. Start the Docker development environment

```bash
docker-compose up
```

3. Access the development server at [http://localhost:5173](http://localhost:5173)

## Development Environment

This project uses Docker for local development with the following features:

- **Hot Reload**: Changes to your code are immediately reflected in the browser
- **Volume Mounting**: Your local files are mounted into the container
- **Optimized Node.js Alpine Image**: Lightweight container for better performance

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

### CI/CD Pipeline

The CI/CD pipeline includes the following steps:

1. Checkout code
2. Setup Node.js environment with dependency caching
3. Install dependencies
4. Build the application
5. Deploy to GitHub Pages

### Manual Deployment (if needed)

If you want to deploy manually:

1. Build the application

```bash
npm run build
```

2. Deploy using the GitHub Pages environment

## Configuration Details

### GitHub Pages Configuration

- Base path: `/ssd3900_sample_ci_cd/` (configured in vite.config.js)
- Homepage URL: `https://github.com/Sam-Maqsoudi/ssd3900_sample_ci_cd`

### Docker Development Configuration

- Development server with hot reload capability
- Volume mounting for real-time code changes
- Port mapping from container port 5173 to host port 5173
- Health checks to verify the container is running properly
