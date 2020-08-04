export const state = () => ({
  authUser: null
})

export const mutations = {
  SET_USER (state, user) {
    state.authUser = user
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login ({ commit }, { name, password }) {
    try {
      const { data } = await this.$axios.post('/api/login', { name, password })
      this.$axios.setToken(data.token, 'Bearer', 'post')
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout ({ state, commit }) {
    await this.$axios.post('/api/logout')
    this.$axios.setToken(false)
    commit('SET_USER', null)
  }

}
