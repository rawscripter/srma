import axios from 'axios';

export const sendLoginRequest = (email, password) => {
    return axios.post('http://localhost/srma/client2Server.php', {
        function: "loginUser",
        user: email,
        password: password
    });
};

export const sendRegisterRequest = (payload) => {
    return axios.post('http://localhost/srma/client2Server.php', {
        function: "registerUser",
        user: payload.email,
        ...payload
    });
};

export const checkUserEmail = (email, password) => {
    return axios.post('http://localhost/srma/client2Server.php', {
        function: "checkUser",
        user: email,
    });
};
