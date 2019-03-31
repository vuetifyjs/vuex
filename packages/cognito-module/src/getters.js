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
  }
}
