import React, { Component } from 'react';
import "./footer.css";
import recent1 from '../images/recent1.PNG';
import recent2 from '../images/recent2.PNG';
import recent3 from '../images/recent3.PNG';
import recent4 from '../images/recent4.PNG';
import recent5 from '../images/recent5.PNG';
import recent6 from '../images/recent6.PNG';
import logo from '../images/logo2.PNG';

class Footer extends Component {
    render() {
    return (
        
        <section>
           <footer >
        <div id="upperfooter" className="row">

            <div className="col-12 col-md-3">
                <div>

                    <img src={logo} alt="logo" className="footerlogo"/>
                    <p>Morbi gravida imperdiet rutrum fusce mattis, lectus consequat vestibulum, duinibh fermentum
                        ligula.
                    </p>
                </div>
            </div>
            <div className="col-12 col-md-3">
                <h4>Contact Details
                </h4>

                <div id="contact-details">
                
                    <ul className="p-0">
                        <p>
                            <i className="fa fa-fw fa-map-marker"></i>
                            <strong>Address:</strong>
                            123 Seward Street, Oklahoma City, USA
                        </p>
                    </ul>
                    <ul className="p-0">
                        <p>
                            <i className="fa fa-fw fa-user"></i>
                            <strong>Phone:</strong>
                            +48 880 440 110
                        </p>
                    </ul>
                    <ul className="p-0">
                        <p id="email">
                            <i className="fa fa-fw fa-envelope-o"></i>
                            <strong>Email:</strong>
                            mail@example.com
                        </p>
                    </ul>

                </div>
            </div>
            <div className="col-12 col-md-3" id="photo-stream">

                <h4>Photo Stream
                </h4>
                <img src={recent1}/>
                <img src={recent2}/>
                <img src={recent3}/>
                <img src={recent4}/>
                <img src={recent5}/>
                <img src={recent6}/>
            </div>
            <div className="col-12 col-md-3">

                <h4>Twitter</h4>
                <div >
                    <ul id="twitter" className="p-0">
                        <li>
                            <p>
                                <span>@envato_help</span>
                                Thanks, but what about item thumbnails? Several authors have the same issue.
                                <br/>
                                <small>1195 days ago</small>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <footer >
        <div id="lowerfooter" className="pt-3">
            <div className="row">
                <div className="col-12 col-md-9">
                    <p>
                        © Copyright 2015 by <a href="#" id="copyright">Nevia</a> . All Rights Reserved.
                    </p>
                </div>
                <div className="col-12 col-md-3">
                    <ul className="row">
                        <li>
                            <a href="#">FAQ's</a>
                        </li>
                        <li>
                            <a href="#">Sitemap</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
   
   </section>
    )
}}
export default Footer;