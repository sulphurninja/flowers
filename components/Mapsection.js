// components/MapSection.js
import InstagramIcon from '../public/instagram.webp';
import FacebookIcon from '../public/facebook.png';
import WhatsappIcon from '../public/whatsapp.webp';

const MapSection = () => {
    return (
        <div className="mx-4 mt-12 grid-cols-2 text-center grid">
            <div>
                <h1 className="font-bold text-4xl">Reach Us</h1>
                <address>Talegaon Dabhade MIDC, Pune - 412101</address>
                <p className="font-bold">
                    Prasad Rakshe
                    <br />
                    Mob. +91 8975531211
                    <br />
                    <div className='flex gap-4 mt-4 justify-center'>

                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img src='/instagram.webp' alt="Instagram" className="w-8 h-8 mx-2" />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src='/facebook.svg' alt="Facebook" className="w-8 h-8 mx-2" />
                        </a>
                        <a href="https://wa.me/918975531211" target="_blank" rel="noopener noreferrer">
                            <img src='/whatsapp.webp' alt="WhatsApp" className="w-8 h-8 mx-2" />
                        </a>
                    </div>
                </p>
            </div>

            <iframe
                title="Map"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7292.595222156991!2d73.682178!3d18.764168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2be96734d0453%3A0x2a6b6f532257b487!2sYour%20Location!5e0!3m2!1sen!2sin!4v1649035157464!5m2!1sen!2sin"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default MapSection;
