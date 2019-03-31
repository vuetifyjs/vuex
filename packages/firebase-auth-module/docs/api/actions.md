# Actions

## Actions on the Firebase User object
See Firebase User Reference for more details: [Firebase User Reference](https://firebase.google.com/docs/reference/js/firebase.User)

### resendVerification

Sends email verification to logged in user.
Calls `sendEmailVerification` on `auth.currentUser`.

##### returns
Void

<hr>

### reloadUser

Reloads the firebase user object, and refreshes any values updated externally since last load. (e.g. user verified email)

##### returns
Void

<hr>

### updateProfile

##### params
`{ photoURL: string, displayName: string }`

Updates users profile information, namely displayName and photoURL.

##### returns
Void


<hr>

### getIdToken

##### returns


<hr>

### getIdTokenResult

##### returns


<hr>

### toJSON
Serializes the current user
##### returns
JSON of the current user

<hr>

### updateEmail

##### returns


<hr>

### updatePassword

##### returns


<hr>

### updatePhoneNumber

##### returns




## Actions on the Firebase Auth object
See Firebase Reference for more details: [Firebase Reference](https://firebase.google.com/docs/reference/js/firebase.auth.Auth)

<hr>

### applyActionCode
Applies a verification code sent to the user by email or other out-of-band mechanism.

##### params
code e.g. `12345`

##### returns
Empty Promise

<hr>

### checkActionCode
Checks a verification code sent to the user by email or other out-of-band mechanism.

##### params
code e.g. `12345`


##### returns
Returns metadata about the code.
<hr>

### confirmPasswordReset

Resets user's password given a code sent from [sendPasswordResetEmail](/api/actions.html#sendpasswordresetemail)

##### params
`{ code: string, newPassword: string }`

##### returns
Void


<hr>

### createUserWithEmailAndPassword

Registers a user with custom email and password.

##### params
`{email: string, password: string}`

##### returns
Firebase Auth.User Object

<hr>

### fetchSignInMethodsForEmail
See: [Firebase Docs](https://firebase.google.com/docs/reference/js/firebase.auth.Auth#fetchsigninmethodsforemail)
<br/>
Gets the list of possible sign in methods for the given email address. This is useful to differentiate methods of sign-in for the same provider, eg. `EmailAuthProvider` which has 2 methods of sign-in, email/password and email/link.

##### returns

<hr>

### getRedirectResult
Returns a UserCredential from the redirect-based sign-in flow.
##### returns
[UserCredential](https://firebase.google.com/docs/reference/js/firebase.auth.html#usercredential)
<hr>

### isSignInWithEmailLink
Checks if an incoming link is a sign-in with email link.

##### params
`emailLink`: string

##### returns
Boolean
<hr>

### sendPasswordResetEmail

Sends user an email containing a code to reset their password.

##### params
`"email@email.com"`

##### returns
Void

<hr>

### sendSignInLinkToEmail

##### returns

<hr>

### setPersistence
Changes the current type of persistence on the current Auth instance for the currently saved Auth session and applies this type of persistence for future sign-in requests, including sign-in with redirect requests. This will return a promise that will resolve once the state finishes copying from one type of storage to the other. Calling a sign-in method after changing persistence will wait for that persistence change to complete before applying it on the new Auth state.

This makes it easy for a user signing in to specify whether their session should be remembered or not. It also makes it easier to never persist the Auth state for applications that are shared by other users or have sensitive data.

##### params
`local` or `session` or `none`
<br>
**Default**: `local`

##### returns
null

<hr>

### signInAndRetrieveDataWithCredential

##### returns

<hr>

### signInAndRetrieveDataWithCustomToken

##### returns

<hr>

### signInAndRetrieveDataWithEmailAndPassword

##### returns

<hr>

### signInAnonymously

##### returns

<hr>

### signInAnonymouslyAndRetrieveData

##### returns

<hr>

### signInWithCredential

##### returns

<hr>

### signInWithCustomToken

##### returns

<hr>

### signInWithEmailAndPassword

Logs in a user with email and password sign in method

#### params
`{ email: string, password: string}`

##### returns
[Firebase Auth User Credential](https://firebase.google.com/docs/reference/js/firebase.auth#.UserCredential)

<hr>

### signInWithEmailLink

##### returns

<hr>

### signInWithPhoneNumber

##### returns

<hr>

### signInWithPopup

##### returns

<hr>

### signInWithRedirect

##### returns

<hr>

### signOut

Logs out the user

##### returns
Void

<hr>

### updateCurrentUser

##### returns

<hr>

### useDeviceLanguage
Sets the current language to the default device/browser preference.
##### returns
null
<hr>

### verifyPasswordResetCode
Checks a password reset code sent to the user by email or other out-of-band mechanism.

##### params
`"code"`:string

##### returns
"user's email": string if valid,