import { defineStore } from 'pinia'
import { setToken, removeToken } from '@/utils/auth'
import { login, getInfo, logout } from '@/api/login'

export const useUserStore = defineStore({
  id: 'userInfo',
  state: () => ({
    token: null,
    userId: null,
    userName: null,
    avatar: null,
    nickName: null,
    permissions: [],
    roles: [],
  }),
  actions: {
    Login: function (userInfo) {
      const username = userInfo.username.trim()
      const password = userInfo.password
      return new Promise((resolve, reject) => {
        login(username, password).then(res => {
          setToken(res.token)
          this.token = res.token;
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetInfo: function (token) {
      return new Promise((resolve, reject) => {
        getInfo(token).then(res => {
          this.avatar = res.data.avatar;
          this.userId = res.data.userId;
          this.userName = res.data.userName;
          this.nickName = res.data.nickName;
          this.permissions = res.data.permissions;
          this.roles = res.data.roles;
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    LogOut: function() {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          this.token = null;
          this.userId = null;
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
})
