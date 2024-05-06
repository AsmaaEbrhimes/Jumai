import GoogleMapReact from 'google-map-react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../header/header';
import Footer from '../Footer/Footer';
import "./Map.css"
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <>
    <Header/>
    <Container>
      <div style={{ margin: "auto", textAlign: "center",position: "relative", marginTop: "230px" }}>
        <h2 style={{color: "chocolate"}}>Contact Us</h2>
        <p>Contact Us I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.</p>
      </div>

      <Row style={{ position: "relative", marginTop: "70px" }} className="row_map">

        <Col xs="12" md="6">
             <form style={{width:"100%"}}>
               <input placeholder='First Name *' type="text"/>
               <input placeholder='Last Name *' type="text"/>
               <input placeholder='First Name' type="text"/>
               <input type="number" placeholder='Number'/>
               <input type="email" placeholder="First Email"/>
               <textarea>

               </textarea>
               <button style={{border:"none", width:"100%",borderRaduis:"10px",color:"wheat",background:"chocolate",padding:"10px"}}>Send Your Message</button>
             </form>

        </Col>



        <Col xs="12" md="6" className='map'>
          <div style={{ height: '520px', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyD6QYaKcKNlx-QN4nKgFKN2A1r68wpvWUQ" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </Col>

      </Row>

    </Container>
    <Footer/>
    </>


  );
}
