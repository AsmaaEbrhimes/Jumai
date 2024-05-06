import product_1 from "../../Image/WeekendAR.png"
import product_2 from "../../Image/FashionAR.png"
import product_3 from "../../Image/HomeAR.png"
import product_4 from "../../Image/BeautyAR.png"
import product_5 from "../../Image/Eid.gif"
import product_8 from "../../Image/InstallmentsAR.png"
import product_9 from "../../Image/RedeemAR.png"
import product_10 from "../../Image/MadeinegyptAR.png"
import product_second_8 from "../../Image/400x200AR3.png"
import product_second_9 from "../../Image/400x200AR.png"
import product_second_10 from "../../Image/400x200AR2.png"
import product_second_11 from "../../Image/EASTER24_EGDB_OutdoorEssentials_AR.jpg"
import product_second_12 from "../../Image/572x250AR (2).png"
import product_second_13 from "../../Image/572x250AR.png"
import product_second_14 from "../../Image/572x250arr.png"
import last_product from "../../Image/DesktopAR (5).png"
import data from "../glopalData/GlopalData"
import "./Product.css"
import { Container, Col, Row } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom"


const Products = () => {
    return (
        <>
            <div style={{ backgroundColor: '#eee', padding: "10px" }}>
                <Container>
                    <Row className="frist_product">
                        <Carousel className="Carousel" interval={5000}>
                            <Carousel.Item>
                                <Row className="frist_product">
                                    <Col xs="2" sm="2" md="2"><img className="product_page" src={product_1} alt="" /></Col>
                                    <Col xs="2" sm="2" md="2"><img className="product_page" src={product_2} alt="" /></Col>
                                    <Col xs="2" sm="2" md="2"><img className="product_page" src={product_3} alt="" /></Col>
                                    <Col xs="2" sm="2" md="2"><img className="product_page" src={product_4} alt="" /></Col>
                                    <Col xs="2" sm="2" md="2"><img className="product_page" src={product_5} alt="" /></Col>

                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row className="frist_product">
                                    <Col xs="2" sm="2" md="2"><img className="product_page" src={product_9} alt="" /></Col>
                                    <Col xs="2" sm="2" md="2"><img className="product_page" src={product_10} alt="" /></Col>
                                    <Col xs="2" sm="2" md="2"><img className="product_page" src={product_8} alt="" /></Col>
                                    <Col xs="2" sm="2" md="2"><img className="product_page" src={product_1} alt="" /></Col>
                                    <Col xs="2" sm="2" md="2"><img className="product_page" src={product_2} alt="" /></Col>
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                    </Row>


                    <Row className="content_second_page">
                        <Col xs="12" sm="4" md="4" >
                            <img className="product_second_page" src={product_second_8} alt="" />
                        </Col>
                        <Col xs="12" sm="4" md="4">
                            <img className="product_second_page" src={product_second_9} alt="" />
                        </Col>
                        <Col xs="12" sm="4" md="4">
                            <img className="product_second_page" src={product_second_10} alt="" />
                        </Col>
                    </Row>

                    <Row className="last_product">
                        <Col xs="6" sm="6" md="6" xl="6"><img src={product_second_11} alt="" /></Col>
                        <Col xs="6" sm="6" md="6" xl="6"><img src={product_second_12} alt="" /></Col>
                        <Col xs="6" sm="6" md="6" xl="6"><img src={product_second_13} alt="" /></Col>
                        <Col xs="6" sm="6" md="6" xl="6"><img src={product_second_14} alt="" /></Col>
                    </Row>

                    <Row className="last_img">
                        <Col xs="12" sm="12" md="12" xl="12"><img className="page_product" src={last_product} alt="" /></Col>
                    </Row>

                    <div className="mainstyle flex_img_section">
                        {data.map((item, index) => (
                            <div key={index}>
                                <img className="img_main" src={item.mainimg} alt="" />
                            </div>
                        ))}
                    </div>


                    <div className="mainstyle flex_img_section">
                        {data.map((item, index) => (
                            <div key={index}>
                                <Link to={`/detailsGlopal/${item.id}`}>
                                    <img className="img2" src={item.img_section_2} alt="" />
                                </Link>

                            </div>
                        ))}
                    </div>


                    <div className="mainstyle flex_img_section">
                        {data.map((item, index) => (
                            <div key={index} >
                                <Link to={`/detailsGlopal/${item.id}`}>
                                    <img className="img2" src={item.img_section_3} alt="" />
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="mainstyle flex_img_section">
                        {data.map((item, index) => (
                            <div key={index}>
                                <Link to={`/detailsGlopal/${item.id}`}>
                                    <img style={{ width: "95%" }} src={item.img_section_4} alt="" />
                                </Link>
                            </div>
                        ))}
                    </div>


                    <div className="mainstyle flex_img_section">
                        {data.map((item, index) => (
                            <div key={index} xs="4" sm="4" md="1">
                                <Link to={`/detailsGlopal/${item.id}`}>
                                    <img style={{ width: "80%" }} className="img2" src={item.img_section_5} alt="" />
                                </Link>
                            </div>
                        ))}
                    </div>


                    <div className="mainstyle flex_img_section">
                        {data.map((item, index) => (
                            <div key={index} xs="4" sm="4" md="1">
                                <Link to={`/detailsGlopal/${item.id}`}>
                                    <img style={{ width: "85%" }} className="img2" src={item.img_section_6} alt="" />
                                </Link>
                            </div>
                        ))}
                    </div>







                </Container>
            </div >
        </>
    )
}


export default Products;