import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faPaperPlane, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className="d2c_footer_wrapper overflow-hidden">
        <div className="d2c_footer_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-4 col-xl-5 mb-5 mb-lg-0" data-aos="fade-left">
                <div className="d2c_footer_left">
                  <a href="./index.html">
                    <Image
                      src="/images/footer_logo.png"
                      className="w-auto h-auto"
                      alt="Footer Logo"
                      width={0}
                      height={0}
                    />
                  </a>
                  <p className="mb-0">
                    I&apos;ve been working as web developer for the past two years, and
                    have experience in multiple frameworks.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl" data-aos="fade-up">
                <h4>Contact Details</h4>
                <ul className="d2c_info_link mb-5 mb-md-0">
                  <li className="mb-3">
                    <a href="tel:2195550114">
                      <span>
                        <i><FontAwesomeIcon icon={faPhoneAlt} /></i>
                      </span>
                      219 555-0114
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="mailto:designtocodes@ngapro.com">
                      <span>
                        <i><FontAwesomeIcon icon={faEnvelope} /></i>
                      </span>
                      designtocodes@ngapro.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/search/Royal+2464+Ln.+Mesa,+New+Jersey/@36.8616406,-103.4819732,5z/data=!3m1!4b1?entry=ttu"
                      target="_blank"
                    >
                      <span>
                        <i><FontAwesomeIcon icon={faMapMarkerAlt} /></i>
                      </span>
                      Royal 2464 Ln. Mesa, New Jersey
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4 col-xl" data-aos="fade-right">
                <h4>Newsletter</h4>
                <form className="needs-validation" noValidate="">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email Address:"
                      aria-describedby="newsletter_btn"
                      autoComplete="on"
                      required=""
                    />
                    <button className="btn" type="submit" id="newsletter_btn">
                      <i><FontAwesomeIcon icon={faPaperPlane} /></i>
                    </button>
                  </div>
                </form>
                <ul className="d2c_social_link list-group list-group-horizontal">
                  <li>
                    <a
                      href="https://www.facebook.com/Designtocodes"
                      target="_blank"
                    >
                      <i><FontAwesomeIcon icon={faFacebookF} /></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/DesignToCodes" target="_blank">
                      <i><FontAwesomeIcon icon={faTwitter} /></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/designtocodes/"
                      target="_blank"
                    >
                      <i><FontAwesomeIcon icon={faLinkedin} /></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/designtocodes/"
                      target="_blank"
                    >
                      <i><FontAwesomeIcon icon={faInstagram} /></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="d2c_copy_wrapper">
        <p className="mb-0">© 2021 - {new Date().getFullYear()} {""}
          <a href="https://www.designtocodes.com/" target="_blank">DesignToCodes</a>
          . All Right Reserved</p>
      </div>
    </>
  )
}

