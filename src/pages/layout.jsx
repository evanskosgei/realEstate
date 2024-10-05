/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import FeatureProperty from '../components/feature_property';
import Footer from '../components/footer';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <FeatureProperty />
            <Footer/>
        </div>
    )
}

export default Layout;