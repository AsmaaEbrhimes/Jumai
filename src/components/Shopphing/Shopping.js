


import "./Shopping.css"
import img_shopping from "../../Image/cart.668e6453.svg"
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cookies from "cookie-universal";
import { useState, useEffect } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Footer from "../Footer/Footer"
import ShieldSharpIcon from '@mui/icons-material/ShieldSharp';


import axios from "axios";

const Shopping = ({ valuerange }) => {
    const [productIds, setProductIds] = useState([]);
    const [showcart, setShowcart] = useState([])

    const getSupTotal = () => {
        const total = showcart?.reduce((acc, item) => {
            return acc + item.price;
        }, 0);
        const formattedTotal = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(total);
        return {
            total,
            formattedTotal
        };
    };


    const cookie = Cookies();
    const token = cookie.get('token');

    useEffect(() => {
        axios.get("https://backfood2-1traner.onrender.com/api/cart/All",
            {
                headers: {
                    'Authorization': `Bearer ${token} `
                }
            }).then((res) => {
                setShowcart(res.data)
            })
            .catch((err) => console.log(err))
    }, [])


    const delteProductfromShopping = (id) => {
        axios.delete(`https://backfood2-1traner.onrender.com/api/cart/delete/${id}`, {
            headers: {
                'Authorization': `Bearer ${token} `
            }
        }).then((res) => {
            setShowcart(del => del.filter((ele) => ele._id !== id))
        })
    }

    const deleteProductAll = () => {
        const idsToDelete = showcart.map((ele) => ele._id)
        // console.log(idsToDelete)
        setProductIds(idsToDelete)
        console.log(productIds)
        axios.delete("https://backfood2-1traner.onrender.com/api/cart/deleteAll", {
            _id:productIds,
            headers: {
                'Authorization': `Bearer ${token} `
            }
        }).then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }




    return (
        <>
            <Container>
                <div style={{ position: "relative", marginTop: "250px" }}>
                    <div className="supTotal">
                        <span className="green_price">total price: {getSupTotal().formattedTotal}</span>
                        <span className="item_lenght">length: {showcart?.length} </span>
                    </div>

                    <div className="content_shopping_header">
                        <img className="content_shopping_img" src={img_shopping} alt="" />
                        <div>
                            <p>تصفح الفئات واكتشف أفضل عروضنا!</p>
                            <Link style={{ textDecoration: 'none' }} to="/content">
                                <button>بدء التسوق</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <Row className="content_product_shopping" style={{ position: "relative" }}>
                    <Col xs="12" sm="12" md="9">
                        <div className="products_cart">
                            <h3>My Cart</h3>
                            {showcart && showcart.length > 1 && (
                                showcart.map((ele) => (
                                    <div key={ele._id} className="product_item" style={{ zIndex: "1-", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <img src={ele.image} alt="" />
                                        <p>{ele.name}</p>
                                        <DeleteForeverIcon style={{ fontSize: "40px", color: "red", cursor: "pointer", marginTop: "20px" }} onClick={() => delteProductfromShopping(ele._id)} />
                                    </div>
                                ))
                            )}
                        </div>
                    </Col>



                    <Col xs="12" md="3" style={{ background: "transparent", color: "white" }}>
                        <div>
                            <h5 style={{ padding: "10px", borderBottom: "1px solid darkgoldenrod", color: "black" }}>Order summary</h5>
                            <p style={{ color: "black" }}>Total:  <span style={{ color: "darkgoldenrod", fontSize: "20px" }}>{getSupTotal().formattedTotal}</span></p>
                            <Link to="/paypal" style={{ textDecoration: 'none' }}>
                                <p style={{ color: "white", background: "black", padding: "10px" }}>Checkout</p>
                            </Link>
                            <div className="d-flex" style={{ marginTop: "10px" }}>
                                <ShieldSharpIcon style={{ color: "green" }} />

                                <p style={{ color: "black" }}> Secure Checkout</p>

                            </div>
                            <button onClick={deleteProductAll} style={{ zIndex: "111", border: "none", padding: "10px", background: "darkgoldenrod", color: "white", width: "100%", marginTop: "10px" }}>Clear All Product</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Shopping;















