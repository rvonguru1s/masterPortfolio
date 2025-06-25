import React from "react";
import "./Contact.css";
import { contactPageData, contactInfo } from "../../portfolio";
import SocialMedia from "../../components/socialMedia/SocialMedia";

export default function Contact() {
  return (
    <div className="main" id="contact">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h1 className="heading">{contactPageData.contactSection.title}</h1>
          <p className="subTitle">
            {contactPageData.contactSection.description}
          </p>
        </div>

        {/* Main Content */}
        <div className="contact-content">
          {/* Profile Image */}
          <div className="contact-image-div">
            <img
              alt="Rishika"
              className="contact-image"
              src={require(`../../assets/images/${contactPageData.contactSection.profile_image_path}`)}
            />
          </div>

          {/* Contact Info */}
          <div className="contact-text-div">
            <a className="contact-detail" href={`tel:${contactInfo.number}`}>
              📞 {contactInfo.number}
            </a>
            <br />
            <a
              className="contact-detail-email"
              href={`mailto:${contactInfo.email_address}`}
            >
              📧 {contactInfo.email_address}
            </a>
            <div className="social-media-icons">
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="address-section">
          <h2>{contactPageData.addressSection.title}</h2>
          <p>{contactPageData.addressSection.subtitle}</p>
          {contactPageData.addressSection.location_map_link && (
            <a
              href={contactPageData.addressSection.location_map_link}
              target="_blank"
              rel="noopener noreferrer"
              className="location-link"
            >
              View on Map
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
