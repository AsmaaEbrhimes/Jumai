


import * as React from 'react';
import axios from 'axios';
import Cookies from "cookie-universal";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import Header from "../header/header"
import Footer from "../Footer/Footer"
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import AcseptMale from "../Acsept/Acsept"
import RejectMale from "../Reject/Rejects"
import OrderUser from "../Order/Order"
const VirtuosoTableComponents = {
    Scroller: React.forwardRef((props, ref) => (
        <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
        <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
    ),
    TableHead,
    TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
    TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

const columns = [
    {
        width: 100,
        label: 'ID',
        dataKey: '_id',
    },
    {
        width: 200,
        label: 'Email',
        dataKey: 'email',
    },
    {
        width: 200,
        label: 'Phone',
        dataKey: 'phone',
    },
    {
        width: 200,
        label: 'Username',
        dataKey: 'userName',
    }
];

export default function TabelRequests() {
    const [users, setUsers] = useState([])
    const [IdMale, setIdMale] = useState('')
    const [OpenModelAcept, setOpenModelAcept] = useState(false);
    const [OpenModelReject, setOpenModelReject] = useState(false);
    const [OpenModelOrder, setOpenModelOrder] = useState(false);


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



    const showModelAccept = (id) => {
        setIdMale(id)
        setOpenModelAcept(true)
    }

    const ShowModelReject = (id) => {
        setIdMale(id)
        setOpenModelReject(true)
    }
    const ShowModelOrder = (id) => {
        setIdMale(id)
        setOpenModelOrder(true)
    }

    const closeModelAccept = () => setOpenModelAcept(false)
    const closeModelReject = () => setOpenModelReject(false)
    const closeModelOrder = () => setOpenModelOrder(false)

    function rowContent(_index, row) {
        return (
            <React.Fragment>
                {columns.map((column) => (
                    <TableCell
                        key={column.dataKey}
                        align={column.numeric || false ? 'right' : 'left'}
                    >
                        {row[column.dataKey]}

                    </TableCell>
                ))}
                <HelpIcon onClick={() => ShowModelOrder(row._id)} style={{ color: "green", marginRight: "20px", cursor: "pointer" }} />
                <button onClick={() => showModelAccept(row._id)} style={{ background: "green", color: "white", padding: "5px", border: "none", borderRadius: '5px', marginRight: "10px", cursor: "pointer" }}>Accept</button>
                <button onClick={() => ShowModelReject(row._id)} style={{ background: "red", color: "white", padding: "5px", border: "none", borderRadius: '5px', cursor: "pointer" }}>Reject</button>
            </React.Fragment>
        );
    }

    return (
        <>
            <Header />
            <div style={{ background: "242, 204, 154" }}>
                <Container>
                    <OrderUser IdMale={IdMale} users={users} closeModelOrder={closeModelOrder} OpenModelOrder={OpenModelOrder} />
                    <RejectMale closeModelReject={closeModelReject} OpenModelReject={OpenModelReject} />
                    <AcseptMale closeModelAccept={closeModelAccept} OpenModelAcept={OpenModelAcept} />
                        <Paper style={{ height: 400, width: '100%', position: "relative", marginTop: "200px", minHeight: "400px", marginBottom: "100PX" }}>
                            <Table style={{  overflowX: "auto" }}>
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell key={column.dataKey} align={column.numeric || false ? 'right' : 'left'}>
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                            </Table>
                            <TableVirtuoso

                                data={users}
                                components={VirtuosoTableComponents}
                                itemContent={rowContent}
                            />
                        
                        </Paper>
                    

                </Container>
                </div>
                <Footer />
            </>
            );
}
