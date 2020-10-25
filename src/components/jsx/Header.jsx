import React from 'react';
import logo from './../images/logo-bw.svg'
import avatar from './../images/user.jpeg'


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <a href="#"  className="logo">
                    <img src={logo} alt={"logo"}/>
                </a>
                {/* /.logo */}
                <form action="#" className="search">
                    <input type="text" className="input"/>
                    <button className="button">Найти</button>
                </form>
                <div className="notifications">
                    <button className="button">Уведомления</button>
                    <div className="message"></div>
                </div>
                {/* /.notifications */}
                <div className="user">
                    <a href="#" className="link">
                        <img src={avatar} alt="avatar"/>
                        <span className="name">Антон Иванов</span>
                    </a>
                </div>
                {/* /.user */}
            </div>
            {/* /.container */}
        </header>
    )
}

export default Header;