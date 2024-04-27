


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import ScrollTop from "../Scroll/Scroll";
import Sgaring from "../sharing/sharing";

import img_1 from "../../Image/DesktopAR (1).png";
import img_2 from "../../Image/DesktopAR (2).png";
import img_3 from "../../Image/DesktopAR (3).png";
import icon_1 from "../../Image/1.png";
import icon_2 from "../../Image/4.png";
import animate from "../../Image/218x184AR.gif";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import "./Content.css";

const Content = () => {
    const { t } = useTranslation();
    return (
        <>
            <div style={{ backgroundColor: '#eee', position:"relative", marginTop:"200px" }}>
                <Container>
                    <Sgaring />
                    <ScrollTop />
                    <Row className="row">
                        <Col xs="12" md="3" xl="3">
                            <ul className="list_content">
                                <Link to="/supmarket" style={{ textDecoration: 'none', color: "black" }}>
                                    <li><i className="fa-solid fa-apple-whole mr-2 ml-2 mb-2"></i>{t('supmarket')} </li>
                                </Link>
                                <Link to="/fashion" style={{ textDecoration: 'none', color: "black" }}>
                                    <li><i class="fa-solid fa-shirt"></i>{t('Fashion')}</li>
                                </Link>
                                <Link to="/beauty" style={{ textDecoration: 'none', color: "black" }}>
                                    <li><i className="fa-solid fa-x-ray mr-2 ml-2  mb-2"></i> {t('Healthy&beatuy')}</li>
                                </Link>
                                <Link to="/game" style={{ textDecoration: 'none', color: "black" }}>
                                <li><i className="fa-solid fa-baby mr-2 ml-2 mb-2"></i> {t('Babyproducts')}</li>
                                </Link>

                                <Link to="/acceroiesMopile" style={{ textDecoration: 'none', color: "black" }}>
                                <li><i class="fa-solid fa-mobile-retro"></i>AccerioseMopile</li>
                                </Link>

                                <Link to="/schoolBag" style={{ textDecoration: 'none', color: "black" }}>
                                <li><i class="fa-solid fa-suitcase-rolling"></i>Bag</li>
                                </Link>
                                <Link to="/clothing" style={{ textDecoration: 'none', color: "black" }}>
                                <li><i className="fa-solid fa-blender-phone  mr-2 ml-2 mb-2"></i>clothingWomen</li>
                                </Link>
                                <Link to="/kids" style={{ textDecoration: 'none', color: "black" }}>
                                <li><i class="fa-solid fa-user-astronaut"></i>Kids</li>
                                </Link>
                                <Link to="/computer" style={{ textDecoration: 'none', color: "black" }}>
                                <li><i className="fa-solid fa-desktop mr-2 ml-2  mb-2"></i> {t('computer')}</li>
                                </Link>
                                <Link to="/toolsports" style={{ textDecoration: 'none', color: "black" }}>
                                <li><i className="fa-solid fa-futbol mr-2 ml-2 mb-2"></i> {t('sportingGoods')}</li>
                                </Link>
                                <Link to="/part" style={{ textDecoration: 'none', color: "black" }}>
                                <li><i className="fa-solid fa-vr-cardboard mr-2 ml-2  mb-2"></i> {t('gmaing')}</li>
                                </Link>
                            </ul>
                        </Col>

                        <Col xs="12" md="6" xl="7" >
                            <div className="center_img">
                                <Carousel className="Carousel" interval={5000}>
                                    <Carousel.Item>
                                        <img
                                            className="img_slider"
                                            src={img_1}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="img_slider"
                                            src={img_2}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="img_slider"
                                            src={img_3}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>

                                </Carousel>
                            </div>
                        </Col>

                        <Col xs="12" md="2" xl="2">
                            <div>
                                <div className="right_content">
                                    <div className="flex_selling"><img src={icon_1} alt="" /><div><h3>{t('Sale In jumia')}</h3><p>{t("increse seles")}</p></div></div>
                                    <div className="flex_selling"><img src={icon_1} alt="" /><div><h3>{t("discount")}</h3><p>{t("save")}</p></div></div>
                                    <div className="flex_selling"><img src={icon_2} alt="" /><div><h3>{t("confirmation")}</h3><p>{t("in sales")}</p></div></div>
                                </div>
                                <div className="animated"><img src={animate} alt="" /></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Content;
