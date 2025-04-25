'use client'
import React, { useEffect, useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

// Custom Arrow Component
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="d2c_carousel_left_btn" aria-label="carousel-control" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className="d2c_carousel_right_btn" aria-label="carousel-control" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

export default function Contact() {
  const formRef = useRef(null);
  useEffect(() => {
    const form = formRef.current;
    const handleFormSubmit = (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    };
    if (form) {
      form.addEventListener('submit', handleFormSubmit);
    }
    return () => {
      if (form) {
        form.removeEventListener('submit', handleFormSubmit);
      }
    };
  }, []);

  //  settings 
  const settings = {
    centerMode: true,
    centerPadding: '0px',
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  
  return (
    <div className="d2c_testimonial_contact_bg">
      {/* Testimonial Section Start */}
      <section className="d2c_testimonial_wrapper" id="testimonial">
        <div className="container">
          <h6 className="text-center">Testimonial</h6>
          <h2 className="text-center">what out clients say</h2>
          <div className="row d2c_testimonial_slider px-5">
            <Slider {...settings}>
              <div className="col">
                <div className="d2c_testimonial_card px-1 px-md-5">
                  <h3 className="text-center">
                    I&apos;ve been working asweb developer for the past two years &amp;
                    have experience in multiple frameworks. I&apos;m passionate about
                    creating high quality products and beautiful user interfaces,
                    giving my users the best experience they could be the possibly
                    expect in my post was good.
                  </h3>
                  <p className="mb-0">Ashley Newman</p>
                  <span className="mb-2 mb-lg-3">Founder at Creatt Studios</span>
                  <ul className="list-group list-group-horizontal">
                    <li>
                      <a
                        href="https://www.facebook.com/Designtocodes"
                        target="_blank"
                      >
                        <i><FontAwesomeIcon icon={faFacebookF} /></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/designtocodes/"
                        target="_blank"
                      >
                        <i><FontAwesomeIcon icon={faLinkedinIn} /></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/DesignToCodes" target="_blank">
                        <i><FontAwesomeIcon icon={faTwitter} /></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="d2c_testimonial_card px-1 px-md-5">
                  <h3 className="text-center">
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don&apos;t look even
                    slightly believable. If you are going to use a passage of Lorem
                    Ipsum,
                  </h3>
                  <p className="mb-0">David Shakib </p>
                  <span className="mb-2 mb-lg-3">CTO at Creatt Studios</span>
                  <ul className="list-group list-group-horizontal">
                    <li>
                      <a
                        href="https://www.facebook.com/Designtocodes"
                        target="_blank"
                      >
                        <i><FontAwesomeIcon icon={faFacebookF} /></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/designtocodes/"
                        target="_blank"
                      >
                        <i><FontAwesomeIcon icon={faLinkedinIn} /></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/DesignToCodes" target="_blank">
                        <i><FontAwesomeIcon icon={faTwitter} /></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="d2c_testimonial_card px-1 px-md-5">
                  <h3 className="text-center">
                    Latin words, combined with a handful of model sentence structures,
                    to generate Lorem Ipsum which looks reasonable. The generated
                    Lorem Ipsum is therefore always free from repetition, injected
                    humour, or non-characteristic words etc.
                  </h3>
                  <p className="mb-1">Samuel Rasel</p>
                  <span className="mb-2 mb-lg-3">Manager at Creatt Studios</span>
                  <ul className="list-group list-group-horizontal">
                    <li>
                      <a
                        href="https://www.facebook.com/Designtocodes"
                        target="_blank"
                      >
                        <i><FontAwesomeIcon icon={faFacebookF} /></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/designtocodes/"
                        target="_blank"
                      >
                        <i><FontAwesomeIcon icon={faLinkedinIn} /></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/DesignToCodes" target="_blank">
                        <i><FontAwesomeIcon icon={faTwitter} /></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* Testimonial Section End */}
      {/* Contact Section Start */}
      <section className="d2c_contact_wrapper position-relative" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-left">
              <div className="d2c_card">
                <h6>contact</h6>
                <h2 className="mb-3">get in touch</h2>
                <form
                  ref={formRef}
                  className="form_validation needs-validation"
                  noValidate
                >
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustomFirstName"
                      placeholder="Name :"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <div className="input-group has-validation">
                      <input
                        type="email"
                        className="form-control"
                        id="validationCustomEmail"
                        placeholder="Email :"
                        autoComplete="on"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      rows={5}
                      id="validationCustomMessage"
                      placeholder="Write Message :"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12">
                    <button className="btn" type="submit">
                      Contact us
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 " data-aos="fade-right">
              <div className="d2c_card">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      className="gmap_iframe"
                      src="https://maps.google.com/maps?hl=en&q=newyork&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/square_element.png"
          className="w-auto h-auto"
          alt="Square Element"
          width={0}
          height={0}
        />
        <Image
          src="/images/tringle_element.png"
          className="w-auto h-auto"
          alt="Tringle Element"
          width={0}
          height={0}
        />
      </section>
      {/* Contact Section End */}
    </div>
  )
}
