import React from 'react';
import MapContainer from "../components/MapContainer";
import {Link} from 'react-router-dom'

const About = () => {
    return (<MapContainer>
        
        <Link to='/about' className="btn-primary">
        </Link>
    </MapContainer>
    );
};

export default About;