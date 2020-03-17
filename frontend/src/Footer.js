import React from 'react';
import './style.scss';
import logo from './assets/logo1.png'
import location from './assets/location.png'
import mail from './assets/mail.png'
import phone from './assets/phone.png'

function Footer() {
    return (
        <div className="Foot-body">
            <div className="container">
                <div className="col1">
                    <img src={logo} alt='logo' style={{height:'150px',width:'150px'}}></img>
                </div>
                <div className="col1">
                    <div>
                    <h2>About Us</h2>
                    </div>
                    <div style={{}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris mattis ultricies metus. Integer laoreet rhoncus ipsum,
                        a ornare mi. Pellentesque elementum fringilla risus,</p>
                    </div>
                </div>
                <div className="col2">
                    <div>
                        <h2>Contact Us</h2>
                    </div>
                    <div className="contact">
                        <div className="twocol">
                            <div>
                            <img src={location} alt='logo' style={{height:'20px',width:'20px',paddingRight:'10px',marginTop:'10px'}}></img>
                            </div>
                            <div>
                                <p>251, Bakshi Nagar, Jammu, India</p>
                            </div>
                        </div>
                        <div className="twocol">
                        <div>
                            <img src={phone} alt='logo' style={{height:'20px',width:'20px',paddingRight:'10px',marginTop:'10px'}}></img>
                            </div>
                            <div>
                                <p>9858804931</p>
                            </div>
                        </div>
                        <div className="twocol">
                        <div>
                            <img src={mail} alt='logo' style={{height:'20px',width:'20px',paddingRight:'10px',marginTop:'10px'}}></img>
                            </div>
                            <div>
                                <p>rakshit.mahajan@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
