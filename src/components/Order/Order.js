import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useEffect } from 'react';
import axios from 'axios';
import Cookies from "cookie-universal";

export default function OrderUser({ IdMale, users, closeModelOrder, OpenModelOrder }) {
    const handleClose = () => {
        closeModelOrder()
    };




    const checkOrder = () => {
        const cookie = Cookies();
        const token = cookie.get('token');
        const finduser = users.find((ele) => ele._id === IdMale);

        if (finduser) {
            axios.get("https://backfood2-1traner.onrender.com/api/orders/checkout", {
                params: {
                    _id: finduser._id
                },
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => console.log(res))
                .catch((err) => console.log(err));

        } else {
            console.log("User not found");
        }
    };


    useEffect(() => {
        checkOrder()
    }, [])




    return (
        <React.Fragment>
            <Dialog
                open={OpenModelOrder}
                onClose={handleClose}
            >

                <DialogContent>
                    <Box >
                        <Button onClick={checkOrder}>click</Button>
                    </Box>
                </DialogContent>

                <DialogActions>
                    <Button style={{ background: "red", color: "white" }} onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}














