import { useState } from 'react';
import './footer.css';
import insta from "./assets/insta.png"
// import facebook from "./assets/facebook.png"
import X from "./assets/twitter.png"
function Footer() {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobile(prevState => !prevState);
    };

    return (
        <nav className="footer">
            <div className="footer-container">

                <div
                    className={`footer-toggle ${isMobile ? "is-active" : ""}`}
                    id="mobile-menu"
                    aria-label="Toggle navigation"
                    onClick={toggleMobileMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <p className = "copywrite">&copy; {new Date().getFullYear()} Saga Digital </p>
                <ul className={`footer-menu ${isMobile ? "active" : ""}`}>
                    <li className="footer-item">
                        <a href="https://www.instagram.com/sagadigitalorg/" className="footer-links">
                        <img className='instalogo' src={insta} alt="Instagram" />
                        </a>
                    </li>
                    <li className="footer-item">
                        <a href="https://x.com/sagadigitalorg" className="footer-links">
                        <img className='X' src={X} alt="X" />
                        </a>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Footer;
