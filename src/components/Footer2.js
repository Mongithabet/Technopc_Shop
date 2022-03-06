import React from 'react'
import { Container, Button, Col, Row, Form } from 'react-bootstrap';
import './css/Footer.css'
import './css/footer2.css'
import icon1 from './assets/icon/icon-1-1.png'
import icon2 from './assets/icon/icon-2-2.png'
import icon3 from './assets/icon/icon-3-3.png'
import icon4 from './assets/icon/icon-4-4.png'
import icon5 from './assets/icon/icon-5-5.png'
import payment from './assets/icon/payment.png'

import { ImLocation } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { BrowserRouter as Router,Link} from 'react-router-dom';
export default function Footer2() {
  return (
    <Router>
    <div>
    
         <footer className="page-footer">
        <div className="footer-style-2">
            <div className="footer-top">
                <div className="container">
                    <div className="list-services">
                        <ul>
                            <li>
                                <div className="icon-service"><img src={icon1} alt="Service Icon" width="60" height="60"/></div>
                                <div className="info-service">
                                    <div className="title-service"><span style={{fontSize:"10pt"}}><Link to="/dd">satisfait OU REMBOURSÉ</Link> </span></div>
                                    <p>&nbsp;</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon-service"><img src={icon2} alt="Service Icon" width="60" height="60"/></div>
                                <div className="info-service">
                                    <div className="title-service"><span style={{fontSize:"10pt"}}>PAIEMENT À LA LIVRAISON</span></div>
                                    <p>&nbsp;</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon-service"><img src={icon3} alt="Service Icon" width="60" height="60"/></div>
                                <div className="info-service">
                                    <div className="title-service"><span style={{fontSize:"10pt"}}><Link to="/hh">GRATUITE EN 48H À PARTIR DE 300DT</Link> </span></div>
                                    <p>&nbsp;</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon-service"><img src={icon4} alt="Service Icon" width="60" height="60"/></div>
                                <div className="info-service">
                                    <div className="title-service"><span style={{fontSize:"10pt"}}> <Link to="pp">PAIEMENT EN LIGNE 100% SÉCURISÉ</Link></span></div>
                                    <p>&nbsp;</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon-service"><Link to="tel:+216 36 010 010"><img src={icon5} alt="Service Icon" width="60" height="60"/></Link></div>
                                <div className="info-service">
                                    <div className="title-service"><span style={{fontSize:"10pt"}}>CONTACTEZ-NOUS AU<Link style={{color: "#c70a0a", textDecoration: "underline"}}  to="tel:+216 24 360 762"> 24 360 762</Link></span></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                    <Container>
        <Row md={4}>
          <Col classNameName="h1-txt" >
            <h1 classNameName="h1"> GS COMPUTER</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada fringilla sem, à dictum lectus ultricies quis. Etiam eu bibendum orci. Aliquam erat volutpat. PLUS SUR NOUS    MORE ABOUT US
          </Col>
          <Col xs={4} classNameName="h1-txt">
            <h5 classNameName="h5"> Prestations de service</h5>
            Developpement Web
            Mobile
            Vente PC
            Vente Mobile
            Accessoires
            Applications de Gestion</Col>
          <Col md={2} classNameName="h1-txt">
            <h5 classNameName="h5"> Abonnez vous à notre newsletter</h5>
            Recevez nos dernières offres et mises à jour.
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button classNameName="btn" type="submit">
              Submit
            </Button>
          </Col>
          <Col classNameName="h1-txt">
            <h5 classNameName="h5"> Nous contacter</h5>
             <ImLocation/> Gabes Gabes center num 116 Tunisie <br/>
            <BsTelephoneFill/> (+216)24360762 <br/>
            <MdEmail/> Stechnopc@yahoo.fr <br/><br/>
            <TiSocialFacebook classNameName="social" size="2"/>
            <TiSocialLinkedin classNameName="social" size="2"/>
            <TiSocialTwitter classNameName="social" size="2"/>
            <AiOutlineGooglePlus classNameName="social" size="2"/>


          </Col>
        </Row>
      </Container>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-payments"><img className="mark-lazy" src={payment} alt="Payments" width="370" height="32"/></div> <address>Copyright © 2022 TechnoPc, Inc. Tous droits réservés.</address></div>
            </div>
        </div>
    </footer>
    </div>
    </Router>
  )
}
