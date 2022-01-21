import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/follow/',
  headers: {'API-KEY': ''},
  withCredentials: true
});

const FollowAPI = {
  Follow(userId) {
    return (
      instance
        .post(`${userId}`)
        .then( response => {
          return response.data.resultCode
        })
    )
  },
  Unfollow(userId) {
    return (
      instance
        .delete(`${userId}`)
        .then( response => {
          return response.data.resultCode
        })
    )
  }
};

export default FollowAPI