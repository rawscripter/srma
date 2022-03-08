import axios from 'axios';

const sessionToken = localStorage.getItem('sessionToken');
const userId = localStorage.getItem('userId');

export const fetchAllServices = () => {
    return axios.post('https://bleibemobil.com/dev1/php/client2Server.php', {
        function: "getServices",
        userId: userId,
        sessionId: sessionToken
    });
};
