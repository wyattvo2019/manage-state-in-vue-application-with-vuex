import { createStore } from 'vuex'

export default createStore({
  state: {
    firstName: 'John',
    lastName: 'Doe'
  },
mutations: {

},
actions: {

},
getters: {
  fullName: function (state) {
    return `${state.firstName} ${state.lastName}`
  }
}
})