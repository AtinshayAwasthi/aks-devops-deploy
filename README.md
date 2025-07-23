# 🚀 Creative AKS DevOps Project

A fullstack app (React + Node.js) deployed via CI/CD using Azure DevOps and Kubernetes (Minikube). This project simulates enterprise AKS deployments in a student-accessible way.

## 🔧 Tech Stack
- React, Node.js, Express
- Docker, Kubernetes (Minikube)
- Azure DevOps CI/CD Pipelines

## ✅ Features
- Dockerized fullstack app
- Automated build pipeline (simulated CI)
- Kubernetes deployment with `kubectl apply`
- Minikube local cluster as AKS simulation


## 👀 Demo
Run:
--bash
minikube start
./deploy-to-minikube.sh
minikube service creative-service
