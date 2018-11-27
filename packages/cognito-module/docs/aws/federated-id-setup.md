# Configuring AWS Cognito (Part 2)

## Setup a Federated Identity Pool

1. Click "Federated Identities" from the User Pool landing page.

![User Pool Landing](/new-pool-created.png)

2. Select "Create new Identity Pool"

![Fed Id Landing](/fed-landing.png)

3. Give your Id Pool a name, and add your (newly) created User Pool ID and App Client Id

![Fed Id Creator](/create-fed-id.png)

##### These IDs are found on the User Pool setup under "App Client Settings" and the "General Settings"

4. Create Pool at the bottom right!

5. Grant roles access to your Federated ID Pool and click "Allow"

![Fed Id Perms](/fed-permissions.png)
