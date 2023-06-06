import React from 'react'; 

export default function Nav({ currentSection, handleSectionChange}) {
    return (
        <nav className="header-links">
            <ul>
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
                {/* <li><a href="#resume"
                onClick={() => handleSectionChange('About')}
                className={currentSection === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                    </a>
                    </li> */}
                <li><a href="contact-form"
                onClick={() => handleSectionChange('Contact')}
                className={currentSection === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact Me
                </a>
                </li>
            </ul>
        </nav>
    )
}