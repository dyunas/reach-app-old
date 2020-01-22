/* eslint-disable prettier/prettier */

/* set the authorization token*/
export const setToken = (state, token) => {
  state.token = token
}

export const setUserLevel = (state, userLevel) => {
  state.userLevel = userLevel
}

export const destroyToken = state => {
  state.token = null
}
