import * as axios from 'axios';

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers:     {
    "API-KEY": ""
  }
});

export const userAPI = {
  getUsers(currentPage=1, pageSize=10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },

  postFollow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  },

  deleteUnfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data
      });
  },

  authAPI() {
    return instance.get(`auth/me`)
    .then(response => {
      return response.data
    });
  },

  getProfile(userId) {
    return instance.get(`profile/` + userId);      
  }
}
