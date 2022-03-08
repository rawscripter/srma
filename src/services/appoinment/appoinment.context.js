import React, { useState, createContext, useEffect } from 'react';
import { fetchFreeTimeSlots, makeNewAppionmet } from './appoinment.service';
export const AppoinmentProvider = createContext();

export const AppoinmentContext = ({ children }) => {

    const [isAppoinmentLoading, setIsAppoinmentLoading] = useState(false);
    const [selectedService, setSelectedService] = useState('1');
    const [freeSlots, setFreeSlots] = useState([]);
    const [error, setError] = useState(null);
    const [appointmentForm, setAppointmentForm] = useState({});

    useEffect(() => {
        setAppointmentForm({
            ...appointmentForm, services_id: selectedService
        });
        // eslint-disable-next-line
    }, [selectedService]);



    const loadFreeSlots = async () => {
        setIsAppoinmentLoading(true);
        try {
            const response = await fetchFreeTimeSlots();
            setIsAppoinmentLoading(false);
            const { data } = response;
            if (data.status.toLowerCase() === 'ok') {
                setError(null);
                setFreeSlots(data.data);
            }
        } catch (error) {
            setIsAppoinmentLoading(false);
            setError(error);
        }
    }

    const makeAppointment = () => {
        return new Promise((resolve, reject) => {
            setIsAppoinmentLoading(true);

            makeNewAppionmet(appointmentForm).then(response => {
                const { data } = response;
                if (data.status.toLowerCase() === 'ok') {
                    setError(null);
                    setIsAppoinmentLoading(false);
                    setAppointmentForm({});
                    setSelectedService(null);
                    resolve({
                        status: 'ok',
                        message: data.message
                    });
                }
                reject({
                    status: 'wrong',
                    message: 'Something went wrong. Please try again.'
                })
            }).catch(error => {
                setIsAppoinmentLoading(false);
                setError(error);
                reject({
                    status: 'wrong',
                    message: 'Something went wrong. Please try again.'
                })
            })
        })
    }



    return (
        <AppoinmentProvider.Provider value={{
            isAppoinmentLoading,
            selectedService,
            setSelectedService,
            freeSlots,
            error,
            loadFreeSlots,
            appointmentForm,
            setAppointmentForm,
            makeAppointment,
        }}>
            {children}
        </AppoinmentProvider.Provider >
    )
}
