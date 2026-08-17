import React from "react";
import "./WhySection.scss";

const WhySection = () => {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <div className="secrion-head">
          <div className="eyebrow">Почему Dell</div>
          <h2>Инженерный подход к каждой детали</h2>
          <p>
            От материалов корпуса до системы охлаждения — каждая модель проходит
            собственные лабораторные испытания Dell на надёжность.
          </p>
        </div>
        <div className="value-grid">
          <div className="value-card">
            <div className="num">01</div>
            <h3>Проверенная надёжность</h3>
            <p>
              Многоступенчатое тестирование на удары, температуру и влажность
              перед выходом каждой модели на рынок.
            </p>
          </div>
          <div className="value-card">
            <div className="num">02</div>
            <h3>Гарантия и сервис</h3>
            <p>
              Официальная гарантия от 1 до 3 лет и поддержка Dell Premium
              Support с выездом специалиста.
            </p>
          </div>
          <div className="value-card">
            <div className="num">03</div>
            <h3>Гибкая конфигурация</h3>
            <p>
              Подбор процессора, памяти и накопителя под задачи — от офисных до
              профессиональных.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
