import axios from 'axios';

const sessionToken = localStorage.getItem('sessionToken');
const userId = localStorage.getItem('userId');

export const fetchUserDetails = () => {
    return axios.post('http://localhost/srma/client2Server.php', {
        function: "getUser-Details",
        userId: userId,
        sessionId: sessionToken
    });
};


export const fetchUserAddress = () => {
    return axios.post('http://localhost/srma/client2Server.php', {
        function: "getUser-Adress",
        userId: userId,
        sessionId: sessionToken
    });
};
