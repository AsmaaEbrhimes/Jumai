
import axios from 'axios';
import Cookies from "cookie-universal";
import { useEffect, useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Container } from 'react-bootstrap';
import Header from "../header/header"
import Footer from "../Footer/Footer"
import "./allmail.css"


function createData(name, calories, fat, carbs, protein, price) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

function Row({ user }) {
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        if (open) {
            const cookie = Cookies();
            const token = cookie.get('token');

            axios.get(`https://backfood2-1traner.onrender.com/api/users/${user.id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((res) => {
                    setUserData(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [open, user.id]);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell style={{ position: "relative", marginTop: "100px" }}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {user.name}
                </TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.phone}</TableCell>
                <TableCell align="right">{user.date}</TableCell>
            </TableRow>
            <TableRow >
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Mail
                            </Typography>
                            {userData && Array.isArray(userData.history) && userData.history.length > 0 && (
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Customer</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {userData.history.map((historyRow) => (
                                            <TableRow key={historyRow.date}>
                                                <TableCell component="th" scope="row">
                                                    {historyRow.date}
                                                </TableCell>
                                                <TableCell>{historyRow.customerId}</TableCell>
                                                <TableCell align="right">{historyRow.amount}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            )}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


Row.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                date: PropTypes.string.isRequired,
                customerId: PropTypes.string.isRequired,
                amount: PropTypes.number.isRequired,
            })
        ).isRequired
    }).isRequired
};

export default function AllMail() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const cookie = Cookies();
        const token = cookie.get('token');

        axios.get('https://backfood2-1traner.onrender.com/api/allusers', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div style={{position:"relative",marginTop:"200px"}}>
            <Header />

            <Container>
                <TableContainer className='overlay_content' component={Paper}>
                    <Table aria-label="collapsible table"style={{position:"relative"}}>
                        <TableHead style={{position:"relative"}}>
                            <TableRow>
                                <TableCell />
                                <TableCell align="left">UserName</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Phone</TableCell>
                                <TableCell align="right">Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <Row key={user.id} user={user} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <Footer />
        </div>
    );
}




























