import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default (store, authObj, namespace = 'auth', vuexModuleOptions = {}) => {
  if (!authObj) {
    throw new Error('Auth object required. Did you create it from `firebase.auth()`?')
  }
  store.registerModule(namespace, {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
  }, vuexModuleOptions)

  store.dispatch(`${namespace}/init`, authObj)
}
