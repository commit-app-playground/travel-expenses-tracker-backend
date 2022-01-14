# Creates (or updates) secrets object on the k8s cluster server
upsert-secrets:
	kubectl apply -n travel-expenses-tracker-backend -f secrets/secrets.yml
