import React from "react";
import "./HeroPage.scss";

const HeroPage = () => {
  return (
    <section className="hero">
      <div className="wrap hero__top">
        <div>
          <div className="eyebrow">Ноутбуки Dell · Осенняя линейка</div>
          <h1>
            Техника, которая работает <h1 style={{ color: "#4CC2FF" }}>на вас.</h1>
          </h1>
          <div className="lede">
            XPS, Inspiron и Alienware — от лёгких ультрабуков для офиса до
            мощных станций для игр и работы с графикой. Оригинальная гарантия
            Dell по всему миру.
          </div>
          <div className="cta-row">
            <a href="#" className="btn btn-primary">
              Смотреть модели на Dell.com
            </a>
            <a href="#" className="btn-btn-outline-light">
              Подобрать конфигурацию
            </a>
          </div>
        </div>

        <div className="specsheet">
          <div className="specsheet__top">
            <span>Dell XPS 13 Plus</span>
            <span>В наличии</span>
          </div>
          <div className="specsheet__row">
            <span className="k">Процессор</span>
            <span className="v">Intel Core Ultra 7</span>
          </div>
          <div className="specsheet__row">
            <span className="k">Память</span>
            <span className="v">16 ГБ LPDDR5</span>
          </div>
          <div className="specsheet__row">
            <span className="k">Экран</span>
            <span className="v">13.4" OLED 3.5K</span>
          </div>
          <div className="specsheet__row">
            <span className="k">Вес</span>
            <span className="v">1.26 кг</span>
          </div>
          <div className="specsheet__row">
            <span className="k">Автономность</span>
            <span className="v">до 12 часов</span>
          </div>
          <div className="specsheet__price">
            <span>
              <span className="old">$1 599</span>
              <span className="amt">$1 299</span>
            </span>

            <a
              className="btn btn-primary btn-sm"
              href="https://www.dell.com"
              target="_blank"
            >
              Открыть на Dell.com
            </a>
          </div>
        </div>
      </div>
      <div className="hero__strip">
        <div className="wrap">
          <span>
            <strong>30 дней</strong> на возврат
          </span>
          <span>
            <strong>1–3 года</strong> гарантии производителя
          </span>
          <span>
            <strong>24/7</strong> техническая поддержка
          </span>
          <span>
            <strong>Рассрочка</strong> при оформлении на сайте
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
