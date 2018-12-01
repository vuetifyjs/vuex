
export default {
  setUser: (state, user) => {
    state.user = JSON.parse(JSON.stringify(user))
    // const user = {
    //   email: user.email,
    //   uid: user.uid,
    //   photoURL: user.photoURL,
    //   emailVerified: user.emailVerified,
    //   displayName: user.displayName
    // }
    // state.user = user
  },
  setProfile: (state, profile) => {
    if (profile.photoURL) state.user.photoURL = profile.photoURL
    if (profile.displayName) state.user.displayName = profile.displayName
  }
}
