# Install

Vuex module to interface with Google Firebase Auth

Install:
```bash
yarn add firebase
yarn add @vuetify/vuex-firebase-auth-module
```

Import into your project's entry point (**src/main.js** in most Vue projects)

```js
import attachFirebaseAuthModule from '@vuetify/vuex-firebase-auth-module'
```

Attach firebase auth module to the store
```js
// config from firebase setup
import firebase from 'firebase/app'
import 'firebase/auth'
```

```js
// import your store
import store from './store'
```

```js
// config from firebase setup
const config = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain',
  databaseURL: 'your-database-url',
  projectId: 'your-project-id',
  storageBucket: 'your-storage-bucket',
  messagingSenderId: 'your-sender-id',
}

const firebaseApp = firebase.initializeApp(config)
const auth = firebaseApp.auth()
```

```js
// attach the module to your store
attachFirebaseAuthModule(store, auth, 'auth')
```

### Example Project
An example project can be found [here](https://github.com/vuetifyjs/vuex-firebase-auth-example)
