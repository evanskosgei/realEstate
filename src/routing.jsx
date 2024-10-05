/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />} />
        </Routes>
    )
}

export default Routing;