module.exports = {
  isLoggedIn: (store = {}) => {
    return Boolean(store.user && store.user.uid)
  },
  isVerified: (store = {}) => store.user && store.user.emailVerified
}
