echo "🔁 Switching to Minikube Docker env..."
eval $(minikube docker-env)

echo "🐳 Rebuilding Docker image..."
docker build -t aks-app .

echo "📦 Applying Kubernetes manifests..."
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

echo "✅ Deployed to Minikube successfully!"
