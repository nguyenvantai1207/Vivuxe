import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
    return (
        <>
            <header className="header">
                <div className="header__logo">
                    <div className='header__logo-img'>
                        <img src="/images/logo.png" alt="ViVuXe" className="header__logo-img" />
                    </div>
                    <p className='header__logo__text'>ViVuXe</p>
                </div>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item"><a href="#" className="header__nav-link">Về ViVuXe</a></li>
                        <li className="header__nav-item"><a href="#" className="header__nav-link">Trở thành chủ xe</a></li>
                    </ul>
                    <ul className="header__nav-list auth">
                        <li className="header__nav-item"><a href="#" className="header__nav-link">Đăng ký</a></li>
                        <li className="header__nav-item login"><a href="#" className="header__nav-link header__nav-link--highlight">Đăng nhập</a></li>
                    </ul>
                </nav>
            </header>
            <hr className="header__nav-hr" />
        </>
    );
};

export default Header;