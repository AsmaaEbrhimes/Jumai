


import React, { useState, useEffect } from "react";
import axios from 'axios';
import Cookies from "cookie-universal";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'description', headerName: 'Description', width: 130 },
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'image', headerName: 'Image', width: 100, renderCell: (params) => (<img src={params.value} alt="Product" style={{ width: 100, height: "50px" }} />) },
    { field: 'amount', headerName: 'Amount', width: 200 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
];

const TabelProduct = ({ setid, setdataUser }) => {
    const [selectedRowIds, setSelectedRowIds] = useState([]);
    const [showcart, setShowcart] = useState([]);
    const cookie = Cookies();
    const token = cookie.get('token');

    useEffect(() => {
        axios.get("https://backfood2-1traner.onrender.com/api/product/All", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setShowcart(res.data);
                setdataUser(res.data)
            })
            .catch((err) => console.log(err));
    }, []);


    const handleSelectionModelChange = (selectionModel) => {
        setSelectedRowIds(selectionModel);
        const selectedId = selectionModel.length > 0 ? selectionModel[selectionModel.length - 1] : null;
        if (selectedId) {

            setid(selectedId);
        }
    };




    return (
        <div style={{

            display: "block",
            margin: "auto",
            overflowX: "auto",
            maxWidth: '70%',
            marginTop: "40px",
           maxHeight:"50%"
           
        }}>
            <DataGrid
                rows={showcart}
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={10}
                checkboxSelection
                pagination
                autoHeight
                selectionModel={selectedRowIds}
                style={{ overflowX: 'auto' }} 
                onRowSelectionModelChange={handleSelectionModelChange}

               
            />
        </div>
    );
};

export default TabelProduct;


