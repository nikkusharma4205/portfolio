import React, { useRef } from "react";
import './contact.css';
import Walmart from '../..//Assets/walmart.png';
import Adobe from '../..//Assets/adobe.png';
import Microsoft from '../..//Assets/microsoft.png';
import Facebook from '../..//Assets/facebook.png';
import FacebookIcon from '../../Assets/facebook-icon.png';
import TwitterIcon from '../../Assets/twitter.png';
import YouTubeIcon from '../../Assets/youtube.png';
import InstagramIcon from '../../Assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => 
        {
        e.preventDefault();

        emailjs.sendForm('service_qms7llr', 'template_ju2bn6m', form.current, 'PN0Vu5UK3AT8_r0gQKwLr')
            .then((result) => {
                    console.log(result.text);
                    e.target.reset();
                    alert('Email Sent !');
                }, (error) => {
                    console.log(error.text);
                });
        };

    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientsDesc">I have had the oportunity to work with a diverse group of companies. Some of the notable companies I have worked with includes </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="" className="clientImg" />
                    <img src={Adobe} alt="" className="clientImg" />
                    <img src={Microsoft} alt="" className="clientImg" />
                    <img src={Facebook} alt="" className="clientImg" />
                </div>
            </div>
            <div id="Contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="conatactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name" />
                    <input type="email" className="email" placeholder="Your Email" name="your_email" />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="Facebook" className="link" />
                        <img src={TwitterIcon} alt="Twitter" className="link" />
                        <img src={YouTubeIcon} alt="Youtube" className="link" />
                        <img src={InstagramIcon} alt="Instagram" className="link" />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;