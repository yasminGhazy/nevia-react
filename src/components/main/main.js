import React, { Component } from 'react';
import "./main.scss"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import slide1 from './../../images/slide1.PNG';
import slide2 from './../../images/slide2.PNG';
import slide3 from './../../images/slide3.PNG';
import recent1 from './../../images/recent1.PNG';
import recent2 from './../../images/recent2.PNG';
import recent3 from './../../images/recent3.PNG';
import recent4 from './../../images/recent4.PNG';
import recent5 from './../../images/recent5.PNG';
import recent6 from './../../images/recent6.PNG';
import recent7 from './../../images/recent7.PNG';
import recent8 from './../../images/recent8.PNG';

class Main extends Component {
    render() {
        return (
            <main >

                <div id="slideshow" className="carousel slide" data-ride="true" data-interval="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={slide1} alt="First slide" id="carousel-img" />
                            <h3 id="slide1">Image in Slide Directly</h3>

                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={slide2} alt="Second slide" id="carousel-img" />
                            <h3 id="slide2">Powerful HTML5 Template</h3>

                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={slide3} alt="Third slide" id="carousel-img" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#slideshow" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#slideshow" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div id="gen-info">
                    <div className="row pt-5">
                        <div className="col-12 col-md-4">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fa fa-bullhorn fa-2x"></i></div>
                                <div className="col-10">
                                    <h4>Clean Design</h4>
                                    <p>Incredibly clean design provides you powerful way to grow your business.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fa fa-magic fa-2x"></i></div>
                                <div className="col-10">
                                    <h4>Responsive</h4>
                                    <p>This theme is responsive, so it will looks awesome on all mobile devices.
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="row">
                                <div className="col-2">
                                    <i className="fa fa-flask fa-2x"></i></div>
                                <div className="col-10">
                                    <h4>Retina Ready</h4>
                                    <p>Nevia is ready for retina and looks fantastic on high-resolution
                                    displays.
                                </p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

                <div id="recent" className="pt-5">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <h4>Recent Work
                        </h4>
                            <p>Adding portfolio entries with this shortcode is now easier then ever.</p>
                        </div>
                        <div className="col-12 col-md-9" id="owl-slider">
                        <OwlCarousel items={3}
                            className="owl-theme"
                            loop
                            nav
                            margin={8} >
                            <div className="recent-div">
                                <img src={recent1} />
                                <div className="img-text">
                                    <h5>Time Is Running Out</h5>
                                    <span> Photography</span>
                                </div>
                            </div>
                            <div className="recent-div"><img src={recent2} />
                                <div className="img-text">
                                    <h5>Time Is Running Out</h5>
                                    <span> Photography</span>
                                </div>
                            </div>
                            <div className="recent-div"><img src={recent3} />
                                <div className="img-text">
                                    <h5>Time Is Running Out</h5>
                                    <span> Photography</span>
                                </div>
                            </div>
                            <div className="recent-div"><img src={recent4} />
                                <div className="img-text">
                                    <h5>Time Is Running Out</h5>
                                    <span> Photography</span>
                                </div>
                            </div>
                            <div className="recent-div"><img src={recent5} />
                                <div className="img-text">
                                    <h5>Time Is Running Out</h5>
                                    <span> Photography</span>
                                </div>
                            </div>
                            <div className="recent-div"><img src={recent6} />
                                <div className="img-text">
                                    <h5>Time Is Running Out</h5>
                                    <span> Photography</span>
                                </div>

                            </div>
                            <div className="recent-div"><img src={recent7} />
                                <div className="img-text">
                                    <h5>Time Is Running Out</h5>
                                    <span> Photography</span>
                                </div>
                            </div>
                            <div className="recent-div"><img src={recent8} />
                                <div className="img-text">
                                    <h5>Time Is Running Out</h5>
                                    <span> Photography</span>
                                </div>
                            </div>


                        </OwlCarousel></div>
                
                    </div>
                </div>
                <div className="container">
                    <div id="news" className="row pt-5">
                        <div className="col-12 col-md-6">
                            <div >
                                <h4>Recent News
                                <span>/ Stuff From Our Blog</span>
                                </h4>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="row">
                                            <div className="col-3">
                                                <section className="date">
                                                    <span className="day">28</span>
                                                    <span className="month">Dec</span>
                                                </section>
                                            </div>
                                            <div className="col-9">
                                                <h4> <a src="#" className="recent-title">The Boating Life Begins With a Good
                                                    Storm</a>
                                                </h4>
                                                <p className="recent-p"> Integer libero lectus, porta acean pulvinar ac,
                                                facilisis
                                                non
                                                arcu.
                                                Maecenas enim orci,adipiscing dictum sit amet gusce dapibus.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="row">
                                            <div className="col-3">

                                                <section className="date">
                                                    <span className="day">15</span>
                                                    <span className="month">Dec</span>
                                                </section>
                                            </div>
                                            <div className="col-9">
                                                <h4>
                                                    <a src="#" className="recent-title">Visiting Tuscany Without the Crowds</a>
                                                </h4>
                                                <p className="recent-p">Integer libero lectus, porta acean pulvinar ac,
                                                facilisis
                                                non
                                                arcu.
                                                Maecenasenim orci,adipiscing dictum sit amet gusce dapibus.</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <h4>Testimonials <span>/ What Our Clients Say</span></h4>
                            <p id="Testimonial">Cras sed odio est, sit amet porttitor elit. Vestibulum Proin sit amet mauris
                            et
                            odio pellentesque iaculis. Cum sociis natoque proin sit amet mauris odio pellentesque
                            iaculis.
                        </p>
                            <p id="author"><span>Kathy,</span> Art Director
                        </p>
                        </div>
                    </div>
                </div>


            </main>
        )
    }
}

export default Main;