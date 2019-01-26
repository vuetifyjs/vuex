declare module '@vuetify/vuex-cognito-module' {
  interface CognitoConfig {
    userPoolId: string;
    identityPoolId: string;
    userPoolWebClientId: string;
    region: string;
  }

  export default function (store: object, config: CognitoConfig, namespace?: string, vuexModuleOptions?: object): void
}
