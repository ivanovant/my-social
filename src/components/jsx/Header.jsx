import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-logo">
                        <img src="./../images/logo-bw.svg" alt="My Social" className="header-logo__icon"/>
                    </div>
                    {/* /.header-logo */}
                    <form action="#" className="header-search">
                        <input type="text" className="input header-search__input"/>
                        <button className="button search-button">Найти</button>
                    </form>
                    <div className="header-user">
                        <a href="#" className="user-link">
                            <img src="./../images/user.jpeg" alt="avatar" className="user-avatar"/>
                            <span className="user-name">Антон Иванов</span>
                        </a>
                    </div>
                    {/* /.header-user */}
                    <div className="header-notifications">
                        <button className="button notifications-button">Уведомления</button>
                        <div className="notification-message"></div>
                    </div>
                    {/* /.header-notifications */}
                </div>
                {/* /.header */}
            </div>
            {/* /.container */}
        </header>
    )
}

export default Header;