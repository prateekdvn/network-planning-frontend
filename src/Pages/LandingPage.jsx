import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import SideBar from '../Components/SideBar/SideBar';
import MapMainComponent from '../Components/MapPage/MapMainComponent';
function LandingPage() {
    return (
        <div>
        <NavBar/>
        <MapMainComponent/>
        <SideBar/>
        </div>
        
    );
}

export default LandingPage;