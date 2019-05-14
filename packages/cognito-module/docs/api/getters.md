# Getters

`isLoggedIn`: Getter that returns a `Boolean` indicating logged in state

```js
this.$store.getters['cognito/isLoggedIn']
```

`session`: Getter that returns an `Object` containing the current Cognito session information in store.

```js
this.$store.getters['cognito/session']
```

`userSub`: Getter that returns a `String` which represents the current Cognito User Sub or ID in a similar format as the following: `2493bf51-ab2b-4a85-cd15-76b3a547d626`

```js
this.$store.getters['cognito/userSub']
```

`username`: Getter that returns a `String` which contains the 'username' of a register created using the `registerUser` action, this getter is to be used especially when dealing with Confirming user accounts via MFA with the following actions: `confirmUser` & `resendConfirmation`.

The username returned comes in a similar format: `myuser@mydomain.com`

```js
this.$store.getters['cognito/username']
```

Example of use 1: 

```js
this.$store
    .dispatch('cognito/confirmUser', {
        username: this.$store.getters['cognito/username'],
        code: this.MFACode
    })
```

Example of use 2:

```js
this.$store
    .dispatch('cognito/resendConfirmation', {
        username: this.$store.getters['cognito/username']
    })
```

`userAttributes`: Getter that returns an `Object` which contains all the user attributes from the current session.

```js
this.$store.getters['cognito/userAttributes']
```

Example return:

```json
{
    "sub": "2493bf51-ab2b-4a85-cd15-76b3a547d626",
    "email_verified": false,
    "profile": "This a test",
    "name": "My name",
    "phone_number_verified": true,
    "phone_number": "+011234567890",
    "email": "myuser@mydomain.com",
    "picture": "https://s3.amazonaws.com/someurl/somepicture.png"
}
```

`userGroups`: Getter that returns an `Array` which contains all the groups that the current user in session belongs to. (This is used for authorizing users based on an assigned group/role)

```js
this.$store.getters['cognito/userGroups']
```

Example return:

```json
["AdminGroup"]
```