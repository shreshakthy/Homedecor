import React from 'react';
import "./Screen2.css";

const Cards1 = ({ data }) => {
  return (
    <div className='card container card1  my-lg-3 d-md-flex justify-content-center'>
      <img src={data.image} className=' mx-auto my-lg-4 cardimg2' />
      <div className="card-body  text-center">
        <div className="card-title  card1title " >
          <b>{data.title}</b>

        </div>

      </div>

    </div>
  )
}

export default Cards1