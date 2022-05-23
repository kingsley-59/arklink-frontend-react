import React from 'react'
import {Collapse} from 'react-bootstrap'
import {styled, useStyletron} from 'baseui';
import {FaBars} from 'react-icons/fa';
import logo from '../assets/images/logo.svg'
import SideNavListItem from './SideNavListItem';
import { menuData } from '../assets/constant';

const SidebarHeader = () => {
    return (
        <div className="sidebar-header w-100 p-3">
            <span className="h3"><FaBars /> Sidebar</span>
        </div>
    )
}

const AltSideBar = ({open, setOpen}) => {
    const sidebarSection = {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        width: '30%',
        maxWidth: '255px',
        minWidth: '100px', 
        backgroundColor: '#363740'
    }
    return (
        <section className='' >
            <Collapse in={true} dimension='width'>
                <div className="sidebar-wrapper p-3 text-center" style={sidebarSection}>
                    <button className="btn btn-secondary btn-lg mx-auto" onClick={() => setOpen(false)}>Close</button>
                </div>
            </Collapse>
        </section>
    );
}

// const Sidebar = ({open, setOpen}) => {

//     const [css] = useStyletron();

//     return (
//         <SidebarWrapper className={css({
//             '@media (max-width: 768px)': {
//                 display: open ? 'block' : 'none',
//             }
//         })}>
//             <div className={css({
//                 position: 'fixed',
//                 top: '0',
//                 left: '0',
//                 width: '100vw',
//                 background: 'rgba(0, 0, 0, 0.5)',
//                 height: '100vh',
//                 zIndex: '-1',
//                 display: 'none',

//                 '@media (max-width: 768px)': {
//                     display: open ? 'block' : 'none',
//                 }
//             })}
//                 onClick={() => setOpen(false)}
//             />
//             <Logo>
//                 <img className={css({
//                     width: '2rem',
//                     height: '2rem',
//                     marginRight: '0.5rem',
//                 })} src={logo} alt="logo" />
//                 Dashboard Kit
//             </Logo>

//             {
//                 menuData.map(({ icon, title, active }, index) => (
//                     <SideNavListItem key={index} active={active} title={title}>
//                         {icon}
//                     </SideNavListItem>
//                 ))
//             }
//         </SidebarWrapper>
//     )
// }

export default AltSideBar

// const SidebarWrapper = styled('section', {
//     position: 'fixed',
//     top: '0',
//     left: '0',
//     width: '100%',
//     maxWidth: '255px',
//     height: '100vh',
//     background: '#363740',
//     zIndex: '1',
//     overflowX: 'hidden',
// });

// const Logo = styled('div', {
//     padding: '2.5rem 2rem',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '1.25rem',
//     color: '#f2f2f2',
//     fontWeight: 'bold',
//     boxSizing: 'border-box',
//     background: 'none',
// })