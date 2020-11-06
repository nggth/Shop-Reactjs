import React from 'react';
import MapContainer from '../components/MapContainer';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <MapContainer>
                <Link to='/about' className="btn-primary">
                </Link>
            </MapContainer>
        </div>
    );
};

export default About;
