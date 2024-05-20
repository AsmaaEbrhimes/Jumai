

import "./Creat.css";
import { Row, Col } from "react-bootstrap";
import camera from "../../Image/images.jpg";
import { useState, useRef } from "react";
import axios from "axios";
import Cookies from "cookie-universal";
import { ToastContainer, toast } from 'react-toastify';
import TabelProduct from "../tabelProdouct/TabbelProduct"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import Header from "../header/header"
import Footer from "../Footer/Footer"

const CreatProduct = () => {
    const navhome = useNavigate()
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const [Category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [amount, setAmount] = useState("");
    const [id, setid] = useState(null)
    const [dataUser, setdataUser] = useState([])

    const handleSelectedProductIdChange = () => {
        const finddata = dataUser.find((ele) => ele._id === id);
        if (finddata && finddata.image) {
            setImage(finddata.image);
            setName(finddata.name);
            setCategory(finddata.category);
            setDesc(finddata.description);
            setPrice(finddata.price);
            setAmount(finddata.amount);
        } else {
            console.log('لا يوجد صورة');
        }
    };
    const ref = useRef("");


    const reset = (e) => {
        e.preventDefault();
        const cookie = Cookies();
        const token = cookie.get('token');
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", desc);
        formData.append("price", price);
        formData.append("category", Category);
        formData.append("amount", amount);
        formData.append("image", image ? image : null);

        axios.patch(`https://backfood2-1traner.onrender.com/api/cart/update/${id}`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            toast.success('🦄 لقد تم تعديل المنتج بنجاح', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        })
            .catch((err) => {
                toast.error(err.response.data.msg, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            });
    };

    const handelImage = (e) => {
        const imageFile = e.target.files[0];
        if (!imageFile) {
            alert("يرجى تحديد صورة");
            return;
        }
        setImage(imageFile);
    };

    const supmitDataFromProduct = (e) => {
        e.preventDefault();
        const cookie = Cookies();
        const token = cookie.get("token");
        const headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        };

        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", desc);
        formData.append("price", price);
        formData.append("image", image);
        formData.append("category", Category);
        formData.append("amount", amount);

        axios
            .post(
                "https://backfood2-1traner.onrender.com/api/product/create",
                formData,
                { headers: headers }
            )
            .then((res) => {
                toast.success('🦄 لقد انشئت منتجك بنجاح', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                setTimeout(() => {
                    navhome("../content")
                }, 1500);
            })

            .catch((err) => {
                toast.error(err.response.data.msg, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            })
    };


    return (
        <>
            <Header />
            <div className="creat_product" id="formCreat" style={{ position: "relative", marginTop: "200px" }}>
                <h3>انشيء منتجك بسهولة على موقع جوميا للتسوق</h3>
                <p>يتطلب شحن التوصيل</p>
                <Row className="form_creat">
                    <Col xs="12" sm="12" md="6" className="creat_col">
                        <form className="form_creat_product">
                            <h5>Upload Your Products</h5>
                            <label className="upload" htmlFor="image_upload">
                                <img onClick={() => ref.current.click()} className="camera_image" src={camera} alt="" />
                            </label>
                            <input onChange={(e) => handelImage(e)} ref={ref} type="file" id="image_upload" />
                            {image && image instanceof File ? (
                                <img style={{ marginTop: "30px", height: "200px", width: "30%", marginBottom: "10px", borderRadius: "10px" }} src={URL.createObjectURL(image)} alt="" />
                            ) : image && typeof image === "string" ? (
                                <img style={{ marginTop: "30px", height: "200px", width: "30%", marginBottom: "10px", borderRadius: "10px" }} src={image} alt="" />
                            ) : null}
                            <input className="name_input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            <span className="name">* اضف عنوان المنتج الخاص بك</span>
                            <label>اضف وصف المنتج الخاص بك</label>
                            <textarea className="text_input" value={desc} onChange={(e) => setDesc(e.target.value)}>  </textarea>

                            <div className="flex_input">
                                <div>
                                    <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" className="input_price" />
                                    <span>* اضف سعر المنتج الخاص بك</span>
                                </div>

                                <div>
                                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="input_qty" />
                                    <span>* اضف الكمية الخاصة بالمنتج</span>
                                </div>
                            </div>

                            <label>حدد التصنيف الخاص بالمنتج </label>
                            <select className="select_input" value={Category} onChange={(e) => setCategory(e.target.value)}>
                                <option>Fashion</option>
                                <option>clothing Womens</option>
                                <option>supmarket</option>
                                <option>Kids</option>
                                <option>Beatuy</option>
                                <option>Acceroies Mopile</option>
                                <option>clothing children</option>
                                <option>computer</option>
                                <option>party-supplies</option>
                                <option>school-bag</option>
                                <option>tool-sports</option>
                            </select>

                            <div className="parent_btn">
                                <button onClick={supmitDataFromProduct} className="btn_send" type="submit">Creat</button>
                                <button className="btn_send" type="button" onClick={reset}>Reset</button>
                                <ToastContainer />
                            </div>
                        </form>
                    </Col>
                    <Col md="12">
                        <TabelProduct setid={setid} setdataUser={setdataUser} />
                    </Col>
                    <Col>
                        <div className="btn_action_product">
                            <a href="#formCreat"><button className="green">Creat</button></a>
                            <a href="#formCreat"><button onClick={handleSelectedProductIdChange} className="red">Reset</button></a>
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer />
        </>
    );
}

export default CreatProduct;












