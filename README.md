# serverless-aws-github-actions-deploy-example

Sample project for demonstrating automated deployment of a serverless application with the Serverless Framework and GitHub Actions.

The GHA workflow will run when code is pushed to `master`.

I wrote a post about this example code base: https://www.sorenandersen.com/automating-test-and-deployment-of-serverless-projects-with-github-actions/

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

- https://www.sorenandersen.com/automating-test-and-deployment-of-serverless-projects-with-github-actions/ - Post about this example code base
- https://rajanpanchal.net/automate-application-deployment-using-github-actions/ - Inspiring post
- https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions - Workflow syntax for GitHub Actions
