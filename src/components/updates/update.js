
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Cookies from "cookie-universal";
import axios from 'axios';
import "./update.css"

function MyVerticallyCenteredModal({ datauser, ...props }) {
    const [name, setName] = useState("")
    const [emailUpdate, setEmailUpdate] = useState("")
    const [phoneupdate, setPhoneupdate] = useState("")

    const cookie = Cookies();
    const token = cookie.get('token');

    const id = datauser ? datauser._id : null;

    const UpdateDataUser = (e) => {
        e.preventDefault();
        axios.put(`https://backfood2-1traner.onrender.com/api/user/update/${id}`, {
            _id: datauser._id,
            userName: name,
            email: emailUpdate,
            phone: phoneupdate
        }, {
            headers: {
                'Authorization': `Bearer ${token} `
            }
        }).then((res) => console.log(res))
          .catch((err) => console.log(err))
    }

    if (!datauser) {
        return null;
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="custom-modal"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <form onSubmit={UpdateDataUser} className='form_update'>
                    <label>Enter Your Name</label>
                    <input value={datauser.userName} onChange={(e) => setName(e.target.value)} type="text" />
                    <label>Enter Your Email</label>
                    <input value={datauser.email} onChange={(e) => setEmailUpdate(e.target.value)} type="email" required />
                    <label>Enter Your Phone</label>
                    <input value={datauser.phone} onChange={(e) => setPhoneupdate(e.target.value)} type="number" />
                    <button className='btn_update' type='submit'>Update</button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function UpdataPopup({ onHide, modalShow, id }) {
    const [datauser, setDatauser] = useState(null)
    const cookie = Cookies();
    const token = cookie.get('token');

    useEffect(() => {
        if (modalShow && id) {
            axios.get(`https://backfood2-1traner.onrender.com/api/user/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token} `
                }
            }).then((res) => setDatauser(res.data))
              .catch((err) => console.log(err))
        }
    }, [modalShow, id, token]);

    return (
        <>
            <MyVerticallyCenteredModal
                datauser={datauser}
                show={modalShow}
                onHide={onHide}
            />
        </>
    );
}

export default UpdataPopup;
