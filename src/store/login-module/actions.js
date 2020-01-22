/* eslint-disable prettier/prettier */

/* import axios */
import axios from 'axios'
/* import LocalStorage plugin for storing data in browser localstorage */
import { LocalStorage } from 'quasar'

axios.defaults.baseURL = 'http://localhost/reach-php/public/api'

export const login = (context, payload) => {
  return new Promise((resolve, reject) => {
    axios.post("/login",
      {
        data: {
          username: payload.username,
          password: payload.password
        },
        '_method': 'POST'
      }
    )
      .then(response => {
        const token = response.data.token_type + ' ' + response.data.access_token
        LocalStorage.set('token', token)
        context.commit('setToken', token)
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const checkUserLevel = (context) => {
  axios.defaults.headers.common['Authorization'] = context.rootState.loginModule.token
  return new Promise((resolve, reject) => {
    axios.get('/getAuthenticatedUser')
      .then(response => {
        const userLevel = response.data
        LocalStorage.set('userLevel', userLevel)
        context.commit('setUserLevel', userLevel)
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const logout = (context) => {
  axios.defaults.headers.common['Authorization'] = context.state.token
  return new Promise((resolve, reject) => {
    if (LocalStorage.has('token')) {
      axios.post('/logout')
        .then(response => {
          LocalStorage.remove('token')
          context.commit('destroyToken')
          resolve(response.result)
        })
        .catch(error => {
          LocalStorage.remove('access_token')
          context.commit('destroyToken')
          reject(error)
        })
    }
  })
}
