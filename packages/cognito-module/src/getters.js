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
  getSession: (store = {}) => {
    const session = store.session
    return session
  },
  getUserSub: (store = {}) => {
    const userSub = store.user.attributes.sub
    return userSub
  },
  getUsername: (store = {}) => {
    const username = store.user.user.username
    return username
  },
  getUserAttributes: (store = {}) => {
    const attributes = store.user.attributes
    return attributes
  },
  getUserGroup: (store = {}) => {
    const groups = store.session.accessToken.payload['cognito:groups']
    return groups
  }
}
