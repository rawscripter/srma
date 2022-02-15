import React, { createContext, useState } from 'react';
import { fetchUserDetails, fetchUserAddress } from './userProfile.service';

export const UserProfileProvider = createContext();

export const UserProfileContext = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [userDetails, setUserDetails] = useState({});
    const [userAddress, setUserAddress] = useState({});
    const [error, setError] = useState(null);

    const loadUserDetails = async () => {
        setIsLoading(true);
        try {
            const response = await fetchUserDetails();
            setIsLoading(false);
            const { data } = response;
            if (data.status.toLowerCase() === 'ok') {
                setError(null);
                setUserDetails(data.data[0]);
            }
        } catch (error) {
            setIsLoading(false);
            setError(error);
        }
    }
    const loadUserAddress = async () => {
        setIsLoading(true);
        try {
            const response = await fetchUserAddress();
            setIsLoading(false);
            const { data } = response;
            if (data.status.toLowerCase() === 'ok') {
                setError(null);
                setUserAddress(data.data[0]);
            }
        } catch (error) {
            setIsLoading(false);
            setError(error);
        }
    }

    return (
        <UserProfileProvider.Provider value={{
            isLoading,
            error,
            loadUserDetails,
            userDetails,
            setUserDetails,
            userAddress,
            setUserAddress,
            loadUserAddress
        }}>
            {children}
        </UserProfileProvider.Provider>
    )
}
