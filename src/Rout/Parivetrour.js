import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../context/UserContext';

const Parivetrour = ({children}) => {

    const {usre ,loder} =useContext(Authcontext)
    const location =useLocation();
    if(loder){
        return<div>loding..........</div>
    }

    if(usre && usre.uid){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default Parivetrour;