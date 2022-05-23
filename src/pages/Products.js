import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import PreHeader from '../components/PreHeader';
import NavBanner from '../components/NavBanner';
import Brands from '../components/Brands';
import AllProducts from '../components/AllProducts';
import CategoryProducts from '../components/CategoryProducts';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Title = "Products - Arklink";


const Products = () => {
  document.title = Title

  const { category } = useParams();

  return (
    <>
    <PreHeader />
    <Header />
    <NavBanner heading={category ? category : 'Products'}/>
    { category ? <CategoryProducts category={category} /> : <AllProducts /> }
    <Brands />
    <GallerySection />
    <ContactSection />
    <Footer />
    </>
  )
}

export default Products