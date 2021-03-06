import React from 'react';
import './Footer.css';

const footer = () => (
    <footer className="nb-footer footer-custom">
        <div className="container">
            <div className="row">
            <div className="about">
                <div className="col-xs-12 col-sm-6">
                    
                        <p>Uğur Mumcu Mah. Güven Başarı Sitesi No:127 Yenimahalle /ANKARA </p>	                    
                    
                </div>
                <div className="col-xs-12 col-sm-6">
	                    <div className="social-media">
                            <ul className="list-inline">
                                    <li><a href="https://www.facebook.com/Oxyfera-2118194871745074/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://twitter.com/oxyfera" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.instagram.com/oxyfera/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <section className="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <p>Copyright © 2018. Oxyfera A.Ş.</p>
                    </div>
                    <div className="col-sm-6"></div>
                </div>
            </div>
        </section>
</footer>
);

export default footer;