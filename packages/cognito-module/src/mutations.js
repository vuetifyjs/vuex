export default {
  setUser: (state, user) => {
    state.user = { ...user }
    state.session = state.user.signInUserSession
  }
}
