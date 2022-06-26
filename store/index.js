// 设定需要储存的数据及其默认值
export const state = () => ({
  token: {
    Authorization: null,
    username: null,
    userid: null,
  },
})

// 获取数据方法
export const getters = {
  getToken(state) {
    return state.token
  },
}

//更新数据方法
export const mutations = {
  setToken(state, token) {
    state.token = token
  },
}
// 初始化数据方法
export const actions = {
  // nuxtServerInit，用以初始化数据
  async nuxtServerInit({ commit }, { app }) {
    const token = {}
    // 从cookie中获取token，并且将其中的数据更新到store
    token.Authorization = app.$cookies.get('Authorization')
    // 如果存在token
    if (token.Authorization) {
      // 解析token中携带的用户信息
      token.username = 'tesxt'
      token.userid = 'tanyuehong'
      // 将用户信息更新
      // commit用以提交需要更新的数据，并指定更新的方法
      commit('setToken', token)
    }
  },
}
