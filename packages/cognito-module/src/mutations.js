// Utils

export default {
  setUser: (state, user) => {
    state.user = JSON.parse(JSON.stringify(user))
    state.session = state.user.signInUserSession
  }
}
