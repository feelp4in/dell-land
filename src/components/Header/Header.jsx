import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
        <div className="header__topbar">
            <div className="wrap">
                <span><span className="dot">●</span>Официальный партнёр Dell Technologies</span>
                <span>Бесплатная доставка и настройка при заказе на сайте</span>
            </div>
        </div>
        <div className="header__main">
            <div className="wrap">
                <div className="logo">
                    <img src="" alt="" /> Dell
                </div>
                <nav className="nav-links">
                    <a href="#lineup">Модели</a>
                    <a href="#why">Преимущества</a>
                    <a href="#trust">Отзывы</a>
                </nav>
                <a href="https://www.dell.com" target="_blank" className="btn btn-primary btn-sm">
                    Перейти на Dell.com
                </a>
            </div>
        </div>
    </header>
  )
}

export default Header