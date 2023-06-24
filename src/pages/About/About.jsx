import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Books are keys that unlock the doors to new worlds and endless possibilities

Knowledge is a bridge that connects the past, present, and future

In the realm of books, curious minds find nourishment for the soul. <br /><br /><strong>"The written word is an eternal flame, illuminating the path of enlightenment."</strong></p><br/>
            <p className='fs-17'>At Alpha Books, we are passionate about igniting the love for reading and the pursuit of knowledge. We believe that books have the power to transport, inspire, and transform lives. As a company, we are dedicated to curating an exceptional collection of books that cater to diverse interests and genres, ensuring that there is something for everyone within our literary sanctuary. Our mission is to create a haven for book enthusiasts, a place where they can explore new worlds, embark on captivating adventures, and delve into the depths of imagination. With a commitment to quality, we meticulously select each title, offering a handpicked selection of timeless classics, contemporary bestsellers, thought-provoking non-fiction, and much more. </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
