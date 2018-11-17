import { login } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { getProfile, logout } from '@/api/me'

const user = {
  state: {
    token: getToken(),
    username: '',
    avatar: '',
    role: '',
    cans: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLE: (state, role) => {
      state.role = role
    },
    SET_CANS: (state, cans) => {
      state.cans = cans
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response
          setToken(data.access_token)
          commit('SET_TOKEN', data.access_token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getProfile().then(response => {
          const data = response
          if (data.role && data.role !== '') {
            commit('SET_ROLE', data.role)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_USERNAME', data.username)
          commit('SET_AVATAR', data.avatar)
          commit('SET_CANS', data.cans)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FrontLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
