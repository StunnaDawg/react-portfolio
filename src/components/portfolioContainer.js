import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import NavLinks from './NavLinks';
import Project from './Project'
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

export default function portfolioContainer() {
    return (
        <div>
        <Header/>
        <NavLinks/>
        <About/>
        <Contact/>
        <Portfolio/>
        <Footer/>
        </div>
    )
}