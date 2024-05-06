
import React,{ useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../header/header"
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Computer = () => {
    const [qty, setQty] = useState({});
    const [productbalon, setproductbalon] = useState([])
    const [value, setValue] = React.useState([100, 300]);
    useEffect(() => {
        axios.get("https://backfood2-1traner.onrender.com/api/product/All")
            .then((res) => {
                setproductbalon(res.data)
                console.log(productbalon)
            })
    }, [])

    const filtercomputeruyByCategore = productbalon.filter((ele) => ele.category === "computer")
    const handleSliderChange = (productId, newValue) => {
        setQty(prevQty => ({ ...prevQty, [productId]: newValue }));
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        const filterCategoryByPrice = productbalon.filter((ele) => {
            return ele.price < value[1] 
        });
        setproductbalon(filterCategoryByPrice);
    };

    const ReverDate = (order) => {
        if (order === "الاسم من أ-ي") {
            const sortData = filtercomputeruyByCategore.reverse()
            setproductbalon(sortData);
        }
    }

    const sortrDate = (order) => {
        if (order === "الاسم من أ-ي") {
            const sortData = filtercomputeruyByCategore.reverse()
            setproductbalon(sortData);
        }
    }
    return (
        <>
            <Header />
            <Container>
                <Row className="content_product_api" style={{ position: "relative", marginTop: "200px", minHeight: "200px" }}>
                    <Col xs="12" md="2">
                        <div>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    style={{ width: "100%" }}
                                >
                                    Rang Price
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Box sx={{
                                        width: '100%', marginTop: "30px",
                                        '& .MuiSlider-root': {
                                            color: 'yellow',
                                        },
                                    }}>
                                        <Slider
                                            getAriaLabel={() => 'Temperature range'}
                                            valueLabelDisplay="on"
                                            value={value}
                                            min={1000}  
                                            max={100000}
                                            onChange={handleChange}
                                        />
                                    </Box>



                                </AccordionDetails>
                            </Accordion>


                        </div>

                        <div style={{ marginTop: "20px" }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    style={{ width: "100%" }}
                                >
                                    filterByDate
                                </AccordionSummary>

                                <AccordionDetails>
                                    <div style={{ position: "relative", margin: "auto", textAlign: "center" }}>
                                        <button style={{ border: "1px solid yellow", position: "relative", padding: "10px" }} onClick={() => sortrDate("الاسم من أ-ي")}>ظهور اخر منتجات</button>
                                        <button style={{ border: "1px solid yellow", position: "relative", padding: "10px" }} onClick={() => ReverDate("الاسم من أ-ي")}>ظهور اخر منتجات</button>
                                    </div>

                                </AccordionDetails>
                            </Accordion>


                        </div>
                    </Col>

                    <Col md="10">
                        <Row>
                            {filtercomputeruyByCategore.map((item) => {
                                return (
                                    <Col key={item._id} xs={6} md={4} lg={3}>
                                        <div className="product_item_api">
                                            <Link key={item._id} to={`/Details/${item._id}`}>
                                                <img className="product_item_image_api" src={item.image} alt={item.description} />
                                            </Link>

                                            <Box sx={{
                                                width: '100%',
                                                '& .MuiSlider-root': {
                                                    color: 'yellow',
                                                },
                                                marginTop: "30px",
                                                textAlign: "center",
                                                marginLeft: "auto",
                                                marginBottom: "10px",
                                            }}>
                                                <Slider
                                                    value={qty[item._id]}
                                                    valueLabelDisplay="on"
                                                    min={0}  
                                                    max={300}
                                                    onChange={(event, newValue) => handleSliderChange(item._id, newValue)}
                                                />
                                            </Box>
                                            <p>{item.description}</p>
                                            <p>{item.price}</p>
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}


export default Computer;
