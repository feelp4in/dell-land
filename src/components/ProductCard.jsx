import React from 'react'
import './ProductCard.scss'

function ProductCard ({ name, tag, glyph, specs, price, oldPrice, url }){
  return (
    <div className='product'>
        <div className="product__thumb">
            <div className="product__tag">
                {tag}
            </div>
            <div className="product__glyph">
                {glyph}
            </div>
        </div>
        <div className="product__body">
            <h3>{name}</h3>
            <div className="product__specs">
                {specs.map((s, i) => <div key={i}>{s}</div>)}
            </div>
            <div className="product__foot">
                <span className="product__price">
                    <span className="product__old">${oldPrice}</span> {price}
                </span>
                <a href={url} className="btn btn-ghost btn-sm" target='_blank'>
                    Смотреть
                </a>
            </div>
        </div>
        
    </div>
  )
}

export default ProductCard