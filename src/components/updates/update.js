
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Cookies from "cookie-universal";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "./update.css"

function MyVerticallyCenteredModal({ datauser, handleUpdate, ...props }) {
    const [name, setName] = useState("");
    const [emailUpdate, setEmailUpdate] = useState("");
    const [phoneupdate, setPhoneupdate] = useState("");
    const [role, setRole] = useState("");
useEffect(() => {
    setName(datauser?.userName)
    setEmailUpdate(datauser?.email)
    setPhoneupdate(datauser?.phone)
}, [])
  

    const cookie = Cookies();
    const token = cookie.get('token');
    const id = datauser ? datauser._id : null;

    const UpdateDataUser = (e) => {
        e.preventDefault();
        const userData = {
            _id: datauser._id,
            userName: name,
            email: emailUpdate,
            phone: phoneupdate,
            role: role
        };

        axios.patch(`https://backfood2-1traner.onrender.com/api/user/update/${id}`, userData, {
            headers: {
                'Authorization': `Bearer ${token} `
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
            handleUpdate();
            props.onHide();
        }).catch((err) => {
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
                    <input value={name} selected onChange={(e) => setName(e.target.value)} type="text" />
                    <label>Enter Your Email</label>
                    <input value={emailUpdate} onChange={(e) => setEmailUpdate(e.target.value)} type="email" required />
                    <label>Enter Your Phone</label>
                    <input value={phoneupdate} onChange={(e) => setPhoneupdate(e.target.value)} type="number" />

                    <select onChange={(e) => setRole(e.target.value)}>
                        <option selected>None</option>
                        <option value="admin">ADMIN</option>
                        <option value="user">USER</option>
                    </select>
                    <button className='btn_update' type='submit'>Update</button>
                    <ToastContainer />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function UpdataPopup({ onHide, modalShow, id, handleUpdate }) {
    const [datauser, setDatauser] = useState(null)
    const cookie = Cookies();
    const token = cookie.get('token');

    useEffect(() => {
        if (modalShow && id) {
            axios.get(`https://backfood2-1traner.onrender.com/api/user/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token} `
                }
            }).then((res) => {
                setDatauser(res.data)

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
        }
    }, [modalShow, id, token]);

    return (
        <>
            <MyVerticallyCenteredModal
                datauser={datauser}
                show={modalShow}
                onHide={onHide}
                handleUpdate={handleUpdate}
            />
        </>
    );
}

export default UpdataPopup;


























