import React from 'react';
import './PlaceCard.css';

const URL_VIEW_LARGE="https://www.google.com/maps/place/U%C4%9Fur+Mumcu+Mahallesi,+G%C3%BCven+Ba%C5%9Far%C4%B1+Sitesi+No:80,+06370+Yenimahalle%2FAnkara/@39.9623599,32.7438897,18z/data=!3m1!4b1!4m5!3m4!1s0x14d349b6c1e73cdd:0xb2f8e98f5b89474!8m2!3d39.9623599!4d32.744984?hl=tr-TR";
const URL_DIRECTION="https://www.google.com/maps/dir//39.962398,32.745058/@39.962398,32.745058,18z?hl=tr-TR";

const placeCard = () => (
    <div className="PlaceCard">
    <div className="placecard__container">

      <div className="placecard__left">
        <p className="placecard__business-name">Oxyfera A.Ş.</p>
        <p className="placecard__info">Uğur Mumcu Mah. Güven Başarı Sitesi No:127 Yenimahalle /ANKARA</p>
         
        <a className="placecard__view-large" target="_blank" href={URL_VIEW_LARGE} id="A_41">Google Haritalar ile aç</a>
      </div> 

      <div className="placecard__right">
          <a className="placecard__direction-link" target="_blank" href={URL_DIRECTION}
          id="A_9">
              <div className="placecard__direction-icon"></div>
              Rota
          </a>
      </div> 

    </div>
</div>
);

export default placeCard;