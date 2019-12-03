import axios from 'axios'

export const login = (context, payload) => {
  return new Promise(resolve, reject) {
    axios.post('http://localhost:8000/login',
      data = {
        username: payload.username,
        password: payload.password
      },
      _method = 'POST'
    ).then(
      console.log('wahoo')
    )
  }
}