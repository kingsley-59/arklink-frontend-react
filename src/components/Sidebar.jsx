import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

// const SidebarHeader = () => {
//     return (
//         <div className="sidebar-header w-100 p-3">
//             <span className="h3"><FaBars /> Sidebar</span>
//         </div>
//     )
// }

const SideBar = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()
    const handleSignOut = () => {
        logout();
        navigate('/login')
    }
    return (
        <div className='w-100 h-100 p-3 bg-dark' style={{position: 'relative'}}>
            <div className="sidebar-header p-3">
                <span className="text-white h4 fw-bold">Arklink</span>
            </div>
            <hr className='text-white' />
            <div className="sidebar-menu">
                <Link to={'/admin'} className='text-decoration-none'><div className="menu-item p-3 text-white active">Overview</div></Link>
                <Link to={'/admin/products'} className='text-decoration-none'><div className="menu-item p-3 text-white">Products</div></Link>
                <Link to={'/admin/messages'} className='text-decoration-none'><div className="menu-item p-3 text-white">Messages</div></Link>
                <Link to={'/admin/subscribers'} className='text-decoration-none'><div className="menu-item p-3 text-white">Subscribers</div></Link>
                <Link to={'/admin/gallery'} className='text-decoration-none'><div className="menu-item p-3 text-white">Gallery</div></Link>
            </div>
            <div className="sidebar-footer px-3" style={{position: 'absolute', bottom: 0, left: 0}}>
                <div className="menu-item p-3 text-white" onClick={() => handleSignOut()}>Log out</div>
                <div className="menu-item p-3 text-white">Change password</div>
            </div>
        </div>
    )
}

export default SideBar;
