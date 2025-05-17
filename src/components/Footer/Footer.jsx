import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaTelegram } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdKeyboardArrowUp } from 'react-icons/md';
import './Footer.css';
import { FaPhone } from 'react-icons/fa';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">Your Name</div>
          <div className="footer-contact">
            <a href="mailto:awalahimed463@gmail.com">
              <MdEmail /> awalahimed463@gmail.com
            </a>
            <a href="tel:+251966909884">
              <FaPhone /> +251 966 909 884
            </a>
            <a href="#">
              <MdLocationOn /> Nekemte, Oromia
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Navigation</h3>
          <nav className="footer-nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-section">
          <h3>Let's Contact me!👇</h3>
          <div className="social-links">
            <a href="https://github.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://t.me/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </a>
          </div>
          <p>Open to new opportunities</p>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Muhamadawal. All rights reserved.
      </div>

      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={handleBackToTop}
        aria-label="Back to top"
      >
        <MdKeyboardArrowUp />
      </button>
    </footer>
  );
};

export default Footer;