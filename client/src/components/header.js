import React, { Component } from 'react';
import logo from '.././logo.svg';
const Header = () => {
    return (
        <header className="App-header"><img src={logo} className="App-logo" alt="logo" />
            <div className="container">
                <div><h1 className="App-title">Eashika's Assignment for Solstice</h1></div>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">

                        <div class=" navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/">Customers <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/accounts">Accounts</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
export default Header;