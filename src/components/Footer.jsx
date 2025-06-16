import React from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <p>&copy; {new Date().getFullYear()} Portfólio FATEC. Todos os direitos reservados.</p>
            <p>Estudante na FATEC Jales</p>
          </div>
          
          <div className="footer-social">
            <a 
              href="https://github.com/kosnika25" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="social-icon" />
            </a>
            <a 
              href="https://linkedin.com/in/seu-perfil" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>
        
      
      </div>
    </footer>
  );
};

export default Footer;