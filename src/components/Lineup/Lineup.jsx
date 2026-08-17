import { useState, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './Lineup.scss'

function Lineup() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/products.json`)
      .then(res => {
        if (!res.ok) throw new Error('Не удалось загрузить данные')
        return res.json()
      })
      .then(data => setProducts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Загрузка моделей...</p>
  if (error) return <p>Ошибка: {error}</p>

  return (
    <section className="section bg-ice" id="lineup">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Линейка</div>
          <h2>Модель под ваши задачи</h2>
          <p>Три направления — офис и учёба, творчество и мультимедиа, игры и высокие нагрузки.</p>
        </div>

        {loading && <p>Загрузка моделей...</p>}
        {error && <p>Ошибка: {error}</p>}

        {!loading && !error && (
          <div className="lineup">
            {products.map(p => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Lineup
