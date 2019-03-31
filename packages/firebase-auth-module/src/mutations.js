
export default {
  setUser: (state, user) => {
    state.user = { ...user }
  },
  setProfile: (state, profile) => {
    if (profile.photoURL) state.user.photoURL = profile.photoURL
    if (profile.displayName) state.user.displayName = profile.displayName
  }
}
