# Docker Commands

Tutorial followed: https://learn.microsoft.com/en-us/azure/app-service/tutorial-custom-container?tabs=azure-cli&pivots=container-linux

## To build docker image

docker build -t dhamika-client .

## To run docker container

docker run -p 3000:3000 dhamika-client

To run in an interative shell:

docker run -it -p 3000:3000 dhamika-client

## Stop running docker container

To see list of runnign docker containers: docker ps
To stop use:
docker stop container-id
OR
docker stop container-name

# Get credentials of acr using

az acr credential show --resource-group <resource-group-name> --name <registry-name>
az acr credential show --resource-group dhamika --name dhamika

## Push docker image to azure container registry

### Use the docker login command to sign in to the container registry:

docker login dhamika.azurecr.io --username <registry-username>
docker login dhamika.azurecr.io --username dhamika

### When the sign-in is successful, tag your local Docker image to the registry:

docker tag <image-name> <registry-name>.azurecr.io/<image-name>:latest
docker tag dhamika-client dhamika.azurecr.io/dhamika-client:latest

### Use the docker push command to push the image to the registry:

docker push <registry-name>.azurecr.io/<image-name>:latest
docker push dhamika.azurecr.io/dhamika-client:latest

## Create a managed identity in the resource group

App Service can either use a default managed identity or a user-assigned managed identity to authenticate with a container registry. In this case, we'll use a user-assigned managed identity.

az identity create --name <id-name> --resource-group <resource-group-name>
az identity create --name ajhavery --resource-group dhamika

## Authorize the managed identity to pull image from container registry:

The managed identity we created doesn't have authorization to pull from the container registry yet. In this step, you enable the authorization.

### Retrieve the principal ID for the managed identity:

principalId=$(az identity show --resource-group <resource-group-name> --name <mamaged-id-name> --query principalId --output tsv)
principalId=$(az identity show --resource-group dhamika --name ajhavery --query principalId --output tsv)

### Retrieve the resource ID for the container registry:

registryId=$(az acr show --resource-group <resource-group-name> --name <registry-name> --query id --output tsv)
registryId=$(az acr show --resource-group dhamika --name dhamika --query id --output tsv)

### Grant the managed identity permission to access the container registry:

az role assignment create --assignee $principalId --scope $registryId --role "AcrPull"

# Create the WebApp

## Create an App Service plan using the az appservice plan create command:

az appservice plan create --name <app-service-plan-name> --resource-group <resource-group-name> --is-linux
az appservice plan create --name dhamikaAppServicePlan --resource-group dhamika --is-linux

## Create the webapp

az webapp create --resource-group <resource-group-name> --plan <app-service-plan-name> --name <app-name> --deployment-container-image-name <registry-name>.azurecr.io/<image-name>:latest

az webapp create --resource-group dhamika --plan dhamikaAppServicePlan --name dhamika-client --deployment-container-image-name dhamika.azurecr.io/dhamika-client:latest

## To retrieve the web app's container settings at any time:

az webapp config container show --name <app-name> --resource-group <resource-group-name>
az webapp config container show --name dhamika-client --resource-group dhamika

# Configure the webapp

## Use az webapp config appsettings set to set the WEBSITES_PORT environment variable as expected by the app code:

az webapp config appsettings set --resource-group <resource-group-name> --name <app-name> --settings WEBSITES_PORT=<PORT>

az webapp config appsettings set --resource-group dhamika --name dhamika-client --settings WEBSITES_PORT=3000

## Enable the user-assigned managed identity in the web app with the az webapp identity assign command:

id=$(az identity show --resource-group <resource-group-name> --name <managed-id-name> --query id --output tsv)
az webapp identity assign --resource-group <resource-group-name> --name <app-name> --identities $id

id=$(az identity show --resource-group dhamika --name ajhavery --query id --output tsv)
az webapp identity assign --resource-group dhamika --name dhamika-client --identities $id

## Configure your app to pull from Azure Container Registry by using managed identities.

appConfig=$(az webapp config show --resource-group <resource-group-name> --name <app-name> --query id --output tsv)
az resource update --ids $appConfig --set properties.acrUseManagedIdentityCreds=True

appConfig=$(az webapp config show --resource-group dhamika --name dhamika-client --query id --output tsv)
az resource update --ids $appConfig --set properties.acrUseManagedIdentityCreds=True

## Set the client ID your web app uses to pull from Azure Container Registry. This step isn't needed if you use the system-assigned managed identity.

clientId=$(az identity show --resource-group <resource-group-name> --name <managed-id-name> --query clientId --output tsv)
az resource update --ids $appConfig --set properties.AcrUserManagedIdentityID=$clientId

clientId=$(az identity show --resource-group dhamika --name ajhavery --query clientId --output tsv)
az resource update --ids $appConfig --set properties.AcrUserManagedIdentityID=$clientId

## Enable CI/CD in App Service.

cicdUrl=$(az webapp deployment container config --enable-cd true --name <app-name> --resource-group <resource-group-name> --query CI_CD_URL --output tsv)

cicdUrl=$(az webapp deployment container config --enable-cd true --name dhamika-client --resource-group dhamika --query CI_CD_URL --output tsv)

CI_CD_URL is a URL that App Service generates for you. Your registry should use this URL to notify App Service that an image push occurred. It doesn't actually create the webhook for you.

## Create a webhook in your container registry using the CI_CD_URL you got from the last step.

az acr webhook create --name <CD-service-name> --registry <registry-name> --uri $cicdUrl --actions push --scope <image-name>:latest

az acr webhook create --name dhamikaAppServiceCD --registry dhamika --uri $cicdUrl --actions push --scope dhamika-client:latest

## To test if your webhook is configured properly, ping the webhook, and see if you get a 200 OK response.

eventId=$(az acr webhook ping --name <CD-service-name> --registry <registry-name> --query id --output tsv)
az acr webhook list-events --name <CD-service-name> --registry <registry-name> --query "[?id=='$eventId'].eventResponseMessage"

eventId=$(az acr webhook ping --name dhamikaAppServiceCD --registry dhamika --query id --output tsv)
az acr webhook list-events --name dhamikaAppServiceCD --registry dhamika --query "[?id=='$eventId'].eventResponseMessage"

# See container logs

## Turn on container logging:

az webapp log config --name <app-name> --resource-group <resource-group-name> --docker-container-logging filesystem
az webapp log config --name dhamika-client --resource-group dhamika --docker-container-logging filesystem

## Enable the log stream

az webapp log tail --name <app-name> --resource-group <resource-group-name>
az webapp log tail --name dhamika-client --resource-group dhamika
