# Install

Vuex module to interface with AWS Cognito

Install:

```bash
npm install @vuetify/vuex-cognito-module
```

```bash
yarn add @vuetify/vuex-cognito-module
```

## Vue

Import into your project's entry point (**src/main.js** in most Vue projects)

```js
import attachCognitoModule from '@vuetify/vuex-cognito-module'
```

Attach cognito module to the store

```js
import store from './store'

attachCognitoModule(store, {
  userPoolId: 'your-data-here',
  identityPoolId: 'your-data-here', // This field is now optional
  userPoolWebClientId: 'your-data-here',
  region: 'your-data-here'
}, 'cognito')
```

### Example Project

An example project can be found [here](https://github.com/vuetifyjs/vuex-cognito-example)

## Nuxt

Create a Nuxt plugin in the **plugins/** directory in your Nuxt project.

Within your plugin file attach the cognito module to the store

```js
import attachCognitoModule from '@vuetify/vuex-cognito-module'

export default (ctx, inject) => {
  const store = ctx.store
  attachCognitoModule(store, {
    userPoolId: 'your-data-here',
    identityPoolId: 'your-data-here', // This field is now optional
    userPoolWebClientId: 'your-data-here',
    region: 'your-data-here'
  }, 'cognito')
}
```

And finally in your **nuxt.config.js** file register your plugin.

```js
plugins: ['@/plugins/vuex-cognito-module.js']
```
