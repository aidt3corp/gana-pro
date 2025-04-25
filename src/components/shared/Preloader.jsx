"use client";
import { useEffect } from 'react';
import logo from '/public/images/logo.png';
import Image from "next/image";

const Preloader = () => {
    useEffect(() => {
        const preloader = document.getElementById('preloader');

        if (preloader) {
            preloader.style.opacity = 1;
            const fadeOutEffect = () => {
                let fadeEffect = setInterval(() => {
                    if (!preloader.style.opacity) {
                        preloader.style.opacity = 1;
                    }
                    if (preloader.style.opacity > 0) {
                        preloader.style.opacity -= 0.05; // Reduce opacity gradually
                    } else {
                        clearInterval(fadeEffect);
                        setTimeout(() => {
                            preloader.style.display = 'none';
                        }, 1000);
                    }
                }, 50); // Adjust the interval to control the speed of fading
            };
            fadeOutEffect();
        }
    }, []);

    return (
        <div id="preloader" className="preloader">
            <Image
                src={logo}
                className='h-auto'
                alt="Preloader"
                width={0}
                height={0}
            />
        </div>
    );
};

export default Preloader;