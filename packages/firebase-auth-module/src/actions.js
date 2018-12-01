let auth // auth object created from firebase.auth()

const notImplemented = () => { console.warn('Not implemented yet') };

export default {
  init ({ dispatch }, config) {
    auth = config
    auth.onAuthStateChanged(user => dispatch('authStateChanged', user))
  },
  /// Auth methods
  authStateChanged: ({ commit, state }, user) => {
    if (!state.init) commit('setInit')
    commit('setUser', user)
  },
  applyActionCode: notImplemented,
  checkActionCode: notImplemented,
  confirmPasswordReset: (_, payload) =>
    new Promise((resolve, reject) => {
      auth.confirmPasswordReset(payload.code, payload.newPassword)
        .then(resolve)
        .catch(reject)
    }),
  createUserAndRetrieveDataWithEmailAndPassword: notImplemented,
  createUserWithEmailAndPassword: ({ commit }) =>
    new Promise((resolve, reject) => {
      auth.createUserWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          const user = auth.currentUser;
          user.sendEmailVerification()
          commit('setUser', user)
          resolve(user)
        })
        .catch(reject)
    }),
  fetchProvidersForEmail: notImplemented,
  fetchSignInMethodsForEmail: notImplemented,
  getRedirectResult: notImplemented,
  isSignInWithEmailLink: notImplemented,
  onIdTokenChanged: notImplemented,
  sendPasswordResetEmail: (_, email) =>
    new Promise((resolve, reject) => {
      auth.sendPasswordResetEmail(email)
        .then(resolve)
        .catch(reject)
    }),
  sendSignInLinkToEmail: notImplemented,
  setPersistence: notImplemented,
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
  useDeviceLanguage: notImplemented,
  verifyPasswordResetCode: notImplemented,

  /// User Methods
  getIdToken: notImplemented,
  getIdTokenResult: notImplemented,
  toJSON: notImplemented,
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
      resolve(user)
    }),
  updateEmail: notImplemented,
  updatePassword: notImplemented,
  updatePhoneNumber: notImplemented,
  updateProfile: ({ commit }, payload) =>
    new Promise((resolve, reject) => {
      const user = auth.currentUser
      const profileData = {}
      if (payload.photoURL) {
        profileData.photoURL = photoURL
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
    }),
}
