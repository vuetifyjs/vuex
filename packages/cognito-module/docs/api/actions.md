# Actions

### `fetchSession()`
Fetches the latest information on the current user and session state.

```js
this.$store.dispatch('cognito/fetchSession')
```

### `fetchJwtToken()`

Fetches the current jwtToken associated with the current user and session when available.

```js
this.$store.dispatch('cognito/fetchJwtToken')
```

### `signInUser({ username: String, password: String })`
Signs in an already created user and sets user obj in localstorage with `USER` key

### `registerUser({ username: String, password: String, attributes: Object })`
Creates a new user and sets user obj in localstorage with `USER` key
* `attributes` obj should be attributes required by User Pool
```js
{
    email: 'test@test.com',
    phone_number: '+13335557777' // E.164 number convention
}
```
###### [See AWS Amplify Docs for more info](https://aws-amplify.github.io/amplify-js/media/authentication_guide#sign-up)

### `confirmUser({username: String, code: String})`
MFA verify user during registration. Used for custom registration flows.

### `resendConfirmation({ username: String })`
Resends confirmation email/code

### `forgotPassword({ username: String })`
Begins forgot password flow, and sends reset code to user

### `changePassword({username:String, code:String, newPassword: String})`
Changes `username`s password to `newPassword` given the `code` sent by `forgotPassword`

### `signOut()`
Signs out user and removes `USER` key from localstorage
