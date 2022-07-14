import axios from 'axios';

const sessionToken = localStorage.getItem('sessionToken');
const userId = localStorage.getItem('userId');

export const fetchUserDetails = () => {
    return axios.post('http://localhost:8880/srma/client2Server.php', {
        function: "getUser-Details",
        userId: userId,
        sessionId: sessionToken
    });
};


export const fetchUserAddress = () => {
    return axios.post('http://localhost:8880/srma/client2Server.php', {
        function: "getUser-Adress",
        userId: userId,
        sessionId: sessionToken
    });
};

export const fetchUserBikes = () => {
    return axios.post('http://localhost:8880/srma/client2Server.php', {
        function: "getUser-Bike",
        userId: userId,
        sessionId: sessionToken
    });
};


export const saveUserBikeOnServer = (payload) => {
    return axios.post('http://localhost:8880/srma/client2Server.php', {
        function: "saveBike",
        userId: userId,
        sessionId: sessionToken,
        ...payload
    });
};

export const saveUserAddressOnServer = (payload) => {
    return axios.post('http://localhost:8880/srma/client2Server.php', {
        function: "saveAdresses",
        userId: userId,
        sessionId: sessionToken,
        ...payload
    });
};

export const saveUserDetailsOnServer = (payload) => {
    return axios.post('http://localhost:8880/srma/client2Server.php', {
        function: "saveDetails",
        userId: userId,
        sessionId: sessionToken,
        ...payload
    });
};
export const deleteUserDetailsOnServer = (payload) => {
    return axios.post('http://localhost:8880/srma/accountdel.php', {
        function: "deleteUserRequest",
        sessionId: sessionToken,
        userId: userId,
        ...payload
    });
};
