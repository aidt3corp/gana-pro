"use client"
import React from 'react'
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <>
      <div className="d2c_portfolio_pricing_bg">
        {/* Portfolio Section Start */}
        <section className="d2c_portfolio_wrapper position-relative" id="work">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2 text-center">
                <h6>Portfolio</h6>
                <h2 className="mb-3">We Offer Great Affordable Premium Prices</h2>
                <p>
                  It is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The point
                  of using.
                </p>
              </div>
            </div>
            <div className="d2c_grid">
              <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
              >
                <a
                  data-lg-size="1406-1390"
                  className="d2c_grid_item mb-4 fancybox" data-aos="fade-left"
                  href="/images/portfolio_one.jpg"
                >
                  <Image
                    src="/images/portfolio_one.jpg"
                    className="img-fluid w-auto"
                    alt="Portfolio One"
                    width={0}
                    height={0}
                  />
                </a>
                <a
                  data-lg-size="1406-1390"
                  className="d2c_grid_item mb-4 mb-lg-0 fancybox" data-aos="fade-left"
                  href="/images/portfolio_two.jpg"
                >
                  <Image
                    src="/images/portfolio_two.jpg"
                    className="img-fluid w-auto"
                    alt="Portfolio Two"
                    width={0}
                    height={0}
                  />
                </a>
                <a
                  data-lg-size="1406-1390"
                  className="d2c_grid_item mb-4 fancybox" data-aos="fade-down"
                  href="/images/portfolio_three.jpg"
                >
                  <Image
                    src="/images/portfolio_three.jpg"
                    className="img-fluid w-auto"
                    alt="Portfolio Three"
                    width={0}
                    height={0}
                  />
                </a>
                <a
                  data-lg-size="1406-1390"
                  className="d2c_grid_item mb-4 mb-lg-0 fancybox" data-aos="fade-up"
                  href="/images/portfolio_four.jpg"
                >
                  <Image
                    src="/images/portfolio_four.jpg"
                    className="img-fluid w-auto"
                    alt="Portfolio Four"
                    width={0}
                    height={0}
                  />
                </a>
                <a
                  data-lg-size="1406-1390"
                  className="d2c_grid_item mb-4 fancybox" data-aos="fade-right"
                  href="/images/portfolio_five.jpg"
                >
                  <Image
                    src="/images/portfolio_five.jpg"
                    className="img-fluid w-auto"
                    alt="Portfolio Five"
                    width={0}
                    height={0}
                  />
                </a>
                <a
                  data-lg-size="1406-1390"
                  className="d2c_grid_item fancybox" data-aos="fade-right"
                  href="/images/portfolio_six.jpg"
                >
                  <Image
                    src="/images/portfolio_six.jpg"
                    className="img-fluid w-auto"
                    alt="Portfolio Five"
                    width={0}
                    height={0}
                  />
                </a>
              </LightGallery>
            </div>
          </div>
          <Image
            src="/images/tringle_element.png"
            className="img-fluid w-auto"
            alt="Tringle Element"
            width={0}
            height={0}
          />
          <Image
            src="/images/cross_element.png"
            className="img-fluid w-auto"
            alt="Cross Element"
            width={0}
            height={0}
          />
          <Image
            src="/images/square_element.png"
            className="img-fluid w-auto"
            alt="Square Element"
            width={0}
            height={0}
          />
        </section>
        {/* Portfolio Section End */}
        {/* Pricing Section Start */}
        <section className="d2c_pricing_wrapper position-relative" id="pricing">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-xl-8 offset-md-1 offset-xl-2 text-center">
                <h6>Pricing table</h6>
                <h2 className="mb-3">we offer great affordable prices</h2>
                <p>
                  Professionally evolve web-enabled resources and error-free user a
                  Interactively provide access to unique architectures rather than an
                  customized functionalities. Enthusiastically maintain
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade-left">
                <div className="d2c_card text-center">
                  <h2>starter</h2>
                  <h1>
                    10$<sub>/month</sub>
                  </h1>
                  <div className="d2c_card_body">
                    <ul>
                      <li>Creative Web Enabled</li>
                      <li>Vibrant Color Usage</li>
                      <li>Eye Catching Design</li>
                      <li>
                        <del>Extreme Typography</del>
                      </li>
                      <li>
                        <del>Exceptional Design</del>
                      </li>
                    </ul>
                  </div>
                  <a href="#contact" className="btn">
                    Purchase Now
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-md-0" data-aos="fade-up">
                <div className="d2c_card text-center">
                  <h2>regular</h2>
                  <h1>
                    49$<sub>/month</sub>
                  </h1>
                  <div className="d2c_card_body">
                    <ul>
                      <li>Creative Web Enabled</li>
                      <li>
                        <del>Vibrant Color Usage</del>
                      </li>
                      <li>Eye Catching Design</li>
                      <li>
                        <del>Extreme Typography</del>
                      </li>
                      <li>Exceptional Design</li>
                    </ul>
                  </div>
                  <a href="#contact" className="btn">
                    Purchase Now
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 offset-0 offset-md-3 offset-lg-0" data-aos="fade-right">
                <div className="d2c_card text-center">
                  <h2>Advance</h2>
                  <h1>
                    99$<sub>/month</sub>
                  </h1>
                  <div className="d2c_card_body">
                    <ul>
                      <li>Creative Web Enabled</li>
                      <li>Vibrant Color Usage</li>
                      <li>Eye Catching Design</li>
                      <li>Extreme Typography</li>
                      <li>Exceptional Design</li>
                    </ul>
                  </div>
                  <a href="#contact" className="btn">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/images/square_element.png"
            className="img-fluid w-auto"
            alt="Square Element"
            width={0}
            height={0}
          />
        </section>
        {/* Pricing Section End */}
      </div>
    </>
  )
}
