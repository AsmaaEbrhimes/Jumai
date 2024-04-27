
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Cookies from "cookie-universal";
import axios from 'axios';
import { useState } from 'react';
import "./Updateproduct.css"

function SimpleDialog(props) {
  const { detailsData, onClose, selectedValue, open } = props;
  console.log(detailsData)
  const [nameproduct, setNameproduct] = useState("")
  const [descproduct, setDescproduct] = useState("")
  const [priceproduct, setPriceproduct] = useState("")
  const [imageproduct, setImageproduct] = useState("")
  const [amountproduct, setamountproduct] = useState("")
  const [categoryproduct, setcategoryproduct] = useState("")

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const updateProduct = (e) => {
    e.preventDefault();
    const cookie = Cookies();
    const token = cookie.get('token');
    axios.put(`https://backfood2-1traner.onrender.com/api/cart/update/${detailsData._id}`, {
      amount: amountproduct,
      category: categoryproduct,
      description: descproduct,
      price: priceproduct,
      name: nameproduct,
      _id: detailsData._id,
      image:imageproduct
      , headers: {
        'Authorization': `Bearer ${token} `
      }
    }).then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ pt: 0 }}>
        <form className='formUpdateProduct'>
          <label>Enter Your Name</label>
          <input value={detailsData.name} onChange={(e) => setNameproduct(e.target.value)} type="text" />

          <label>Enter Your description</label>
          <input value={detailsData.description} onChange={(e) => setDescproduct(e.target.value)} type="text" />

          <label>Enter Your price</label>
          <input value={detailsData.price} onChange={(e) => setPriceproduct(e.target.value)} type="number" />



          <label>Enter Your discount</label>
          <input value={detailsData.amount} onChange={(e) => setamountproduct(e.target.value)} type="number" />


          <select onChange={(e) => setcategoryproduct(e.target.value)}>
            <option>Fashion</option>
            <option>clothing</option>
            <option>Healthy&buttey</option>
            <option>Kids</option>
          </select>



          <label className='label' htmlFor='update_product'>Enter Your image</label>
          <input value={imageproduct} onChange={(e) => setImageproduct(e.target.value)} type="file" id="update_product" />

          <button onClick={updateProduct}>Update Product</button>
        </form>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo({ showFormUpdate, handelclodeDilog, opendilog, detailsData }) {
  return (
    <div>
      {/* <Typography variant="subtitle1" component="div">

      </Typography> */}
      <br />
     
      <SimpleDialog
        detailsData={detailsData}
        open={opendilog}
        onClose={handelclodeDilog}
      />
    </div>
  );
}



