import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from "../../Image/383001452_164010960092124_8288108129641538054_n.jpg"
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonIcon from '@mui/icons-material/Person';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import "./Signup.css"


const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [accept, setAccept] = useState(false)
    const [number, setNumber] = useState("")
    const navs = useNavigate()
    const supmit = (e) => {
        let flag = true
        e.preventDefault();
        setAccept(true)
        if (name === "" || email === "" || password.length < 8) {
            flag = false
        } else flag = true
        if (flag) {
            axios.post('https://backfood2-1traner.onrender.com/register', {
                userName: name,
                email: email,
                password: password,
                phone: number
            })

                .then((res) => {
                    toast.success('🦄 لقد تم انشاء حساب بنجاح', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setTimeout(() => {
                        navs("login")
                    }, 4000);

                })
                .catch((err) => console.log(err))
        }
    }
    return (
        <>

            <div className="parent">
                <form onSubmit={supmit}>

                    <label>ENTER NAME :</label>
                    <div className="d-flex align-items-center">
                        <input placeholder="Enter name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <PersonIcon className="icon"/>
                    </div>

                    {accept && name === "" && <p style={{ color: "red" }}>Enter your Name Please</p>}

                    <label>ENTER EMAIL :</label>
                    <div className="d-flex align-items-center flex">
                        <input placeholder="Enter Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <AlternateEmailIcon className="icon"/>
                    </div>

                    <label>ENTER Number :</label>
                    <input placeholder="Enter Phone" type="number" required value={number} onChange={(e) => setNumber(e.target.value)} />
                    {accept && email === "" && <p style={{ color: "red" }}>The Email is required</p>}


                    <label>ENTER Password :</label>
                    <div className="d-flex align-items-center flex">
                        <input placeholder="Enter Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <LockOpenIcon className="icon"/>
                    </div>
                    {accept && password.length < 8 && <p style={{ color: "red" }}>password must be more than 8 char</p>}
                    <div className="btn_supmit">
                        <button className="btn_s" type="submit">Register</button>
                        <ToastContainer />
                        <Link style={{ textDecoration: 'none' }} to="/login"><h6 className="font">Already have an account</h6></Link>
                    </div>

                </form>

                <div className="signup_img">
                    <img src={img} alt="" />

                </div>


            </div>
        </>
    )
}


export default Signup;

