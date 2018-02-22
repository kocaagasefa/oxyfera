import React from 'react';
import './Footer.css';

const footer = () => (
    <footer className="nb-footer footer-custom">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div className="about">
                        <img src="images/logo.png" className="img-responsive center-block" alt="" />
                        <p>Uğur Mumcu Mah. Güven Başarı Sitesi No:127 Yenimahalle /ANKARA </p>

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

                <div className="col-xs-6 col-md-3">
                    <div className="footer-info-single">
	                    <h2 className="title">Help Center</h2>
                        <ul className="list-unstyled">
                            <li><a href="http://www.oxyfera.com/" title=""><i className="fa fa-angle-double-right"></i> How to Pay</a></li>
                            <li><a href="http://www.oxyfera.com/" title=""><i className="fa fa-angle-double-right"></i> FAQ's</a></li>
                            <li><a href="http://www.oxyfera.com/" title=""><i className="fa fa-angle-double-right"></i> Sitemap</a></li>
                            <li><a href="http://www.oxyfera.com/" title=""><i className="fa fa-angle-double-right"></i> Delivery Info</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-xs-6 col-md-3">
                    <div className="footer-info-single">
                        <h2 className="title">Customer information</h2>
                        <ul className="list-unstyled">
                            <li><a href="http://www.oxyfera.com/" title=""><i className="fa fa-angle-double-right"></i> About Us</a></li>
                            <li><a href="http://www.oxyfera.com/" title=""><i className="fa fa-angle-double-right"></i> FAQ's</a></li>
                        </ul>
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