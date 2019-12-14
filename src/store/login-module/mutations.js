/* set the authorization token*/
export const setToken = (state, token) => {
  state.token = token
}

export const destroyToken = (state) => {
  state.token = null
}