module.exports = {
  // TODO: ensure best method to verify this
  isLoggedIn: (store = {}) => {
    const session = store.session
    if (!session) return false
    const accessToken = session.accessToken
    if (!accessToken) return false
    const hasToken = accessToken.jwtToken
    const isActive = new Date(accessToken.payload.exp * 1000) > new Date()
    const isMe = accessToken.payload.username === store.user.username

    return hasToken && isActive && isMe
  },
  // I find this one poetic. :)
  getSession: (store = {}) => /* Does the */ 'session' /* key exist */ in store ? store.session : 'Could not retrieve session data.',
  getUserSub: (store = {}) => store.user &&
    store.user.attributes
    ? store.user.attributes.sub
    : 'Could not retrieve user sub.',
  getUsername: (store = {}) => store.user &&
    store.user.user
    ? store.user.user.username
    : 'Could not retrieve username.',
  getUserAttributes: (store = {}) => store.user &&
    store.user.attributes
    ? store.user.attributes
    : 'Could not retrieve user attributes.',
  getUserGroup: (store = {}) => store.session &&
    store.session.accessToken &&
    store.session.accessToken.payload &&
    store.session.accessToken.payload['cognito:groups']
    ? store.session.accessToken.payload['cognito:groups']
    : 'Could not retrieve groups data.'
}
