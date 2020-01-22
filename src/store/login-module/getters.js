/* eslint-disable prettier/prettier */
export const getToken = state => {
  return state.token
}

export const authState = state => {
  return state.token != null
}

export const userLevel = state => {
  return state.userLevel
}