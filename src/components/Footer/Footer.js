import { Row, Col } from "react-bootstrap";
import jumai from "../../Image/imagesstart.jpg"
import googleimg from "../../Image/images (2).jpg"
import appel from "../../Image/images (2).png"
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import imgjumia from "../../Image/images (3).png"
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import "./Footer.css"
import { Container } from "react-bootstrap";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Footer = () => {
    return (
        <>
            <div className="one_flex_overlay">
                <Container>
                    <Row className="one_footer">

                        <Col xs="12" md="4"style={{marginTop:"50px"}}>
                                <div className="flex_list">
                                    <div>
                                        <h5>تنزيل تطبيق جوميا المجاني</h5>
                                        <p>احصل علي العديد من العروض الحصريه</p>
                                    </div>
                                    <img style={{ width: "40px", height: "50px", marginLeft: "10px" }} src={jumai} alt="" />
                                </div>
                                <div className="img_footer" style={{ marginTop: "40px" }}>
                                    <img style={{ width: "100px" }} src={googleimg} alt="" />
                                    <img style={{ width: "100px", marginLeft: "10px" }} src={appel} alt="" />
                                </div>
                          
                        </Col>

                        <Col xs="12" md="4" className="section_two_footer" style={{marginTop:"50px"}}>
                        
                            <h6>هل انت جديد علي جوميا</h6>
                            <p>اشترك في نشرتنا الاخباريه للحصول علي احدث العروض</p>

                            <div className="btn_footer">
                                <button>ذكر</button>
                                <button>مؤنث</button>
                            </div>

                            <input placeholder="ادخل بريدك الالكتروني" className="input_footer" /><AlternateEmailIcon className="email_footer" />
                            <div className="d-flex">

                                <div style={{ marginTop: "30px" }}>
                                    <p>أوافق على سياسة الخصوصية وملفات تعريف الارتباط لدى جوميا، وأعلم أنني يمكنني إلغاء</p>
                                    <p>الاشتراك في الرسائل الإخبارية في أي وقت.</p>
                                </div>
                                <Checkbox
                                    {...label}
                                    sx={{
                                        color: pink[800],
                                        '&.Mui-checked': {
                                            color: pink[600],
                                        },
                                    }}
                                />

                            </div>
                            <p style={{ color: "chocolate" }}>أوافق علي الشروط القانونية</p>
                        
                        </Col>





                        <Col md="4" style={{ textAlign: "right" , marginTop:"50px" }}>

                            <img className="img_footer" src={imgjumia} alt="" />
                            
                        </Col>

                    </Row>
                </Container>
            </div>


            <Row className="footer">
                <Col xs="6" md="3">
                    <ul className="footer_list_one">
                        <h4>جوميا دوليا</h4>
                        <li>الجزائر</li>
                        <li>نيجريا</li>
                        <li>المغرب</li>
                        <li>كندا</li>
                    </ul>
                </Col>


                <Col xs="6" md="3">
                    <ul>
                        <h4> زود ميبعاتك</h4>
                        <li>بيع علي جوميا</li>
                        <li>قاعده معرفه التاجر</li>
                        <li>ابدا بزنس مع جوميا</li>
                        <li>كن شريكا للخدمات اللوجستيه</li>
                    </ul>
                </Col>


                <Col xs="6" md="3">
                    <ul>
                        <h4>من نحن</h4>
                        <li>  خدمات جوميا للبيع</li>
                        <li>  </li>
                        <li>ابدا بزنس مع جوميا</li>
                        <li>كن شريكا للخدمات اللوجستيه</li>
                    </ul>
                </Col>

                <Col xs="6" md="3">
                    <ul>
                        <h4> تحتاج مساعده</h4>
                        <li>تواصل معنا</li>
                        <li>  مركز مساعده</li>
                        <li>اتصل بنا</li>
                        <li> روابط الدفع</li>
                    </ul>
                </Col>
            </Row>
        </>
    )
}


export default Footer;