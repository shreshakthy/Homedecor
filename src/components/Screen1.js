import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Screen1.css";
// import "@fontsource/montserrat";

import { Nav, Navbar, Container } from 'react-bootstrap';
import Screen2 from './Screen2';
import img1 from "../assets/image 94.png";
import img2 from "../assets/image 95.png";
import img3 from "../assets/image 98.png";
import img4 from "../assets/image 96.png";



const Screen1 = () => {
    return (

        <div>
            <Container fluid >
                <Navbar variant="white" expand="lg" className='mainnav 'bg='white' fixed="top"  >
                    <Container className='navh' >
                        <Navbar.Brand ><p className=' furniture fw-bolder my-lg-1  px-lg-4'>Furniture</p></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav " />
                        <Navbar.Collapse id="basic-navbar-nav" className='d-lg-flex justify-content-center' >
                            <div className=' ms-lg-auto'>
                                <Nav className="mx-md-5 gap-5 ms-auto navtext">

                                    <Nav.Link ><p className=' my-md-1 text-black'>Home</p></Nav.Link>
                                    <Nav.Link ><p className='  my-md-1 text-black '>Services</p></Nav.Link>
                                    <Nav.Link ><p className='  my-md-1  text-black'>Doctors</p></Nav.Link>
                                    <Nav.Link ><p className='  my-md-1 text-black '>Products</p></Nav.Link>
                                    <Nav.Link ><p className='  my-md-1 text-black '>Gallery</p></Nav.Link>
                                </Nav>
                            </div>



                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>


            <div> <Screen2 />  </div>

            <div className='footercolor '>
                <div className='container '>

                    <footer >
                        <section class="d-flex justify-content-center justify-content-lg-between text-center text-lg-start">

                        </section>

                        <div class="row  p-lg-5 foot1">
                            <div class="col-xl-4 col-lg-4 col-md-6 ">
                                <div class="p-lg-3 ">
                                    <h3 class="text-white footertxt1"><b>Beauty Care</b></h3>
                                    <p class=" text-white footertxt2 py-lg-4 ">Do eiusmod tempor incididunt ut
                                        labore et <br /> dolore magna aliqua. Ut enim ad minim veniam,<br />
                                        quis nostrud exercitation ullamco laboris.
                                    </p>
                                    <p className='text-white footertxt3'> <b>Follow Us</b></p>

                                </div>
                            </div>
                            <div class="col-xl-8  col-lg-8 col-md-8 py-lg-2">
                                <div class="p-lg-3 imgmain">
                                    <h6 className='text-white footertxt1'><b>Instagram Shop</b></h6>
                                    <div className='my-lg-4 d-lg-flex justify-content-centerpx-lg-0 gap-4   '>
                                        <img src={img1} className=' img1 main1' />
                                        <img src={img2} className=' img1  main1' />
                                        <img src={img3} className='  img1  main1' />
                                        <img src={img4}   className='img1  main1'/>

                                    </div>
                                </div>
                            </div>


                        </div>

                    </footer>

                </div>
            </div >



        </div >
    )
}

export default Screen1