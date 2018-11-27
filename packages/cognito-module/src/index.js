import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default (store, config, namespace = 'cognito', vuexModuleOptions = {}) => {
  store.registerModule(namespace, {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
  }, vuexModuleOptions)

  store.dispatch(`${namespace}/init`, config)
}
