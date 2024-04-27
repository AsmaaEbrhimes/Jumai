import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { useEffect } from 'react';
import "./drawerSettinng.css"
import { Link } from 'react-router-dom';
export default function SettingDrawer({ openDrawerSetting, closeDrawerSetting, drawerSetting }) {

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        if (open) {
            closeDrawerSetting();
        }
    };
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            style={{ backgroundColor: "bisque", height: "100vh" }}
        >
            <List className='categore'>
                <h1 className='categores_header'>قسائم الشراء</h1>

                <ul className='settingdrawer_list'>
                    <Link to="/supmarket" style={{ textDecoration: 'none', color: "black" }}>
                        <li>supmarket<i className="fa-solid fa-apple-whole mr-2 ml-2 mb-2"></i></li>
                    </Link>
                    <Link to="/fashion" style={{ textDecoration: 'none', color: "black" }}>
                        <li>Fashion<i class="fa-solid fa-shirt"></i></li>
                    </Link>
                    <Link to="/beauty" style={{ textDecoration: 'none', color: "black" }}>
                        <li>Healthy&beatuy<i className="fa-solid fa-x-ray mr-2 ml-2  mb-2"></i></li>
                    </Link>
                    <Link to="/game" style={{ textDecoration: 'none', color: "black" }}>
                        <li>Babyproducts<i className="fa-solid fa-baby mr-2 ml-2 mb-2"></i></li>
                    </Link>

                    <Link to="/acceroiesMopile" style={{ textDecoration: 'none', color: "black" }}>
                        <li>AccerioseMopile<i class="fa-solid fa-mobile-retro"></i></li>
                    </Link>

                    <Link to="/schoolBag" style={{ textDecoration: 'none', color: "black" }}>
                        <li>Bag<i class="fa-solid fa-suitcase-rolling"></i></li>
                    </Link>
                    <Link to="/clothing" style={{ textDecoration: 'none', color: "black" }}>
                        <li>clothingWomen<i className="fa-solid fa-blender-phone  mr-2 ml-2 mb-2"></i></li>
                    </Link>
                    <Link to="/kids" style={{ textDecoration: 'none', color: "black" }}>
                        <li>Kids<i class="fa-solid fa-user-astronaut"></i></li>
                    </Link>
                    <Link to="/computer" style={{ textDecoration: 'none', color: "black" }}>
                        <li>computer<i className="fa-solid fa-desktop mr-2 ml-2  mb-2"></i></li>
                    </Link>
                    <Link to="/toolsports" style={{ textDecoration: 'none', color: "black" }}>
                        <li>sportingGoods<i className="fa-solid fa-futbol mr-2 ml-2 mb-2"></i></li>
                    </Link>
                    <Link to="/part" style={{ textDecoration: 'none', color: "black" }}>
                        <li>gmaing<i className="fa-solid fa-vr-cardboard mr-2 ml-2  mb-2"></i></li>
                    </Link>
                </ul>
            </List>
        </Box>
    );

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (openDrawerSetting && event.target.closest('.MuiDrawer-root') === null) {
                closeDrawerSetting();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [openDrawerSetting, closeDrawerSetting]);

    return (
        <div>
            <Drawer
                anchor="right"
                open={drawerSetting}
                onClose={closeDrawerSetting}
            >
                {list()}
            </Drawer>
        </div>
    );
}