import React from 'react';
import './Footer.css';

const footer = () => (
    <footer className="nb-footer footer-custom">
        <div className="container">
            <div className="row">
            <div className="about">
                <div className="col-sm-12 col-md-6">
                    
                        <p>Uğur Mumcu Mah. Güven Başarı Sitesi No:127 Yenimahalle /ANKARA </p>	                    
                    
                </div>
                <div className="col-sm-12 col-md-6">
	                    <div className="social-media">
                            <ul className="list-inline">
                                    <li><a href="http://www.oxyfera.com/" title=""><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="http://www.oxyfera.com/" title=""><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="http://www.oxyfera.com/" title=""><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="http://www.oxyfera.com/" title=""><i className="fa fa-linkedin"></i></a></li>
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