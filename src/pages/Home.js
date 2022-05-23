import React from 'react';
import Header from '../components/Header';
import PreHeader from '../components/PreHeader';
import Banner from '../components/Banner';
import AboutSection from '../components/AboutSection';
import Brands from '../components/Brands';
import Categories from '../components/Categories';
import ProductSection from '../components/ProductSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Title = ""

const Home = () => {
  document.title = Title
  return (
    <>
    <PreHeader />
    <Header />
    <Banner />
    <AboutSection />
    <Brands />
    <Categories />
    <ProductSection />
    <GallerySection />
    <ContactSection />
    <Footer />
    </>
  )
}

export default Home