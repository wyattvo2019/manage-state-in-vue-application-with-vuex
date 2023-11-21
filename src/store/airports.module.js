export default {
  state: {
    favorites: []
  },
  mutations: {
    UPDATE_FAVORITES(state, payload) {
      state.favorites = payload
    }
  },
  actions: {
    addToFavorites(context, payload) {
      const favorites = context.state.favorites;
      var exists = favorites.some(a => {
        return a.id === payload.id;
      });
      if(!exists){
        favorites.push(payload)
      }
      context.commit('UPDATE_FAVORITES', favorites)
    },
    removeFromFavorites(context, payload) {
      const favorites = context.state.favorites;
      favorites.splice(payload, 1);
      context.commit('UPDATE_FAVORITES', favorites)
    },
  },
}