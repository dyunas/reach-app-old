/* import LocalStorage plugin for storing data in browser localstorage */
import { LocalStorage } from 'quasar'

export default {
  'token': LocalStorage.getItem('token') || null
}
