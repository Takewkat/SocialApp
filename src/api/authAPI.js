import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/auth/',
  headers: {'API-KEY': ''},
  withCredentials: true
});

const AuthAPI = {
  getAuth() {
    return (
      instance
        .get('me', {
          withCredentials: true
        })
        .then( response => {
          return response.data
        })
    )
  },
  login(email, password, rememberMe = false) {
    let prop = {
      email: email,
      password: password,
      rememberMe: rememberMe
    }
    return (
      instance
        .post(`login`, prop)
    )
  },
  logout(e) {
    return (
      instance
        .delete(`login`)
    )
  }
}

export default AuthAPI