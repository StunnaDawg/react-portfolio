import React from 'react'; 
// this section helps handle the section changes
function NavLinks({ currentSection, handleSectionChange}) {
    return (
        <nav className="header-links">
            <ul className='header'>
                <li><a href="#about"
                onClick={() => handleSectionChange('About')}
                    className={currentSection === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About Me</a>
                    </li>
                <li><a href="#portfolio"
                onClick={() => handleSectionChange('Portfolio')}
                className={currentSection === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                    </a>
                    </li>
                 <li><a href="#resume"
                onClick={() => handleSectionChange('Resume')}
                className={currentSection === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                    </a>
                    </li> 
                {/* <li><a href="#contact-form"
                onClick={() => handleSectionChange('Contact')}
                className={currentSection === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact Me
                </a>
                </li> */}
            </ul>
        </nav>
    )
}

export default NavLinks