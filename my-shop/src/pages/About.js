import React from 'react';
import MapContainer from '../components/MapContainer';
import InfoShop from '../components/InfoShop';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <InfoShop/>
            <MapContainer>
                <Link to='/about' className="btn-primary">
                </Link>
            </MapContainer>
            <Footer/>
            
        </div>
    );
};

export default About;
