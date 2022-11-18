import './ProductList.scss'
import img from '../../assets/img/coffee-img.jpg'
import { useContext } from 'react'
import { DataContext } from 'context'
import { Link } from 'react-router-dom'

const ProductList = () => {
	const data = useContext(DataContext)

	return (
		<ul className='products__items'>
			{data.map((item) => (
				<ProductItem key={item.id} {...item} />
			))}
		</ul>
	)
}

const ProductItem = ({ title, price, country, id }) => {
	return (
		<li className='products__item'>
			<Link className='products__link card' to={`product/${id}`}>
				<img className='card__img' src={img} alt='img' />
				<h3 className='card__title'>{title}</h3>
				<p className='card__country'>{country}</p>
				<p className='card__price'>{price}</p>
			</Link>
		</li>
	)
}

export default ProductList
