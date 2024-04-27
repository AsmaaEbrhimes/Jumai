

import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../header/header"
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
const Supermarket = () => {
    const [productbalon, setproductbalon] = useState([])
    const [qty, setQty] = useState({});
    useEffect(() => {
        axios.get("https://backfood2-1traner.onrender.com/api/product/All")
            .then((res) => {
                setproductbalon(res.data)

                console.log(productbalon)

            })
    }, [])



    const filtersupmarketByCategore = productbalon.filter((ele) => ele.category === "supmarket")
    const handleSliderChange = (productId, newValue) => {
        setQty(prevQty => ({ ...prevQty, [productId]: newValue }));
    };
    return (
        <>
            <Header />
            <Container>
                <Row className="content_product_api"style={{position:"relative",marginTop:"200px",minHeight:"200px"}}>
                    {filtersupmarketByCategore.map((item) => (
                        <Col key={item.id} xs={6} md={4} lg={3}>

                            <div className="product_item_api">
                                <Link key={item._id} to={`/Details/${item._id}`} >
                                    <img className="product_item_image_api" src={item.image} alt={item.description} />
                                </Link>
                                <Box sx={{
                                    width: { xs: '100px', sm: '200px' },
                                    '& .MuiSlider-root': {
                                        color: 'yellow',
                                    },
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                }}>
                                    <Slider
                                        value={qty[item._id]}
                                        valueLabelDisplay="on"
                                        min={0}
                                        max={100}
                                        onChange={(event, newValue) => handleSliderChange(item._id, newValue)}
                                    />
                                </Box>
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </>
    );
}


export default Supermarket;
