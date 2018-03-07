import React from 'react';
import {Image} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './AboutUs.css';
import aboutUsImage from '../../../assets/images/aboutus/aboutus.jpg';


const aboutUs = props => (
    <div className="AboutUs" >
        <div className="AboutUs-Card">
            <Image src={aboutUsImage} circle style= {{maxWidth:200,border:"2px solid #ccc"}}/>
            <div className="AboutUs-Text" >
                <p>
                        Oxyfera olarak Türkiye’nin tüm illerinde oksijen barların satış,kiralama,teknik servis,sarf ve yedek 
                        malzeme tedariki hizmetlerini sağlıyor sağlıklı yaşam teknolojileri üzerine çalışıyoruz.Aynı zamanda 
                        Altitude Training (irtifa antremanları) sistemleri tasarlıyor ve projeleri gerçekleştiriyoruz. 
                        Yapay irtifa antremanları sistemlerinin  ülkemizdeki ilk ve tek üreticisi olma özelliğini taşıyoruz.                        
                </p>  
            </div>
            <LinkContainer to={props.match.url.substring(0,props.match.url.lastIndexOf("/"))+"/contact"}>
                <a className="AboutUs-Contact-Button">
                            İLETİŞİM</a>
            </LinkContainer>
        </div>
    </div>
);

export default aboutUs;