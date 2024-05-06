import SettingsIcon from '@mui/icons-material/Settings';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import React, { useState } from 'react';
import img_icon from "../../Image/jumia-2.jpg"
import flassale from "../../Image/FLASHSALE1170x60AR.png"
import { Container } from "react-bootstrap"
import egypt from "../../Image/download.jpg"
import Amerca from "../../Image/download.png"
import SettingDrawer from "../setting/DrawerSetting"
import "./header.css"
import Canvs from "../Canvs/CanvsShopping"
import AnchorTemporaryDrawer from "../drawer/Drawersetting"
import MenuIcon from '@mui/icons-material/Menu';
import axios from "axios"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Header = ({ changeAr, changeEn }) => {
    const [show, setShow] = useState(false);
    const [showopenDrawer, setShowopenDrawer] = useState(false);
    const [drawerSetting, setDrawerSetting] = useState(false);
    const [searchdata, setsearchdata] = useState([]);
    const [contentSearch, setcontentSearch] = useState([]);
    const [valueSearch, setvalueSearch] = useState("");
    const [block, setblock] = useState(false);

    const navigate = useNavigate();

    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => setShow(false);

    const changeLanguageToAr = (text) => {
        if (text === "ar") {
            changeAr();
        }
    }
    const changeLanguageToEn = (text) => {
        if (text === "en") {
            changeEn();
        }
    }

    const closedrawer = () => setShowopenDrawer(false);
    const openndrawer = () => setShowopenDrawer(true);

    const closeDrawerSetting = () => setDrawerSetting(false);
    const openDrawerSetting = () => setDrawerSetting(true);

    useEffect(() => {
        axios.get("https://backfood2-1traner.onrender.com/api/product/All")
            .then((res) => {
                setsearchdata(res.data);
            });
    }, []);

    const handleSearchResultClick = (category) => {

        if (category === "Fashion") {
            navigate("/fashion")

        } else if (category === "Kids") {
            navigate("/kids")
        } else if (category === "computer") {
            navigate("/computer")
        } else if (category === "Beatuy") {
            navigate("/beauty")
        }
        else if (category === "school-bag") {
            navigate("/schoolBag")
        }

        else if (category === "supmarket") {
            navigate("/supmarket")
        }

        else if (category === "clothing Womens") {
            navigate("/clothing")
        }

        else if (category === "tool-sports") {
            navigate("/toolsports")
        }

        else if (category === "party-supplies") {
            navigate("/part")
        }
        else if (category === "Acceroies Mopile") {
            navigate("/acceroiesMopile")
        }
        else if (category === "clothing children") {
            navigate("/game")
        }





    }

    const filteBySearch = (e) => {
        const searchTerm = e.target.value;
        setvalueSearch(searchTerm);
        const filteredData = searchdata.filter((item) => {
            return item.category.includes(valueSearch);
        })
        setcontentSearch(filteredData);
        setblock(filteredData.length > 0);
    }

    return (
        <>
            <div style={{ position: "fixed", width: "100%", top: "0", left: "0", zIndex: "111" }}>
                <SettingDrawer openDrawerSetting={openDrawerSetting} closeDrawerSetting={closeDrawerSetting} drawerSetting={drawerSetting} />
                <AnchorTemporaryDrawer openndrawer={openndrawer} closedrawer={closedrawer} showopenDrawer={showopenDrawer} />
                <div className="img_header"><img src={flassale} alt="" /></div>
                <div className='first_header'>
                    <div />
                    <div className='lang'>
                        <span onClick={() => changeLanguageToAr("ar")} >ar</span><img className='ar' src={Amerca} alt="" />
                        <span onClick={() => changeLanguageToEn("en")}>en</span><img className='en' src={egypt} alt="" />
                    </div>

                    <div />
                    <div />
                    <div onClick={openndrawer}>
                        <SettingsIcon style={{ color: "black", marginRight: "4px" }} />
                        <span>setting</span>
                    </div>
                </div>
                <div className="two_header">
                    <Container>
                        <Canvs handleShow={handleShow} handleClose={handleClose} show={show} />
                        <div className="flex_header">
                            <div onClick={handleShow} className="d-flex shopping"><p>سله التسوق</p><LocalMallIcon /></div>
                            
                            <Link to="/map" style={{ textDecoration: 'none' }}>
                            <div className="d-flex help">
                            <i class="cursor-pointer fa-solid fa-angle-down"></i>
                            <p>المساعده</p><i class="fa-solid fa-circle-question"></i>
                            </div>
                            </Link>
                            <div className="search"> <button className="btn_search">ابحث</button><input onChange={(e) => filteBySearch(e)} placeholder="ابحث عن المنتجات" type="text" />

                                {block &&
                                    <div className='content_search'>
                                        {contentSearch.map((ele) => (
                                            <div className='flex_content_search' key={ele.id} onClick={() => handleSearchResultClick(ele.category)}>
                                                <img src={ele.image} alt="" />
                                                <div>
                                                    <p>{ele.name}</p>
                                                    <p>{ele.price}$</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                }
                            </div>

                            <div>
                                <Link to="/content">
                                    <img style={{ cursor: "pointer" }} className="jumia" src={img_icon} alt="" />
                                </Link>
                            </div>

                            <MenuIcon onClick={openDrawerSetting} className='bars_header' />
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}
export default Header;
