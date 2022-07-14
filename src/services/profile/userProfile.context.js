import React, { createContext, useState } from 'react';
import {
    fetchUserDetails, fetchUserAddress, fetchUserBikes,
    saveUserBikeOnServer, saveUserAddressOnServer,
    saveUserDetailsOnServer,
    deleteUserDetailsOnServer
} from './userProfile.service';

export const UserProfileProvider = createContext();

export const UserProfileContext = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [userDetails, setUserDetails] = useState({});
    const [userBikeDetails, setUserBikeDetails] = useState({});
    const [userAddress, setUserAddress] = useState([]);
    const [userBikes, setUserBikes] = useState([]);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);


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
                setUserAddress(data.data);
            }
        } catch (error) {
            setIsLoading(false);
            setError(error);
        }
    }

    const loadUserBikes = async () => {
        setIsLoading(true);
        try {
            const response = await fetchUserBikes();
            setIsLoading(false);
            const { data } = response;
            if (data.status.toLowerCase() === 'ok') {
                setError(null);
                setUserBikes(data.data);
            }
        } catch (error) {
            setIsLoading(false);
            setError(error);
        }
    }

    const saveUserBike = async (bikeInfo) => {
        setIsLoading(true);
        try {
            const response = await saveUserBikeOnServer(bikeInfo);
            setIsLoading(false);
            const { data } = response;
            if (data.status.toLowerCase() === 'ok') {
                showSuccessMessage('Bike saved successfully');
                setError(null);
                loadUserBikes();
            } else {
                setError('Something went wrong');
            }
        } catch (error) {
            setIsLoading(false);
            setError('Something went wrong');
        }
    }

    const saveUserAddress = async (addressInfo) => {
        setIsLoading(true);
        try {
            const response = await saveUserAddressOnServer(addressInfo);
            setIsLoading(false);
            const { data } = response;
            if (data.status.toLowerCase() === 'ok') {
                showSuccessMessage('Address saved successfully');
                setError(null);
                loadUserAddress();
            } else {
                setError('Something went wrong');
            }
        } catch (error) {
            setIsLoading(false);
            setError('Something went wrong');
        }
    }

    const saveUserDetails = async (userInfo) => {
        setIsLoading(true);

        try {
            const response = await saveUserDetailsOnServer(userInfo);
            setIsLoading(false);
            const { data } = response;
            if (data.status.toLowerCase() === 'ok') {
                showSuccessMessage('Details saved successfully');
                setError(null);
                loadUserDetails();
            } else {
                setError('Something went wrong');
            }
        } catch (error) {
            setIsLoading(false);
            setError('Something went wrong');
        }
    }

    const deleteUserDetails = async (userInfo) => {
        setIsLoading(true);

        try {
            const response = await deleteUserDetailsOnServer(userInfo);
            setIsLoading(false);
            const { data } = response;
            if (data.status.toLowerCase() === 'ok') {
                showSuccessMessage('Success. Email is sent.');
                setError(null);
                loadUserDetails();
            } else {
                setError('Something went wrong');
            }
        } catch (error) {
            setIsLoading(false);
            setError('Something went wrong');
        }
    }


    const showSuccessMessage = (message) => {
        setSuccessMessage(message);
        setTimeout(() => {
            setSuccessMessage(null);
        }, 3000);
    }



    const initUserProfile = async () => {
        await loadUserAddress();
        await loadUserBikes();
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
            loadUserAddress,
            loadUserBikes,
            userBikes,
            setUserBikeDetails,
            userBikeDetails,
            initUserProfile,
            saveUserBike,
            successMessage,
            saveUserAddress,
            saveUserDetails,
            deleteUserDetails
        }}>
            {children}
        </UserProfileProvider.Provider>
    )
}
