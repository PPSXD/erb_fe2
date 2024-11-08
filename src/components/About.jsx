import React from 'react'
import Title from './Title'
import about from '../images/about.png';

function About() {
  return (
    <>
        {/* <!-- About --> */}
<section className='section' id='about'>
<Title main_title='about' sub_title='us' />

    <div className='section-center about-center'>
        <div className='about-img'>
            <img  src={about} className='about-photo' alt='awesome landscape' />
        </div>
        <article className='about-info'>
            <h3>explore the difference</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus amet repellendus sit corrupti. Pariatur aliquam, debitis amet rem repellendus dolorum corrupti provident id quos non.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus amet repellendus sit corrupti. Pariatur aliquam, debitis amet rem repellendus dolorum corrupti provident id quos non.</p>
        <a href='#home' className='btn'>read more</a>
        </article>
    </div>
</section>
    </>
  )
}

export default About