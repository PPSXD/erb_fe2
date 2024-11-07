import React from 'react';
import Title from './Title';
import { tours } from '../data';

function Tours() {
  return (
  <section className='section' id='tours' >
    <Title main_title='Gundam' sub_title='Info' />

<div className='section-center featured-center'>
{tours.map((tour) => {return(
  <article key={tour.id} className='tour-card'>
<div className='tour-img-container'>
  <img src={tour.image}  className='tour-img' alt='' />
  <p className='tour-date'>{tour.date}</p>
</div>
<div className='tour-info'>
  <h4>{tour.title}</h4>
  <p>{tour.info}</p>
</div>
<div className='tour-footer'>
<ul className='tour-footer-info'>
  <li><i className='fa-brands fa-android'></i>{tour.location}</li>
  <li>{tour.duration}</li>
  <li>{tour.cost}</li>
</ul>
</div>
</article>
);
})}



</div>
</section>


  )
}

export default Tours