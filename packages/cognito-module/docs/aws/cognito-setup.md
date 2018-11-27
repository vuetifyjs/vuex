# Configuring AWS Cognito (Part 1)

## Setup User Pool

1. Log in to AWS console and select Cognito

2. Select "Manage User Pools"

![Cognito Welcome Screen](/welcome-screen.png)

3. Select "Create a user pool" in the top right corner.

![User Pool Landing](/user-pool-landing.png)

4. Create a name for your user pool, and select "Review defaults".

![Creation Wizard](/create-wizard.png)

5. Select App Clients in the left side bar and click "Add an App Client"

![App Clients](/clients-page.png)

### ⚠️ Important!
Uncheck "Generate client secret". This will cause problems in your app otherwise.
##### If you create a client with a secret, you will need to recreate the app client.
![Uncheck Seret](/client-wizard.png)

6. Give your client a name and uncheck "Generate client secret"

7. Review and create your user pool!

[On to Creating a Federated Identity Pool!](/aws/federated-id-setup.md)
