import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"

import Home from '../pages/Home';
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import SearchList from '../pages/SearchList';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ThankYou from '../pages/ThankYou';
import About from "../pages/About";
import Gallery from "../pages/Gallery";

const Routers = () => {
    return (
    <Routes>
        <Route path='/' element={<Navigate to='home'/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/tour' element={<Tours />}/>
        <Route path='/tour/:id' element={<TourDetails />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/tours/search' element={<SearchList />}/>
        <Route path='/thank-you' element={<ThankYou />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/gallery' element={<Gallery />}/>
    </Routes>
    )
};

export default Routers;