import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/profile/',
  headers: {'API-KEY': ''},
  withCredentials: true
});

const profileAPI = {

  loadProfile(userId) {
    return instance
      .get(`${userId}`)
      .then( ({ data }) => {
        return data;
      });
  },

  getUserStatus(userId) {
    return instance
      .get(`status/${userId}`)
      .then( ({ data }) => {
        return data
      });
  },

  updateUserStatus(status) {
    return instance
      .put('status', {status: status}) 
  }
};

export default profileAPI