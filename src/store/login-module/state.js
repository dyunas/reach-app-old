/* eslint-disable prettier/prettier */

/* import LocalStorage plugin for storing data in browser localstorage */
import { LocalStorage } from 'quasar'

export default {
  'token': (LocalStorage.has('token')) ? LocalStorage.getItem('token') : null,
}