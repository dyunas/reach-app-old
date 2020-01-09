import Vue from "vue";
import Vuex from "vuex";

import loginModule from './login-module'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      loginModule
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  if (process.env.DEV && module.hot) {
    module.hot.accept(
      [
        './login-module',
      ],
      () => {
        const newLoginModule = require('./login-module').default

        Store.hotUpdate({
          modules: {
            loginModule: newLoginModule,
          }
        })
      })
  }

  return Store;
}
