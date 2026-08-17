import { useState, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './Lineup.scss'

function Lineup() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/data/products.json')
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
    <section className="lineup wrap">
      {products.map(p => (
        <ProductCard key={p.id} {...p} />
      ))}
    </section>
  )
}

export default Lineup