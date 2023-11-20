import React from "react";
import "./ContactDetails.css";

import mailIcon from "../../images/icons/mail.png";
import mapIcon from "../../images/icons/map.png";
import phoneIcon from "../../images/icons/telephone.png";
import whatsappIcon from "../../images/icons/whatsapp.png";

function ContactDetails() {
  return (
    <div className="ContactDetails">
      <div
        id="ContactDetails"
        style={{ position: "relative", top: "-85px" }}
      ></div>
      <div className="ContactDetailsCardsWrapper">
        <h1>צרו איתנו קשר!</h1>

        <a className="ContactDetailsCard" href="mailto:" target="_blank">
          <img src={mailIcon} alt="mail icon" />
          <p>bdfhbhsf@gmail.com</p>
        </a>
        <a
          className="ContactDetailsCard"
          href="tel:+972586707014"
          target="_blank"
        >
          <img src={phoneIcon} alt="phone icon" />
          <p>058-6707014</p>
        </a>
        <a
          className="ContactDetailsCard"
          href="https://wa.me/+972586707014"
          target="_blank"
        >
          <img src={whatsappIcon} alt="whatsapp icon" />
          <p>058-6707014</p>
        </a>
        <a
          className="ContactDetailsCard"
          href="https://maps.app.goo.gl/YH55SbyRaYC69snn9"
          target="_blank"
        >
          <img src={mapIcon} alt="map icon" />
          <p>ירושלים 69, בני ברק. </p>
        </a>
      </div>
      <div className="ContactDetailsMap">
        <iframe
          className="ConMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.5085901378075!2d34.8260076!3d32.0825375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4a312ff6763d%3A0x2611ca7ea7a0d05!2z157XoteT16DXmSDXmdeo15XXqdec15nXnQ!5e0!3m2!1siw!2sil!4v1700405246198!5m2!1siw!2sil"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactDetails;
