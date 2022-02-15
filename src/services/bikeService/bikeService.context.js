import React, { createContext, useState } from 'react';
import { fetchAllServices } from './bikeService.service';
export const BikeServiceProvider = createContext();


export const BikeServiceContext = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [services, setServices] = useState([]);
    const [error, setError] = useState(null);


    const loadServices = async () => {
        setIsLoading(true);
        try {
            const response = await fetchAllServices();
            setIsLoading(false);
            const { data } = response;
            if (data.status.toLowerCase() === 'ok') {
                setError(null);
                setServices(data.data);
            }
        } catch (error) {
            setIsLoading(false);
            setError(error);
        }
    }

    return (
        <BikeServiceProvider.Provider value={{
            isLoading,
            services,
            error,
            loadServices
        }}>
            {children}
        </BikeServiceProvider.Provider>

    )
}