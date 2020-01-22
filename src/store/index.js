import Vue from "vue";
import Vuex from "vuex";

import loginModule from './login-module'
import adminModule from './admin-module'
import merchantDashboardModule from './merchant-module/dashboard-module'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      loginModule,
      adminModule,
      merchantDashboardModule
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
        const newAdminModule = require('./admin-module').default
        const newMerchantDashboardModule = require('./merchant-module/dashboard-module').default

        Store.hotUpdate({
          modules: {
            loginModule: newLoginModule,
            adminModule: newAdminModule,
            merchantDashboardModule: newMerchantDashboardModule,
          }
        })
      })
  }

  return Store;
}
