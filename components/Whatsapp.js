// components/SocialMediaIcons.js
"use client"


import { useState } from 'react';

const SocialMediaIcons = ({ phoneNumber }) => {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [isInstagramOpen, setIsInstagramOpen] = useState(false);
  const [isFacebookOpen, setIsFacebookOpen] = useState(false);

  const handleIconClick = (socialMedia) => {
    switch (socialMedia) {
      case 'whatsapp':
        setIsWhatsAppOpen(!isWhatsAppOpen);
        setIsInstagramOpen(false);
        setIsFacebookOpen(false);
        break;
      case 'instagram':
        setIsInstagramOpen(!isInstagramOpen);
        setIsWhatsAppOpen(false);
        setIsFacebookOpen(false);
        break;
      case 'facebook':
        setIsFacebookOpen(!isFacebookOpen);
        setIsWhatsAppOpen(false);
        setIsInstagramOpen(false);
        break;
      default:
        setIsWhatsAppOpen(false);
        setIsInstagramOpen(false);
        setIsFacebookOpen(false);
    }
  };

  return (
    <div className="social-media-icons">
      <div className={`widget ${isWhatsAppOpen ? 'open' : ''}`}>
        <iframe
          src={`https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}`}
          title="WhatsApp Widget"
        ></iframe>
      </div>
      <div className={`widget ${isInstagramOpen ? 'open' : ''}`}>
        {/* Add Instagram Widget or link */}
        {/* Example: <a href="https://www.instagram.com/your_username/" target="_blank">Instagram</a> */}
      </div>
      <div className={`widget ${isFacebookOpen ? 'open' : ''}`}>
        {/* Add Facebook Widget or link */}
      <a href="https://www.facebook.com/people/Prasad-Flowers/pfbid0dw98kEYkUj1FvvmfwocYJR96C4ZZ2kgMKsaz4xCPquNisc1NJsjAkr5hk7WVTDF1l/" target="_blank">Facebook</a>
      </div>
      <div className="icon whatsapp" onClick={() => handleIconClick('whatsapp')}>
        <img src="/whatsapp.webp" alt="WhatsApp Icon" />
      </div>
      <div className="icon instagram" onClick={() => handleIconClick('instagram')}>
        {/* Add Instagram icon */}
        <img src="/instagram.webp" alt="Instagram Icon" />
      </div>
      <div className="icon facebook" onClick={() => handleIconClick('facebook')}>
        {/* Add Facebook icon */}
        <img src="/facebook.svg" alt="Facebook Icon" />
      </div>

      <style jsx>{`
        .social-media-icons {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-bottom: 10px;
        }

        /* Responsive styling for small devices */
        @media (max-width: 600px) {
          .icon {
            width: 40px;
            height: 40px;
          }
        }

        .whatsapp {
          background-color: #25d366;
        }

        .instagram {
          background-color: #bc2a8d; /* Instagram color */
        }

        .facebook {
          background-color: #1877f2; /* Facebook color */
        }

        .widget {
          position: fixed;
          bottom: 90px;
          right: 20px;
          width: 300px;
          height: 400px;
          border: none;
          transition: transform 0.3s ease;
          transform: scale(0);
          transform-origin: bottom right;
        }

        .widget.open {
          transform: scale(1);
        }

        iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default SocialMediaIcons;
