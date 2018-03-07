import React from 'react';
import {Panel} from 'react-bootstrap';
import './Address.css';
import FontAwesome from 'react-fontawesome';

const address = () => (
    <Panel >
        <div className="Address">
            <div className="Address-Item">
                <div className= "Address-Item-Left" >               
                    <FontAwesome name="location-arrow" size="3x"/>                    
                </div>
                <div className="Address-Item-Right">
                    Uğur Mumcu Mah. Güven Başarı Sitesi No:127 
                    <br /><br/>
                    <b className="Address-City-Block">Yenimahalle /ANKARA</b>
                </div>
            </div>
            <div className="Address-Item">
                <div className= "Address-Item-Left" >               
                    <FontAwesome name="phone" size="3x"/>                    
                </div>
                <div className="Address-Item-Right">
                    <FontAwesome name="phone"/> 0216 377 49 65
                    <br /><br/>
                    <FontAwesome name="mobile"/> 0507 394 92 47
                </div>
            </div>
            <div className="Address-Item">
                <div className= "Address-Item-Left" >               
                    <FontAwesome name="envelope" size="3x"/>                    
                </div>
                <div className="Address-Item-Right">
                    oxyfera@outlook.com
                </div>
            </div>
        </div>
    </Panel>
);

export default address;