import axios from 'axios';

const sessionToken = localStorage.getItem('sessionToken');
const userId = localStorage.getItem('userId');

export const makeNewAppionmet = (payload) => {
    return axios.post('http://localhost:8880/srma/client2Server.php', {
        function: "saveUser-AppointmentInvoices",
        userId: userId,
        sessionId: sessionToken,
        appointment_id: "",
        requested: 1,
        confirmed: 0,
        completed: 0,
        billed: 0,
        parts_id: "0",
        payment_type: 0,
        payment_confirmed: 1,
        invoice_id: "",
        ...payload

    });
};

export const fetchFreeTimeSlots = () => {
    return axios.post('http://localhost:8880/srma/client2Server.php', {
        function: "getTimeslots",
        userId: userId,
        sessionId: sessionToken
    });
};
