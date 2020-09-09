# serverless-aws-github-actions-deploy-example

Sample project for demonstrating automated deployment of a serverless application with the Serverless Framework and GitHub Actions.

The GHA workflow will run when code is pushed to `master`.

## Geting started

```
# Install dependencies
npm install

# Deploy the stack
npm run sls -- deploy

# Invoke endpoint
curl -i https://something.execute-api.us-east-1.amazonaws.com/
```

## References

- https://rajanpanchal.net/automate-application-deployment-using-github-actions/
