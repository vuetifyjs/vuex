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

##### returns


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

##### returns

<hr>

### checkActionCode

##### returns

<hr>

### confirmPasswordReset

Resets user's password given a code sent from [sendPasswordResetEmail](/api/actions.html#sendpasswordresetemail)

##### params
`{ code: string, newPassword: string }`

##### returns
Void

<hr>

### createUserAndRetrieveDataWithEmailAndPassword

##### returns

<hr>

### createUserWithEmailAndPassword

Registers a user with custom email and password.

##### params
`{email: string, password: string}`

##### returns
Firebase Auth.User Object

<hr>

### fetchProvidersForEmail

##### returns

<hr>

### fetchSignInMethodsForEmail

##### returns

<hr>

### getRedirectResult

##### returns

<hr>

### isSignInWithEmailLink

##### returns

<hr>

### onAuthStateChanged

##### returns

<hr>

### onIdTokenChanged

##### returns

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

##### returns

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

##### returns

<hr>

### verifyPasswordResetCode

##### returns
