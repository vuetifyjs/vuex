import Auth from '@aws-amplify/auth'
import Amplify from '@aws-amplify/core'

export default {
  fetchSession: ({ commit }) =>
    new Promise((resolve, reject) => {
      Auth.currentSession().then(session => {
        Auth.currentUserPoolUser()
          .then(user => {
            commit('setUser', user)

            resolve(session)
          }).catch(reject)
      }).catch(reject)
    }),
  fetchJwtToken: ({ commit }) =>
    new Promise((resolve, reject) => {
      Auth.currentSession().then(session => {
        resolve(session.getAccessToken().getJwtToken())
      }).catch(reject)
    }),
  signInUser: ({ commit }, credentials) =>
    new Promise((resolve, reject) => {
      Auth.signIn(credentials.username, credentials.password).then((user) => {
        commit('setUser', user)

        resolve(user)
      }).catch(reject)
    }),
  answerCustomChallenge: ({ commit }, credentials) =>
    new Promise((resolve, reject) => {
      Auth.sendCustomChallengeAnswer(credentials.user, credentials.answer).then((user) => {
        commit('setUser', user)

        resolve(user)
      }).catch(reject)
    }),
  registerUser: ({ commit }, credentials) =>
    new Promise((resolve, reject) => {
      // TODO: Ensure I'm attribute agnostic
      Auth.signUp({
        username: credentials.username,
        password: credentials.password,
        attributes: credentials.attributes
      }).then(user => {
        commit('setUser', user)

        resolve(user)
      }).catch(reject)
    }),
  confirmUser: (_, data) =>
    new Promise((resolve, reject) => {
      Auth.confirmSignUp(data.username, data.code)
        .then(resolve)
        .catch(reject)
    }),
  resendConfirmation: (_, data) =>
    new Promise((resolve, reject) => {
      Auth.resendSignUp(data.username)
        .then(resolve)
        .catch(reject)
    }),
  forgotPassword: (_, data) =>
    new Promise((resolve, reject) => {
      Auth.forgotPassword(data.username)
        .then(resolve)
        .catch(reject)
    }),
  changePassword: (_, data) =>
    new Promise((resolve, reject) => {
      Auth.forgotPasswordSubmit(
        data.username,
        data.code,
        data.newPassword
      )
        .then(resolve)
        .catch(reject)
    }),
  signOut: ({ commit, getters }) =>
    new Promise((resolve, reject) => {
      if (!getters.isLoggedIn) {
        reject(new Error('User not logged in.'))
      }

      Auth.signOut()
        .then(result => {
          commit('setUser', {})

          resolve(result)
        })
        .catch(reject)

      if (localStorage) localStorage.removeItem('USER')
    }),
  init ({ commit }, config) {
    if (![
      'userPoolId',
      'userPoolWebClientId',
      'region'
    ].every(opt => Boolean(config[opt]))) {
      throw new Error('userPoolId, userPoolWebClientId and region are required in the config object.')
    }

    Amplify.configure({ Auth: config })
  }
}
