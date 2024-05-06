
import Cookies from "cookie-universal";
import { Container } from 'react-bootstrap';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../header/header"
import UpdataPopup from "../updates/update";
import Footer from "../Footer/Footer"
import "./dashboard.css"
import { ToastContainer, toast } from 'react-toastify';


export default function DataTable() {
  const [datauser, setDatauser] = useState([]);
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [id, setId] = useState(null);
  const cookie = Cookies();
  const token = cookie.get('token');
  const fetchData = () => {
    axios.get('https://backfood2-1traner.onrender.com/api/allusers', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        setDatauser(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData()
  }, [token])
  const UpdateUser = () => {
    setModalShow(true);
  };
  const onHide = () => setModalShow(false);
  
  const handleUpdate = () => {
    fetchData(); 
};


  const DeleteUser = () => {
    axios.delete(`https://backfood2-1traner.onrender.com/api/user/delete/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((response) => {
        setDatauser(prevData => prevData.filter(user => user._id !== id));
      })
      .catch((err)=>{
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


  const handleSelectionModelChange = (selectionModel) => {
    console.log(selectionModel)
    setSelectedRowIds(selectionModel);
    const selectedId = selectionModel.length > 0 ? selectionModel[selectionModel.length - 1] : null;
    if (selectedId) {
      const selectedUser = datauser.find(user => user._id === selectedId);
      setId(selectedUser?._id);
    }
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 350 },
    { field: 'phone', headerName: 'Email', width: 350 },
    { field: 'email', headerName: 'Phone', width: 350 },
  ];

  return (
    <div className="ovely_dishboard" style={{ position: "relative", marginTop: "200px", minHeight:"300px" }}>
      <Header />
      <UpdataPopup  modalShow={modalShow} onHide={onHide} id={id} handleUpdate={handleUpdate} />
      <Container>
          <div>
            <DataGrid
              style={{ marginBottom: "50px", marginTop: "50px" }}
              rows={datauser}
              columns={columns}
              getRowId={(row) => row._id}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              pagination
              autoHeight
              selectionModel={selectedRowIds}
              onRowSelectionModelChange={handleSelectionModelChange}
              onRowClick={(e)=>{
                
                console.log(e)
              }}
           />
          </div>
          <div className="Action_user">
            <button onClick={UpdateUser} className="update_user">Update</button>
            <button onClick={DeleteUser} className="delete_user">Delete</button>
            <ToastContainer />
          </div>  
      </Container>
      <Footer />
    </div>
  );
}




















