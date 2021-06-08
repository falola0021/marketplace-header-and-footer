import React, { useState } from 'react'
import Style from './Navbar.module.css'
import { Navbar, Row, Col, Nav, Container, Form, Button, InputGroup, FormControl } from 'react-bootstrap'
import NavLogo from '../../../assets/images/logo.png'
import { Avatar, ThemeProvider } from '@chakra-ui/core'
function Navigation () {
  const [searchshow, setSearchshow] = useState(false)
  const [active, setActive] = useState({
    cars: false,
    inspection: false,
    corporate: false,
    refer: false,
    import: false,
    others: false
  })

  const normal = () => {
    setActive({
      cars: false,
      inspection: false,
      corporate: false,
      refer: false,
      import: false,
      others: false
    })
  }
  const handleCars = () => {
    setActive({
      cars: true,
      inspection: false,
      corporate: false,
      refer: false,
      import: false,
      others: false
    })
  }
  const handleInspection = () => {
    setActive({
      cars: false,
      inspection: true,
      corporate: false,
      refer: false,
      import: false,
      others: false
    })
  }
  const handleCorporate = () => {
    setActive({
      cars: false,
      inspection: false,
      corporate: true,
      refer: false,
      import: false,
      others: false
    })
  }
  const handleRefer = () => {
    setActive({
      cars: false,
      inspection: false,
      corporate: false,
      refer: true,
      import: false,
      others: false
    })
  }
  const handleImport = () => {
    setActive({
      cars: false,
      inspection: false,
      corporate: false,
      refer: false,
      import: true,
      others: false
    })
  }
  const handleOthers = () => {
    setActive({
      cars: false,
      inspection: false,
      corporate: false,
      refer: false,
      import: false,
      others: true
    })
  }
  const handleSearchshow = () => {

    setSearchshow(!searchshow)
  }
  return (
    <div>
      <div className={Style.mainnav}>
        <ThemeProvider>
          <Container className='mt-2'>
            <Navbar collapseOnSelect expand='lg'>
              <Navbar.Brand href='#home'>
                <img className={Style.navlogo} src={NavLogo} alt='logo' />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='me-auto'>
                  <Nav.Link href='#' onMouseEnter={handleCars} onMouseLeave={normal}>
                    <span className={active.cars ? Style.navbarline : Style.navbar}>Cars</span>
                  </Nav.Link>
                  <Nav.Link href='#' onMouseEnter={handleInspection} onMouseLeave={normal}>
                    <span className={active.inspection ? Style.navbarline : Style.navbar}>Inspection Services</span>
                  </Nav.Link>
                  <Nav.Link href='#' onMouseEnter={handleCorporate} onMouseLeave={normal}>
                    <span className={active.corporate ? Style.navbarline : Style.navbar}>Corporate Deals</span>
                  </Nav.Link>
                  <Nav.Link href='#' onMouseEnter={handleRefer} onMouseLeave={normal}>
                    <span className={active.refer ? Style.navbarline : Style.navbar}>Referral Programs</span>
                  </Nav.Link>
                  <Nav.Link href='#' onMouseEnter={handleImport} onMouseLeave={normal}>
                    <span className={active.import ? Style.navbarline : Style.navbar}>Import Cars</span>
                  </Nav.Link>
                  <Nav.Link href='#' onMouseEnter={handleOthers} onMouseLeave={normal}>
                    <span className={active.others ? Style.navbarline : Style.navbar}>Other Services</span>
                  </Nav.Link>
                </Nav>
                <div className={Style.rightitem}>
                  <Nav.Link className={Style.icons} href='#'>
                    <i className='fa fa-search' onClick={handleSearchshow}></i>
                  </Nav.Link>
                  <Nav.Link className={Style.icons} href='#'>
                    <i className='fa fa-bell'></i>
                  </Nav.Link>
                  <Nav.Link href='#' className={Style.avatarbox}>
                    <Avatar className={Style.avatar} size='xs' />
                    <i className='fa fa-caret-down ml-3'></i>
                  </Nav.Link>
                </div>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </ThemeProvider>
      </div>
      {active.cars &&
       <Row onMouseEnter={handleCars} onMouseLeave={normal} className={Style.dropdownbox}>
         <Col className={Style.leftcol}>
         <div>
           Car Services
         </div>
         </Col>
         <Col className={Style.rightcol}>
         <div>
           Buy
         </div>
         <div>
           Sell
         </div>
         <div>
           Trade-in
         </div>
         </Col>
       </Row>}
      {active.inspection &&
       <Row onMouseEnter={handleInspection} onMouseLeave={normal} className={Style.dropdownbox}>
         <Col className={Style.leftcol}>
         <div>
           Inspection Services
         </div>
         </Col>
         <Col className={Style.rightcol}>
         <div>
           Ride Hailing
         </div>
         <div>
           Private/Individual
         </div>
         <div>
           Premium Inspection
         </div>
         <div>
           Due Deligence
         </div>
         <div>
           All-In-One
         </div>
         </Col>
       </Row>}
      {active.others &&
       <Row onMouseEnter={handleOthers} onMouseLeave={normal} className={Style.dropdownbox2}>
         <Col className={Style.leftcol2}>
         <div>
           Service & Repair
         </div>
         </Col>
         <Col className={Style.leftcol2}>
         <div>
           Become A Franchise
         </div>
         </Col>
         <Col className={Style.leftcol2}>
         <div>
           Background Check
         </div>
         </Col>
         <Col className={Style.leftcol3}>
         <div>
           About Us
         </div>
         <div className={Style.ordertext}>
           <div>
             Company Info
           </div>
           <div>
             FAQs
           </div>
           <div>
             Careers
           </div>
         </div>
         </Col>
       </Row>}
      {searchshow &&
       <Row onMouseLeave={handleSearchshow} className={Style.searchbox}>
         <Container >
           <Form>
             <Row className='align-items-center'>
               <Col sm={3}>
               <InputGroup>
                 <FormControl id='inlineFormInputGroupUsername' placeholder='Search Cars' />
                 <InputGroup.Text>
                   <i className='fa fa-search'></i>
                 </InputGroup.Text>
               </InputGroup>
               </Col>
               <Col xs='auto'>
               </Col>
             </Row>
           </Form>
         </Container>
       </Row>}
    </div>
  )
}

export default Navigation
