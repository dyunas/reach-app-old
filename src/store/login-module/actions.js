/* import axios */
import axios from 'axios'
/* import LocalStorage plugin for storing data in browser localstorage */
import { LocalStorage } from 'quasar'

axios.defaults.baseURL = 'http://localhost:8012/reach-php/public/api'

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
      .then(result => {
        const token = result.data.token_type + ' ' + result.data.access_token
        LocalStorage.set('token', token)
        context.commit('setToken', token)
        resolve(result)
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
          resolve(response)
        })
        .catch(error => {
          LocalStorage.remove('access_token')
          context.commit('destroyToken')
          reject(error)
        })
    }
  })
}
