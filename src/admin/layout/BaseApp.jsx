import React, { useLayoutEffect, useState} from 'react'
import useWindowSize from '../../hooks/useWindowSize';
import Header from '../../components/Header';
import MinimumWidthAlert from '../../components/MinimumWidthAlert';
import Sidebar from '../../components/Sidebar';
import { Outlet } from 'react-router-dom';


const AppMains = () => {
    return (
        <div className="dashboard-wrapper" style={dashboardWrapperStyle}>
            {/* <Sidebar open={open} setOpen={setOpen} /> */}
            <div className="sidebar bg-dark" style={sidebarStyle}></div>
            <div className="dashboard-mains" style={dashboardMainStyle}>
                <Outlet />
            </div>
        </div>
    )
}

const BaseApp = () => {
    const [width, height] = useWindowSize();
    const [open, setOpen] = useState(true);
    console.log(width, height);

    return (
        <>
            <Header />
            { (width < 800) 
                ? <MinimumWidthAlert />
                : <AppMains />
            }
            
        </>
    )
}


export default BaseApp;

const dashboardWrapperStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    boxSizing: 'border-box'
}

const sidebarStyle = {
    width: '20%',
    height: '100vh'
}

const dashboardMainStyle = {
    width: '80%'
}
