"use client"
import Image from 'next/image';
import React from 'react'
import CountUp from "react-countup";

export default function About() {
  return (
    <div className="d2c_about_expertise_bg">
      {/* About Section Start */}
      <section className="d2c_about_wrapper position-relative" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-1 order-lg-0">
              <div className="d2c_about_left position-relative " data-aos="fade-right">
                <Image
                  src="/images/about_left_img.png"
                  className="img-fluid w-auto"
                  alt="About Image"
                  width={0}
                  height={0}
                />
                <div className="d2c_about_card" data-aos="fade-up">
                  <h3 className="mb-lg-2 mb-xxl-3">Web Designer</h3>
                  <div id="counters_2">
                    <p className="mb-0">
                      <span className="count" >
                        <CountUp
                          className="text-white text-3xl xl:text-[44px] font-extrabold"
                          start={0}
                          end={350}
                          duration={6}
                          suffix=" +"
                          enableScrollSpy={true}

                        >
                          {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                      </span>
                      project complete
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-3 ps-lg-5 order-0 order-lg-1 mb-4 mb-md-5 mb-lg-0" data-aos="fade-right">
              <h6>About me</h6>
              <h2 className="mb-3">I am a Passionate Web Designer</h2>
              <p>
                Obviously I am a Web Designer. Web Developer with over 7 years of
                the best experience. Experienced with all stages of the development
                cycle for ourself dynamic web projects. The as opposed to using
                Content here, content here, making it look like readable English.
              </p>
              <h5 className="mb-lg-2 mb-xl-3">smart work</h5>
              <p className="mb-lg-3 mb-xxl-4">
                A part of the team that has built the front-end for an
                enterprise-level web application in AngularJS. I&apos;ve been a part of a
                team that has built.
              </p>
              <h5 className="mb-lg-2 mb-xl-3">modern work</h5>
              <p className="mb-3 mb-md-0">
                I&apos;ve worked with a wide range of technologies, including MS SQL
                Server and Python. One of my favorite characteristics of an employer
                is their passion for the work they are doing.
              </p>
            </div>
          </div>
          <div className="d2c_counter_wrapper" id="counters_1">
            <div className="row">
              <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 " data-aos="fade-up">
                <div className="d2c_card text-center">
                  <h2>
                    <span className="count" >
                      <CountUp
                        className="text-white text-3xl xl:text-[44px] font-extrabold"
                        start={0}
                        end={4}
                        duration={6}
                        suffix=" +"
                        enableScrollSpy={true}

                      >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                      </CountUp>
                    </span>
                  </h2>
                  <h5 className="mb-0">Years Experience</h5>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4 mb-md-0 " data-aos="fade-up">
                <div className="d2c_card text-center">
                  <h2>
                    <span className="count" >
                      <CountUp
                        className="text-white text-3xl xl:text-[44px] font-extrabold"
                        start={0}
                        end={150}
                        duration={6}
                        suffix=" +"
                        enableScrollSpy={true}

                      >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                      </CountUp>
                    </span>
                  </h2>
                  <h5 className="mb-0">Projects Done</h5>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4 mb-md-0 " data-aos="fade-up">
                <div className="d2c_card text-center">
                  <h2>
                    <span className="count" >
                      <CountUp
                        className="text-white text-3xl xl:text-[44px] font-extrabold"
                        start={0}
                        end={75}
                        duration={6}
                        suffix=" +"
                        enableScrollSpy={true}

                      >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                      </CountUp>
                    </span>
                  </h2>
                  <h5 className="mb-0">Happy Clients</h5>
                </div>
              </div>
              <div className="col-md-6 col-lg-3" data-aos="fade-up">
                <div className="d2c_card text-center">
                  <h2>
                    <span className="count" >
                      <CountUp
                        className="text-white text-3xl xl:text-[44px] font-extrabold"
                        start={0}
                        end={22}
                        duration={6}
                        suffix=" +"
                        enableScrollSpy={true}

                      >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                      </CountUp>
                    </span>
                  </h2>
                  <h5 className="mb-0">Get Awards</h5>
                </div>
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
          src="/images/add_element.png"
          className="w-auto h-auto"
          alt="Add Element"
          width={0}
          height={0}
        />
        <Image
          src="/images/square_element.png"
          className="w-auto h-auto"
          alt="Square Element"
          width={0}
          height={0}
        />
      </section>
      {/* About Section End */}
      {/* Hobbies Section Start */}
      <section className="d2c_hobbies_wrapper position-relative">
        <div className="container">
          <h6 className="text-center">Hobbies</h6>
          <h2 className="text-center">Things I Love to Do</h2>
          <div className="row">
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4 " data-aos="fade-up">
              <div className="d2c_card text-center">
                <h5 className="mb-0">Football</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4 mb-md-0 " data-aos="fade-up">
              <div className="d2c_card text-center">
                <h5 className="mb-0">Cybersecurity</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4 mb-md-0 " data-aos="fade-up">
              <div className="d2c_card text-center">
                <h5 className="mb-0">Cooking</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4 mb-lg-0 " data-aos="fade-up">
              <div className="d2c_card text-center">
                <h5 className="mb-0">Music</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4 mb-md-0 " data-aos="fade-up">
              <div className="d2c_card text-center">
                <h5 className="mb-0">Digital Marketing</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4 mb-md-0 " data-aos="fade-up">
              <div className="d2c_card text-center">
                <h5 className="mb-0">Graphic Design</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4" data-aos="fade-up">
              <div className="d2c_card text-center">
                <h5 className="mb-0 ">Photography</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4 mb-md-0 " data-aos="fade-up">
              <div className="d2c_card text-center">
                <h5 className="mb-0">DevOps</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4 mb-xl-0 " data-aos="fade-up">
              <div className="d2c_card text-center">
                <h5 className="mb-0">WP Optimization</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4 mb-lg-0 " data-aos="fade-up">
              <div className="d2c_card text-center">
                <h5 className="mb-0">Blogging</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4 mb-md-0 " data-aos="fade-up">
              <div className="d2c_card text-center">
                <h5 className="mb-0">Coding</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4 mb-md-0 " data-aos="fade-up">
              <div className="d2c_card text-center">
                <h5 className="mb-0">Gaming</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4 mb-xl-0 " data-aos="fade-up">
              <div className="d2c_card text-center">
                <h5 className="mb-0">UX Research</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4 mb-md-0 " data-aos="fade-up">
              <div className="d2c_card text-center">
                <h5 className="mb-0">Project Manage</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4 mb-md-0 " data-aos="fade-up">
              <div className="d2c_card text-center">
                <h5 className="mb-0">Writing</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4 mb-md-0 " data-aos="fade-up">
              <div className="d2c_card text-center">
                <h5 className="mb-0">Reading</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 offset-0 offset-lg-3 offset-xl-0 mb-4 mb-md-0 " data-aos="fade-up">
              <div className="d2c_card text-center">
                <h5 className="mb-0">Swimming</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 " data-aos="fade-up">
              <div className="d2c_card text-center">
                <h5 className="mb-0">Dancing</h5>
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
          src="/images/square_element.png"
          className="w-auto h-auto"
          alt="Square Element"
          width={0}
          height={0}
        />
      </section>
      {/* Hobbies Section End */}
    </div>
  )
}
