let auth // auth object created from firebase.auth()

const notImplemented = () => { console.warn('Not implemented yet') }

export default {
  init ({ dispatch }, config) {
    auth = config
    auth.onAuthStateChanged(user => dispatch('authStateChanged', user))
    // TODO: auth.onIdTokenChanged
  },
  /// Auth methods
  authStateChanged: ({ commit, state }, user) => {
    if (!state.init) commit('setInit')
    commit('setUser', user)
  },
  applyActionCode: (_, code) =>
    new Promise((resolve, reject) => {
      auth.applyActionCode(code)
        .then(resolve)
        .catch(reject)
    }),
  checkActionCode: (_, code) =>
    new Promise((resolve, reject) => {
      auth.checkActionCode(code)
        .then(resolve)
        .catch(reject)
    }),
  confirmPasswordReset: (_, payload) =>
    new Promise((resolve, reject) => {
      auth.confirmPasswordReset(payload.code, payload.newPassword)
        .then(resolve)
        .catch(reject)
    }),
  createUserWithEmailAndPassword: ({ commit }, payload) =>
    new Promise((resolve, reject) => {
      auth.createUserWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          const user = auth.currentUser
          user.sendEmailVerification()
          commit('setUser', user)
          resolve(user)
        })
        .catch(reject)
    }),
  fetchSignInMethodsForEmail: (_, email) =>
    new Promise((resolve, reject) => {
      auth.fetchSignInMethodsForEmail(email)
        .then(resolve)
        .catch(reject)
    }),
  getRedirectResult: () =>
    new Promise((resolve, reject) => {
      auth.getRedirectResult()
        .then(resolve)
        .catch(reject)
    }),
  isSignInWithEmailLink: (_, emailLink) =>
    new Promise((resolve, reject) => {
      auth.isSignInWithEmailLink(emailLink)
        .then(resolve)
        .catch(reject)
    }),
  sendPasswordResetEmail: (_, email) =>
    new Promise((resolve, reject) => {
      auth.sendPasswordResetEmail(email)
        .then(resolve)
        .catch(reject)
    }),
  sendSignInLinkToEmail: notImplemented,
  setPersistence: (_, type) => {
    if (!['session', 'local', 'none'].includes(type)) {
      throw new Error('`type` must be one of `session`, `local`, `none`')
    }
    auth.setPersistence(type.toLowerCase())
  },
  signInAndRetrieveDataWithCredential: notImplemented,
  signInAndRetrieveDataWithCustomToken: notImplemented,
  signInAndRetrieveDataWithEmailAndPassword: notImplemented,
  signInAnonymously: notImplemented,
  signInAnonymouslyAndRetrieveData: notImplemented,
  signInWithCredential: notImplemented,
  signInWithCustomToken: notImplemented,
  signInWithEmailAndPassword: ({ commit }, credentials) =>
    new Promise((resolve, reject) => {
      auth.signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(resolve)
        .catch(reject)
    }),
  signInWithEmailLink: notImplemented,
  signInWithPhoneNumber: notImplemented,
  signInWithPopup: notImplemented,
  signInWithRedirect: notImplemented,
  signOut: ({ commit }) =>
    new Promise((resolve, reject) => {
      auth.signOut()
        .then(res => {
          commit('setUser', {})
          resolve(res)
        })
        .catch(reject)
    }),
  updateCurrentUser: notImplemented,
  useDeviceLanguage: () => {
    auth.useDeviceLanguage()
  },
  verifyPasswordResetCode: (_, code) =>
    new Promise((resolve, reject) => {
      auth.verifyPasswordResetCode(code)
        .then(resolve)
        .catch(reject)
    }),

  /// User Methods
  getIdToken: notImplemented,
  getIdTokenResult: notImplemented,
  toJSON: () => {
    const currentUser = auth.currentUser
    return currentUser.toJSON()
  },
  reauthenticateWithCredential: notImplemented,
  reloadUser: ({ commit }) =>
    new Promise((resolve, reject) => {
      const currentUser = auth.currentUser
      currentUser.reload()
        .then(user => {
          commit('setUser', user)
          resolve(user)
        })
        .catch(reject)
    }),
  resendVerification: (_, data) =>
    new Promise((resolve, reject) => {
      const currentUser = auth.currentUser
      currentUser.sendEmailVerification()
      resolve(currentUser)
    }),
  updateEmail: notImplemented,
  updatePassword: notImplemented,
  updatePhoneNumber: notImplemented,
  updateProfile: ({ commit }, payload) =>
    new Promise((resolve, reject) => {
      const user = auth.currentUser
      const profileData = {}
      if (payload.photoURL) {
        profileData.photoURL = payload.photoURL
      }
      if (payload.displayName) {
        profileData.displayName = payload.displayName
      }
      if (!Object.keys(profileData).length) {
        throw new Error('No data provided.')
      }
      user.updateProfile(profileData)
        .then(res => {
          commit('setProfile', profileData)
          resolve(res)
        })
        .catch(reject)
    })
}
