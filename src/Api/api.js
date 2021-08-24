import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '73c3a532-c357-4024-8e75-5be0e1d67875'
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => (response.data));
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data);
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data);
    }
};

export const authAPI = {
    getMe() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    logIn(data) {
        //return instance.post(`auth/login`, data).then(response => response.data);
        return instance.post(`auth/login`, data);
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data);
    }

};

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(response => response.data);
    }
};
