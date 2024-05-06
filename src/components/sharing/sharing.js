import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState , useEffect } from 'react';
import img_winter from "../../Image/smiley-girl-holding-shopping-bags_23-2148610219.jpg"
import "./Sharinh.css"
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">

                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='content_supscripe'>
                    <img className='supscripe_img' src={img_winter} alt="" />
                    <div className='supscripe_tiltle'>
                        <h3>NEWSLETTERS</h3>
                        <p>Sign up to our newsletter and get exclusive deals you won find any where else straight to your inbox! </p>
                        <input placeholder='Enter Email Adress Here' type="text" />
                        <button>SUPSCRIPE</button>
                        <div className='flex'>
                        <span>Don't show this popup again</span>
                        </div>
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}



function Sgaring() {
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        const isPopupShown = sessionStorage.getItem('isPopupShown');
        if (!isPopupShown) {
            setModalShow(true);
            sessionStorage.setItem('isPopupShown', true);
        }
    }, []);

    return (
        <>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}


export default Sgaring
