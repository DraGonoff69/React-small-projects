// Update the import statement for UserContextProvider
import UserContextProvider from '../../context/USerContextProvider';

import React from 'react';
import Login from '../components/Login';
import Profile from '../components/Profile';

const Minicontext = () => {
    return (
        <UserContextProvider>
            <h1>HOWWWWDDDDYYYYYYY</h1>
            <Login />
            <Profile />
        </UserContextProvider>
    );
};

export default Minicontext;
