import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

function Footer() {
    return (
        <div className="footer bg-dark text-white">
            <div className="footer-section">
                <h5><u>Address</u></h5>
                <p>BEST PRICE ORGANIC MILLETS AND CEREALS</p>
                <p>Opp Swarna Multiplex</p>
                <p>Ibrahimpatnam</p>
                <p>Andhra Pradesh</p>
            </div>

            <div className="footer-section">
                <h5><u>Contact</u></h5>
                <p>
                    <a href="tel:+919492491857">
                        <i className="fas fa-phone"></i>
                    </a>
                    +91 9492491857
                </p>
                <p>
                    <a href="https://www.instagram.com/bestprice_organics?utm_source=qr&igsh=anl3YzVjcnU4bWRj" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i> Instagram 
                    </a>
                </p>
                <p>
                    <a href="https://www.facebook.com/profile.php?id=100077552176587" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i> Facebook
                    </a>
                </p>
                <p>
                    <a href="https://wa.me/9492491857" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i> Whatsapp
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Footer;
