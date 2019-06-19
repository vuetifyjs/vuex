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
  session: (store = {}) => 'session' in store &&
    Object.keys(store.session).length !== 0
    ? store.session
    : false,
  userSub: (store = {}) => {
    if (store.user && store.user.attributes) {
      return store.user.attributes.sub
    } else if (store.user && store.user.userSub) {
      return store.user.userSub
    } else {
      return false
    }
  },
  username: (store = {}) => store.user &&
    store.user.user
    ? store.user.user.username
    : false,
  userAttributes: (store = {}) => store.user &&
    store.user.attributes
    ? store.user.attributes
    : false,
  userGroups: (store = {}) => store.session &&
    store.session.accessToken &&
    store.session.accessToken.payload &&
    store.session.accessToken.payload['cognito:groups']
    ? store.session.accessToken.payload['cognito:groups']
    : false
}
