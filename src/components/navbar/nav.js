import React, { Component } from 'react';
import "./nav.scss"
class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
           
            <ul className="navbar-nav">
                <li className="">

                    <a className="nav-icon-text active-nav" href="#">
                        <i className="fa fa-fw fa-home"></i>Home</a>
                </li>
                <li className="dropdown">
                    <a className="nav-icon-text" href="#" data-toggle="dropdown">
                        <i className="fa fa-fw fa-adjust"></i>Features</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link 1</a>
                        <a className="dropdown-item" href="#">Link 2</a>
                        <a className="dropdown-item" href="#">Link 3</a>

                    </div>
                </li>
                <li className="dropdown">
                    <a className="nav-icon-text" href="#" data-toggle="dropdown">
                        <i className="fa fa-fw fa-sun-o"></i>
                        shortcodes</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link 1</a>
                        <a className="dropdown-item" href="#">Link 2</a>
                        <a className="dropdown-item" href="#">Link 3</a>
                        <a className="dropdown-item" href="#">Link 4</a>

                    </div>
                </li>
                <li className="dropdown">
                    <a className="nav-icon-text" href="#" data-toggle="dropdown">
                        <i className="fa fa-fw fa-shopping-bag"></i>
                        protfolio</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link 1</a>
                        <a className="dropdown-item" href="#">Link 2</a>
                        <a className="dropdown-item" href="#">Link 3</a>
                        <a className="dropdown-item" href="#">Link 4</a>

                    </div>
                </li>
                <li className="dropdown">
                    <a className="nav-icon-text" href="#" data-toggle="dropdown">
                        <i className="fa fa-fw fa-shopping-cart"></i>
                        shop</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link 1</a>
                        <a className="dropdown-item" href="#">Link 2</a>

                    </div>

                </li>
                <li className="dropdown">
                    <a className="nav-icon-text" href="#" data-toggle="dropdown">
                        <i className="fa fa-fw fa-pencil"></i>
                        blog</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link 1</a>
                        <a className="dropdown-item" href="#">Link 2</a>

                    </div>
                </li>
                <li>
                    <a className="nav-icon-text" href="#">
                        <i className="fa fa-fw fa-envelope-o"></i>
                        contact</a>
                </li>
            </ul>
       
        </nav>
        )
    }
}

export default Nav;