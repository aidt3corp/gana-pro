"use client"
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';

export default function Header() {
  useEffect(() => {
    const links = [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "services", label: "Services" },
      { id: "skill", label: "Skills" },
      { id: "work", label: "Work" },
      { id: "pricing", label: "Pricing" },
      { id: "testimonial", label: "Testimonial" },
    ];
    const sections = links.map((link) => document.getElementById(link.id));

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px",
      threshold: [0]
    };

    const observer = new IntersectionObserver((entries) => {
      let visibleSection = null;
      let closestDistance = Number.MAX_VALUE;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionRect = entry.target.getBoundingClientRect();
          const sectionMiddle = sectionRect.top + sectionRect.height / 2;
          const viewportMiddle = window.innerHeight / 2;
          const distanceToViewportMiddle = Math.abs(sectionMiddle - viewportMiddle);
          if (distanceToViewportMiddle < closestDistance) {
            closestDistance = distanceToViewportMiddle;
            visibleSection = entry.target.id;
          }
        }
      });

      if (visibleSection) {
        const activeLinks = document.querySelectorAll(`a.nav-link[href="#${visibleSection}"]`);
        if (activeLinks.length > 0) {
          const allNavLinks = document.querySelectorAll('a.nav-link');
          allNavLinks.forEach(link => {
            link.classList.remove('active');
          });
          activeLinks.forEach(activeLink => {
            activeLink.classList.add('active');
          });
        }
      }
    }, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // This useEffect is responsible for cloning the navbar for small devices (mobile view)
  // It clears the existing mobile navbar content, clones the necessary navigation items,
  // and attaches the click event to each nav-link to toggle the navbar visibility when clicked.
  useEffect(() => {
    function navClone() {
      const mobileNav = document.querySelector('.d2c_mobile_view_body');
      if (mobileNav) {
        mobileNav.innerHTML = '';
        document.querySelectorAll('.js-clone-nav').forEach(function (nav) {
          var clone = nav.cloneNode(true);
          clone.className = 'navbar-nav ml-auto';
          mobileNav.appendChild(clone);
        });

        mobileNav.querySelectorAll('.nav-link').forEach((item) => {
          item.addEventListener('click', () => {
            const toggleButton = document.querySelector('.navbar-toggler');
            if (toggleButton) {
              toggleButton.click(); // Programmatically click the toggler button
            }
          });
        });
      }
    }
    navClone();
  }, []);
  return (
    <header className="d2c_navbar sticky-top">
      <div className="container">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg px-0 py-0" id="d2c_main_nav">
          {/* Logo */}
          <a className="navbar-brand" href="./index.html">
            <Image
              src="/images/logo.png"
              className="w-100 h-auto"
              alt="Logo"
              width={0}
              height={0}
            />
          </a>
          {/* Logo */}
          {/* HamBurger */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i><FontAwesomeIcon icon={faBars} /></i>
            </span>
          </button>
          {/* HamBurger */}
          {/* Nav Item */}
          <div className="collapse navbar-collapse js-clone-nav justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skill">
                  Skill
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item pt-1">
                <a href="#contact" className="btn nav-link d-block d-lg-none">
                  lets talk
                </a>
              </li>
            </ul>
          </div>
          <a href="#contact" className="btn d-none d-lg-block">
            lets talk
          </a>
          {/* Nav Item */}
        </nav>
        {/* Navbar */}
        {/* Tab and Mobile View */}
        <div
          className="collapse navbar-collapse d2c_mobile_view"
          id="navbarSupportedContent"
        >
          <div className="show_width container">
            <div className="text-right">
              <button
                className="navbar-toggler d2c_cross_btn p-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>
                  <i><FontAwesomeIcon icon={faTimes} /></i>
                </span>
              </button>
            </div>
            <div className="navbar px-0 d2c_mobile_view_body" />
          </div>
        </div>
        {/* Tab and Mobile View */}
      </div>
    </header>
  )
}
