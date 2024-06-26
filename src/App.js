import { useState } from "react"
import Signup from "./components/SignUp/Signup"
import Sigin from "./components/Signin/sign"
import Dashbord from "./components/Dashboard/Dashbord"
import Content from "./components/contentent/Content"
import { Routes, Route } from 'react-router-dom';
import Products from "./components/products/Products"
import Header from "./components/header/header"
import Details from "./components/detalisProduct/Details"
import Shopping from "./components/Shopphing/Shopping"
import UpdataPopup from "./components/updates/update"
import Footer from "./components/Footer/Footer"
import DetailsGlopal from "./components/DetailsGlopal/DetailsGlopal"
import { useTranslation } from 'react-i18next';
import PartsApi from "./components/parts/PartsApi"
import Beatuy from "./components/beatuy/Beatuy"
import Computer from "./components/computer/Computer"
import Kids from "./components/Kids/Kids"
import Clothing from "./components/Clothing/Clothing"
import Game from "./components/game/Game"
import Fashion from "./components/FashionAcceriose/Fashion"
import ToolSports from "./components/tool-sports/ToolSports"
import SchoolBag from "./components/school-bag/ShoolBag"
import Supmarket from "./components/supmarket/Supmarket"
import AcceroiesMopile from "./components/AcceroiesMopile/AcceroiesMopile"
import Creat from "./components/creat/Creat"
import AllMail from "./components/Allmail/AllMail"
import TabelRequests from "./components/Requests/Requests"
import AcseptMale from "./components/Acsept/Acsept"
import RejectMale from "./components/Reject/Rejects"
import OrderUser from "./components/Order/Order"
import PaypalButtons from "./components/Paypal/Paypal"
import GoogleMap from "./components/googleMap/GoogleMap"
import Cookies from "cookie-universal";
import {jwtDecode} from "jwt-decode"
function App() {
  const [Total, setTotal] = useState("")
  const [Cart, setCart] = useState("")
  const cookie = Cookies();
  const token = cookie.get('token');
  const decode= token?jwtDecode(token):{Permissions:[]}

  const { i18n } = useTranslation();
  const changeAr = () => {
    i18n.changeLanguage('ar')
    localStorage.setItem('language', 'ar');
  }
  const changeEn = () => {
    i18n.changeLanguage('en')
    localStorage.setItem('language', 'en');
  }

  return (
    <Routes>
      <Route path="/" element={
        <>
          <Signup />
        </>
      }
      />
      <Route path="/content" element={
        <>
          <Header changeAr={changeAr} changeEn={changeEn} />
          <Content />
          <Products />
          <Footer />
        </>
      }
      />
      <Route path="/Details/:_id" element={
        <>
          <Header changeAr={changeAr} changeEn={changeEn} />
          <Details />
        </>
      }
      />

      <Route path="/detailsGlopal/:_id" element={

        <>
         <Header changeAr={changeAr} changeEn={changeEn} />
          <DetailsGlopal />
          <Footer />
        </>
      } />


      <Route path="/login" element={<Sigin />} />
      <Route path="/paypal" element={<PaypalButtons Total={Total} Cart={Cart}/>} />
      <Route path="/map" element={<GoogleMap />} />



     {decode.role==="admin"&&<Route path="/Dashbord" element={<Dashbord />} />}


      <Route path="/shopping" element={
        <>
          <Header changeAr={changeAr} changeEn={changeEn} />
          <Shopping setTotal={setTotal} setCart={setCart}/>
        </>
      }
      />
      <Route path="/updata" element={<UpdataPopup />} />
      <Route path="/creat" element={<Creat />} />
      <Route path="/allmail" element={<AllMail />} />
      <Route path="/tabelRequests" element={<TabelRequests />} />
      <Route path="/accseptMale" element={<AcseptMale />} />
      <Route path="/rejectMale" element={<RejectMale />} />
      <Route path="/orderUser" element={<OrderUser />} />





      <Route path="/part" element={<PartsApi />} />
      <Route path="/beauty" element={<Beatuy />} />
      <Route path="/computer" element={<Computer />} />
      <Route path="/clothing" element={<Clothing />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/game" element={<Game />} />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/toolsports" element={<ToolSports />} />
      <Route path="/schoolBag" element={<SchoolBag />} />
      <Route path="/supmarket" element={<Supmarket />} />
      <Route path="/acceroiesMopile" element={<AcceroiesMopile />} />
    </Routes>
  )
}


export default App;



