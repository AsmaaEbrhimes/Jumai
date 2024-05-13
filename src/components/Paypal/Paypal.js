import { Row, Col, Container } from "react-bootstrap";
import { useEffect } from "react"
import payment from "../../Image/payments_3_1_200x.avif"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import "./Paypal.css"

const PaypalButtons = () => {
    useEffect(() => {
        window.paypal.Buttons({
            creatOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: 600.00
                        }
                    }]
                })
            },
            onAppprove: function (data, actions) {
                return actions.order.capture().then(function (details) {
                    alert("Tanks for paying dear" + details.payer.name.given_name)
                })
            }
        }).render('#paypal-button')

    }, [])
    
    return (
        <Container>
            <Row style={{ position: "relative", marginTop: "200px" }}>
                <Col xs="12" md="6" className="one_col_pay">
                    <div style={{ margin: "auto" }}>
                        <h5 style={{ color: "chocolate" }}>Asmaa Ebrhime</h5>
                        <h1>EGP 445.00</h1>
                    </div>
                    <div style={{ position: "relative", marginTop: "250px" }} className="word_paypal">
                        <span>Powerd by paypal</span>
                        <span>Terms</span>
                        <span>privacy</span>
                        <AccountBalanceIcon style={{ color: "chocolate" }} />
                    </div>
                </Col>

                <Col xs="12" md="6">
                    <div id="paypal-button"></div>
                    <div style={{ margin: "auto", textAlign: "center", position: "relative", marginTop: "200px" }}>
                        <img src={payment} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>


    )
}
export default PaypalButtons
