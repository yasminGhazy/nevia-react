import React, { Component } from 'react';
import logo from './../../images/logo.PNG';
import "./header.scss"
class Header extends Component {
    render() {
        return (
            <header>
            <div className="row">
                <div className="col-7 col-md-8">
                    <div className="container pt-5">
                        <img src={logo} alt="logo" className="logo" />
                        <p id="logo-text">Template Without Compromises!
                    </p>
                    </div>
                </div>
                <div className="col-5 col-md-4">
                    <div id="icons">
                        <div id="social-media">
                            <i className="fa fa-fw fa-twitter"></i>
                            <i className="fa fa-fw fa-facebook"></i>
                            <i className="fa fa-fw fa-instagram"></i>
                            <i className="fa fa-fw fa-linkedin"></i>

                        </div>
                    </div>
                    <div>
                        <p id="contact">Contact Phone: +48 880 440 110
                    </p>
                    </div>
                    <div>

                        <form className="form-inline" action="/action_page.php">
                            <input type="text" placeholder="Search" />
                            <button type="submit" title="Search">
                                <i className="fa fa-fw fa-search color"></i>
                            </button>

                        </form>
                    </div>
                </div>
                <div id="nav-selector" className="form-group">
                    <select className="form-control" id="select">
                        <option>Menu</option>
                        <option>Home</option>
                        <option>Features</option>
                        <option>Shortcodes</option>
                        <option>portfolio</option>
                        <option>Shop</option>
                        <option>Blog</option>
                    </select>
                </div>
            </div>
            </header>
        )
    }
}

export default Header;