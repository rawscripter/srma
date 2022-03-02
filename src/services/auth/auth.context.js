import React, { createContext, useState } from 'react';
import { sendLoginRequest, sendRegisterRequest } from './auth.service'
export const AuthProvider = createContext();

export const AuthPorviderContext = ({ children }) => {

    const storeUserSession = (userId, sessionToken) => {
        localStorage.setItem('userId', userId);
        localStorage.setItem('sessionToken', sessionToken);
    };

    const clearUserSession = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('sessionToken');
    };

    const isUserLoggedIn = () => {
        const userId = localStorage.getItem('userId');
        const sessionToken = localStorage.getItem('sessionToken');
        if (userId && sessionToken) {
            return true;
        }
        return false;
    };

    const getUserId = () => {
        return localStorage.getItem('userId') || null;
    };

    const getSessionToken = () => {
        return localStorage.getItem('sessionToken') || null;
    };

    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn);
    const [user, setUser] = useState(getUserId);
    const [session, setSession] = useState(getSessionToken);
    const [error, setError] = useState(null);
    const [registrationFormData, setRegistrationFormData] = useState({});


    const onLogin = (email, password) => {
        setIsLoading(true);
        sendLoginRequest(email, password)
            .then(response => {
                const { data } = response;
                if (data.status.toLowerCase() === 'wrong') {
                    setError(data.message);
                    setIsLoading(false);
                }
                if (data.status.toLowerCase() === 'ok') {
                    setError(null);
                    setUser(data.userId);
                    setSession(data.sessionToken);
                    storeUserSession(data.userId, data.sessionToken);
                    window.location.href = '/';
                }
            })
            .catch(error => {
                setIsLoading(false);
                setError("Something went wrong. Please try again.");
            });
    };

    const onRegister = (payload) => {
        return new Promise((resolve, reject) => {
            setIsLoading(true);
            sendRegisterRequest(payload).then(response => {
                setIsLoading(false);
                setRegistrationFormData({});
                const { data } = response;
                if (data.status.toLowerCase() === 'wrong') {
                    setError(data.message);
                    reject({
                        status: 'wrong',
                        message: 'Something went wrong. Please try again.'
                    })
                }
                if (data.status.toLowerCase() === 'ok') {
                    resolve({
                        status: 'ok',
                        message: data.message
                    });
                }
            }).catch(error => {
                reject({
                    status: 'wrong',
                    message: 'Something went wrong. Please try again.'
                })
                setIsLoading(false);
                setError("Something went wrong. Please try again.");
            });
        });
    };


    const onLogout = () => {
        setIsLoggedIn(false);
        setUser(null);
        setSession(null);
        clearUserSession();
    };

    return (
        <AuthProvider.Provider value={{
            onLogin,
            isLoggedIn,
            user,
            isLoading,
            session,
            error,
            onLogout,
            registrationFormData,
            setRegistrationFormData,
            onRegister
        }}>
            {children}
        </AuthProvider.Provider >
    );
};