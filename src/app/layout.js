import 'bootstrap/dist/css/bootstrap.css';
import "@/assets/css/globals.css";
import "@/assets/css/responsive.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Preloader from '@/components/shared/Preloader';
import AOSProvider from '@/components/shared/AOSProvider';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import ScrollButton from '@/components/shared/ScrollButton';
import BootstrapClient from '@/components/shared/BootstrapClient';
config.autoAddCss = false;

export const metadata = {
  charset: 'UTF-8',
  robots: 'noindex, nofollow',
  openGraph: {
    title: "NextGenAppsPro - Next.js Portfolio Template for Web Developers",
    description: 'Impress clients with NextGenAppsPro – Modern Next.js Portfolio Template for Web Developers. That makes your work shine. Purchase the best!',
    images: [
      {
        url: 'https://designtocodes.com/wp-content/uploads/2024/12/NextGenAppsPro-Next-Js-Portfolio-Template-for-Web-Developers.jpg',
      },
    ],
  },
  title: "NextGenAppsPro - Next.js Portfolio Template for Web Developers",
  description: "Impress clients with NextGenAppsPro – Modern Next.js Portfolio Template for Web Developers. That makes your work shine. Purchase the best!"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.svg" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Preloader />
        <BootstrapClient />
        <AOSProvider>
          <Header />
          <main data-bs-spy="scroll" data-bs-target="#d2c_main_nav" className="position-relative overflow-hidden">
            {children}
          </main>
          <Footer />
        </AOSProvider>
        <ScrollButton />
      </body>
    </html>
  );
}

/* 
    Template Name: NextGenAppsPro - Next.js Portfolio Template for Web Developers
    Description: Impress clients with NextGenAppsPro – Modern Next.js Portfolio Template for Web Developers. That makes your work shine. Purchase the best!
    Template URL: https://designtocodes.com/product/nextgenappspro-next-js-portfolio-template-for-web-developers
    Author: DesignToCodes
    Author URL: https://designtocodes.com
    Text Domain: NextGenAppsPro | Next.js | Portfolio Template
*/