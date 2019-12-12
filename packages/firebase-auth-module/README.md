# vuex-firebase-auth-module

Vuex module to interface with Google Firebase

Docs Link: Coming Soon!

Install:
```bash
yarn add @vuetify/vuex-firebase-auth-module
```

Import into your project's entry point (main.js in most Vue projects)
```js
import attachFirebaseAuthModule from '@vuetify/vuex-firebase-auth-module';
```

Attach auth module to the store
```js
import firebase from 'firebase/app'
import 'firebase/auth'

import store from './store';

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

attachFirebaseAuthModule(store, auth, 'auth')
```
