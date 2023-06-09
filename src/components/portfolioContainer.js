import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import NavLinks from './NavLinks';
import Resume from './pages/Resume';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

// On this paege we set the current section depending on the link clicked

export default function PortfolioContainer() {
    const [currentSection, setCurrentSection] = useState('About');
    const renderPage = () => {
        if ( currentSection === 'About') {
            return <About/>
        } 

         if ( currentSection === 'Contact') {
            return <Contact/>
        } 

        if ( currentSection === 'Portfolio') {
            return <Portfolio/>
        }

        if ( currentSection === 'Resume') {
            return <Resume/>
        }
        
            return <About/>
    }; 

    const handleSectionChange = (section) => setCurrentSection(section);

    return (
        <div>
        <Header/>
        <NavLinks currentSection={currentSection} handleSectionChange={handleSectionChange}/>
        {renderPage()}
        <Footer/>
        </div>
    )
}