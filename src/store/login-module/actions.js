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
      .then(result => {
        LocalStorage.set('token', result.data.token_type + ' ' + result.data.access_token)
        const token = result.data.access_token
        context.commit('setToken', token)
        resolve(result)
      })
      .catch(error => {
        reject(error)
      })
  })
}
