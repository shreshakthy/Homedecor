import React from 'react';
import "./Screen2.css";
import img from "../assets/Group.svg";
import img1 from "../assets/Group (1).svg";
import img2 from "../assets/shield-1 1.png";
import img3 from "../assets/Mask Group.png";
import img4 from "../assets/Mask Group (1).png";
import img5 from "../assets/Mask Group (2).png";
import img6 from "../assets/Mask Group (3).png";
import img7 from "../assets/image 106.png";
import img8 from "../assets/image 100.png";
import img9 from "../assets/image 101.png";
import img10 from "../assets/Purchase Securely.png";
import img11 from "../assets/Ships From Warehouse.png";
import img12 from "../assets/Style Your Room.png";
import Cards1 from './Cards1';
import Cards2 from './Cards2';
const Screen2 = () => {
    return (
        <div>
            <div className='backgroundimg'>

                <div className='card container maincard col-sm-12 d-md-flex justify-content-center'>
                    <div className='card-body'>
                        <div className='card-title ctitle py-lg-3'>
                            <p>New Arrival</p>
                            <p className='card-text ctext fw-bolder my-lg-4'>Discover Our New Collection</p>
                            <p className='ctext2 my-lg-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            <button className='btn1 ' > <p className='text-white btntext '>BUY NOW</p></button>
                        </div>
                    </div>

                </div>


            </div>

            <div className='backcolor p-lg-4'>
                <div className='container py-lg-4 d-md-flex justify-content-center  gap-5 '>
                    <div className='d-md-flex justify-content-start  '>
                        <div>
                            <img src={img} className='img1 '/>
                        </div>
                        <div>
                            <span className=' free px-lg-3'> Free Delivery</span> <br />
                            <span className=' px-lg-3'>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>

                    <div className='d-md-flex justify-content-start  mx-lg-5 px-lg-5 '>
                        <div>
                            <img src={img1} className='img1'/>
                        </div>
                        <div>
                            <span className=' free px-lg-3'> Support 24/7</span> <br />
                            <span className=' px-lg-3'>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>


                    <div className='d-md-flex justify-content-start '>
                        <div>
                            <img src={img2} className='img2 '/>
                        </div>
                        <div>
                            <span className=' free px-lg-3'> 100% Authentic</span> <br />
                            <span className=' px-lg-3'>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>

                </div>


            </div>

            <div className='container' >
                <p className='inspiration fw-bolder'>Inspiration Collection</p>
                <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='d-md-flex justify-content-center py-lg-5' >
                    <img src={img3} className='img3 py-lg-4 screen2'/>
                    <img src={img4} className='img4 px-lg-5 screen2'/>
                    <img src={img5} className='img5 py-lg-4 screen2'/>
                </div>



            </div>



            <div className='background1'>
                <div className='container p-lg-5 d-md-flex justify-content-start '>
                    <div className='col-lg-5 col-md-5 col-sm-5 my-lg-5 py-lg-5 ms-md-auto maindiv '>
                        <div className='my-lg-5 py-lg-5 mainbeauty'>
                            <p className='beauty text-left  '>Beautify Your Space</p>
                            <p className='do '>Do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Ut enim ad minim veniam, <br />quis nostrud exercitation ullamco laboris.</p>
                            <button className='btn2 ' > <p className='text-white btntext1 '>Learn More</p></button>
                        </div>

                    </div>

                    <div className='col-lg-5 col-md-5 col-sm-5 mx-auto d-md-block d-none'>

                        <img src={img6} className='img6'/>

                    </div>
                </div>

            </div>


            <div className='p-lg-5'>
                <div className='screen4'>
                    <p className='text-center browse'>Browse The Range</p>
                    <p className='text-center lorem2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>


                {/* row flex-md-row flex-md-nowrap d-md-flex mt-md-5 gx-md-0 
                style={{overflowX:'auto'}} */}

                <div className=' my-lg-3 d-lg-flex gap-5 justify-content-center container ' >
                    {data.map((item, index) => (<Cards1 data={item} key={index} />)
                    )}
                </div>
                <hr />
            </div>


            <div className='p-lg-4'>
                <div>
                    <p className='text-center work'>How It Works</p>
                    <p className='text-center lorem2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className='  my-lg-3 d-lg-flex gap-5 justify-content-center container'>
                    {data1.map((item, index) => (<Cards2 data1={item} key={index} />)
                    )}
                </div>

            </div>


            <div className='background1 pos'>
                <div className='container p-lg-5'>
                    <div>
                    <p className='text-center join'>Join Our Mailing List</p>
                    <p className='text-cenetr sign'>Sign up to receive inspiration, product updates,
                        <br /> and special offers from our team.</p>
                    </div>
                   
                        

                    <div class="input-group mb-lg-5 maininput my-lg-3 py-lg-4  ">
                        <input type="text" class="input px-lg-3" placeholder="example@gmail.com" aria-label="example@gmail.com" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="btn inputbtn  text-white" type="button">Submit</button>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Screen2
const data = [{
    image: img7,
    title: "Dining",


},
{
    image: img8,
    title: "Living",

},
{
    image: img9,
    title: "Bedroom",

},

]

const data1 = [{
    image: img10,
    title: "Purchase Securely",


},
{
    image: img11,
    title: "Ships From Warehouse",

},
{
    image: img12,
    title: "Style Your Room",

},

]