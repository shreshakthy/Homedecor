import React from 'react';
import "./Screen2.css";

const Cards2 = ({data1}) => {
  return (
    <div className='card container card1  my-lg-3 d-md-flex justify-content-center'>
      <img src={data1.image} className=' mx-auto my-lg-4 cardimg2' />
      <div className="card-body  text-center">
        <div className="card-title   " >
            <p className='card2title'><b>{data1.title}</b></p>
          
          <p className='card-text text-center card2text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        </div>

      </div>

    </div>
  )
}

export default Cards2