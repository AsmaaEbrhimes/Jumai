
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from "axios";
import Cookies from "cookie-universal";
import { useState, useEffect } from "react";
import shopping from "../../Image/images (1).jpg"


import { Link } from 'react-router-dom';
import "./Canvs.css"
function Canvs({ handleShow, handleClose, show }) {
    const [datashopping, setDatashopping] = useState([])
    const cookie = Cookies();
    const token = cookie.get('token');

    useEffect(() => {
        axios.get("https://backfood2-1traner.onrender.com/api/cart/All",
            {
                headers: {
                    'Authorization': `Bearer ${token} `
                }
            }).then((res) => setDatashopping(res.data))
            .catch((err) => console.log(err))

    }, [])


    const deleteProduct = (id) => {
        axios.delete(`https://backfood2-1traner.onrender.com/api/cart/delete/${id}`, {
            headers: {
                'Authorization': `Bearer ${token} `
            }
        }).then((res) => {
          
            setDatashopping(del => del.filter((ele) => ele._id !== id))
        })
    }
    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{background:"#d7a40d",width:"100%",position:"absolute", left:"0px",padding:"20px",color:"white", paddingTop:"40px",marginBottom:"20px"}}>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {datashopping && datashopping.length > 0 ? (
                        <>
                            {datashopping.map((ele) => (
                                <div key={ele._id} className='show_cart'>
                                    <div className='flex'>
                                        <div>
                                            <img src={ele.image} alt="" />
                                        </div>
                                        <div className='details_cart'>
                                            <p style={{fontSize:"13px",margin:"auto"}}>{ele.name}</p>
                                            <p style={{padding:"15px",color:"#d7a40d"}}>{ele.price}$</p>
                                        </div>
                                        <span onClick={() => deleteProduct(ele._id)}>X</span>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <img className='imge_no_products' src={shopping} alt="No Products" />
                    )}
                    <Link style={{ textDecoration: 'none'}} to="/shopping">
                    <button className='btn_shopping'>الزهاب الي عربه التسوق</button>
                    </Link>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}



export default Canvs;