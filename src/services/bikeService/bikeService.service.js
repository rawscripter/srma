import axios from 'axios';

const sessionToken = localStorage.getItem('sessionToken');
const userId = localStorage.getItem('userId');

export const fetchAllServices = () => {
    return axios.post('http://localhost:8880/srma/client2Server.php', {
        function: "getServices",
        userId: userId,
        sessionId: sessionToken
    });
};
