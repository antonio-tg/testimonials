import React from 'react'; //optional
import "../stylesheets/Testimonial.css"

function Testimonial(props) {
  return (
    <div className='container-testimonial'>
      <img
        className='image-testimonial'
        src={require(`../images/${props.image}`)}
        alt='Fry picture'/> 
      <div className='testimonial_text_container'>
        <p className='testimonial_name'> <strong>{props.name}</strong> from the <strong>{props.time}</strong></p>
        <p className='testimonial_ocupation'> <strong>{props.ocupation}</strong> </p>
        <p className='testimonial_text' >"{props.testimonial}"</p>
      </div>
    </div>
  );
}

export default Testimonial;