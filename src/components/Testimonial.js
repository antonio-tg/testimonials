import React from 'react';
import "../stylesheets/Testimonial.css"

function Testimonial(props) {
  return (
    <div className='container-testimonial'>
      <img
        className='image-testimonial'
        src={require(`../images/${props.image}`)}
        alt='Fry picture'/> 
      <div className='testimonial_text_container'>
        <p className='testimonial_name'>{props.name} from the {props.time}</p>
        <p className='testimonial_ocupation'> {props.ocupation} </p>
        <p className='testimonial_text' >"{props.testimonial}"</p>
      </div>
    </div>
  );
}

export default Testimonial;