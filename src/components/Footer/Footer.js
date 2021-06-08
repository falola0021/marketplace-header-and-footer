import React from 'react'
import Style from './Footer.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import FooterLogo from '../../assets/images/logo.png'

import FootSocials from './FooterSocials'

function Foot () {
  return (
    <div className={Style.footerbody}>
      <div className={Style.mobileocials}></div>
      <div className={Style.firstlayer}>
        <Container>
          <div className={Style.firstlayercontainer}>
            <Row>
              <Col xs={3}>
              <div>
                <img className={Style.footerlogo} src={FooterLogo} alt='logo' />
                <div className={Style.contact}>
                  <i className='fa fa-phone '></i>08189840160
                </div>
              </div>
              </Col>
              <Col>
              <div className={Style.servicetitle}>
                PRODUCTS
              </div>
              <div className={Style.servicesubtitle}>
                <div>
                  Buy
                </div>
                <div>
                  Sell
                </div>
                <div>
                  Swap
                </div>
              </div>
              </Col>
              <Col>
              <div className={Style.servicetitle}>
                SERVICES
              </div>
              <div className={Style.servicesubtitle}>
                <div>
                  Fixit45
                </div>
                <div>
                  Autopreneur
                </div>
                <div>
                  Corporate Service
                </div>
                <div>
                  Inspection Service
                </div>
                <div>
                  Background Check
                </div>
              </div>
              </Col>
              <Col>
              <div className={Style.servicetitle}>
                COMPANY
              </div>
              <div className={Style.servicesubtitle}>
                <div>
                  About Us
                </div>
                <div>
                  Contact Us
                </div>
                <div>
                  Careers
                </div>
                <div>
                  Inspection Centers
                </div>
              </div>
              </Col>
              <Col>
              <div className={Style.servicetitle}>
                RESOURCES
              </div>
              <div className={Style.servicesubtitle}>
                <div>
                  FAQs
                </div>
                <div>
                  Blog
                </div>
              </div>
              <div className={Style.desktopsocials}>
                <FootSocials/>
              </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className={Style.secondlayer}>
        <Container>
          <div className={Style.secondcontainer}>
            <Row>
              <Col>
              <i className='fa fa-copyright'></i><span className={Style.righttext1}>2021 cars45.com . All Righs Reserved</span>
              </Col>
              <Col className={Style.hide}></Col>
              <Col className={Style.hide}></Col>
              <Col className={Style.hide}></Col>
              <Col>
              <span className={Style.righttext2}><span>Privacy Policy</span><span>Term & Conditions</span></span>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Foot
