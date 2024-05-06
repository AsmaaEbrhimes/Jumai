

import React, { useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import Person3Icon from '@mui/icons-material/Person3';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import "./Drawer.css"
import { Link } from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LogoutIcon from '@mui/icons-material/Logout';
import Cookies from "cookie-universal";
import RequestPageIcon from '@mui/icons-material/RequestPage';



export default function AnchorTemporaryDrawer({ showopenDrawer, closedrawer }) {
    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        if (open) {
            closedrawer();
        }
    };
const Logout=()=>{
    const cookies = Cookies();
    cookies.remove("token");
}



    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => toggleDrawer(true)}
            onKeyDown={() => toggleDrawer(true)}
            style={{ backgroundColor: "bisque", height: "100vh" }}

        >
            <List style={{ padding: "10px", top: "10px" }}>
                <div className='flex flex_item_setting' style={{ position: "relative", marginTop: "20px" }}>

                    <PaletteIcon style={{ color: "brown" }} />
                    <Link style={{ textDecoration: 'none', marginBottom: "20px" }} to="/Dashbord">
                        <h5 style={{ color: 'black' }}>Dashbord</h5>
                    </Link>

                </div>

                <div className='flex flex_item_setting' style={{ position: "relative", marginTop: "20px" }}>
                    <RequestPageIcon style={{ color: "brown" }} />
                    <Link style={{ textDecoration: 'none', marginBottom: "20px" }} to="/tabelRequests">
                        <h5 style={{ color: 'black' }}>Requests</h5>
                    </Link>
                </div>

                <div className='flex flex_item_setting' style={{ position: "relative", marginTop: "20px" }}>
                    <Person3Icon style={{ color: "brown" }} />
                    <Link style={{ textDecoration: 'none', marginBottom: "20px" }} to="/">
                        <h5 style={{ color: 'black' }}>Register</h5>
                    </Link>
                </div>

                <div className='flex flex_item_setting' style={{ position: "relative", marginTop: "20px" }}>
                    <StorefrontIcon style={{ color: "brown" }} />
                    <Link style={{ textDecoration: 'none', marginBottom: "20px" }} to="/creat">
                        <h5 style={{ color: 'black' }}>store</h5>
                    </Link>
                </div>

                <div className='flex flex_item_setting' style={{ position: "relative", marginTop: "20px" }}>
                    <AttachEmailIcon style={{ color: "brown" }} />
                    <Link style={{ textDecoration: 'none', marginBottom: "20px" }} to="/allmail">
                        <h5 style={{ color: 'black' }}>All Mail</h5>
                    </Link>
                </div>

                <div className='flex flex_item_setting' style={{ position: "relative", marginTop: "20px" }}>
                    <LogoutIcon onClick={Logout} style={{ color: "brown", cursor:"pointer" }}/>
                        <h5  style={{ color: 'black' }}>Logout</h5>
                </div>

            </List>
            <Divider />
        </Box>
    );


    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (showopenDrawer && event.target.closest('.MuiDrawer-root') === null) {
                closedrawer();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [showopenDrawer, closedrawer]);

    return (
        <div>
            <Drawer
                anchor="right"
                open={showopenDrawer}
                onClose={closedrawer}
            >
                {list()}
            </Drawer>
        </div>
    );
}
