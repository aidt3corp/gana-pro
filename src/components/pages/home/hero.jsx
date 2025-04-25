import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <section className="d2c_hero_wrapper position-relative" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-5 mb-lg-0 text-center text-md-start" data-aos="fade-left">
            <h1>Hey! I am Web Developer</h1>
            <p>
              I am a Full-Stack Web Developer with extensive experience of over 4
              years. My expertise is in creating &amp; designing websites, Mobile
              Apps, and Desktop Applications.
            </p>
            <a href="#about" className="btn d2c_secondary_btn">
              Learn more
            </a>
            <a href="#contact" className="btn">
              hire me
            </a>
          </div>
          <div className="col-md-6">
            <div className="d2c_hero_right" data-aos="fade-right">
              <Image
                src="/images/Hero_right_img.png"
                className="img-fluid w-auto"
                alt="Hero Image"
                width={0}
                height={0}
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/images/tringle_element.png"
        className="w-auto h-auto"
        alt="Tringle Element"
        width={0}
        height={0}
      />
      <Image
        src="/images/horizontal_wave.png"
        className="w-auto h-auto"
        alt="Horizontal Wave"
        width={0}
        height={0}
      />
      <Image
        src="/images/vertical_wave.png"
        className="w-auto h-auto"
        alt="Vertical Wave"
        width={0}
        height={0}
      />
    </section>
  )
}
