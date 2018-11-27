module.exports = {
  // TODO: ensure best method to verify this
  isLoggedIn: (store = {}) => {
    return Boolean(
      store.session &&
      store.session.accessToken &&
      store.session.accessToken.jwtToken
    )
  }
}
