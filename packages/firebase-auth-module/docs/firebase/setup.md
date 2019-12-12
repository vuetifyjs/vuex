# Configuring Firebase Auth

## Setup Firebase Project

If you've already created a firebase project, skip to step 5.

1. Navigate to [Firebase](https://firebase.google.com) ![Firebase Welcome Screen](/getting-started.png)

2. Create new project ![Firebase Welcome Screen](/add-project.png)

3. Setup new project ![Project Setup](/project-setup.png)

4. After setup is completed, click "continue" ![Project Ready](/project-ready.png)

5. In the Firebase console, click "Authentication" ![Firebase Console](/console-auth.png)

6. On Firebase Auth screen, Setup new sign in methods ![Setup Sign In Methods](/setup-methods.png)

7. Select Email/Password ![Email Methods](/select-methods.png)

8. Enable it and save ![Enable Email](/enable-email-pass.png)

9. Let's now get the config to add to your project, Click "Web Setup" ![Setup](/get-setup-config.png)

10. Copy whats in the red box ![Web Setup Config](/copy-config.png)

11. Add it to main.js

```js
import firebase from 'firebase/app'
import 'firebase/auth'

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