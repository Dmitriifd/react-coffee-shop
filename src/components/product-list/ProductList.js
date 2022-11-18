import './ProductList.scss'
import img from '../../assets/img/coffee-img.jpg'
import { useContext } from 'react'
import { DataContext } from 'context'

const ProductList = () => {
	const data = useContext(DataContext)

	return (
		<ul className='products__items'>
			{data.map((item, i) => (
				<ProductItem key={i} {...item} />
			))}
		</ul>
	)
}

const ProductItem = ({ title, price, country }) => {
	return (
		<li className='products__item'>
			<a className='products__link card' href='#'>
				<img className='card__img' src={img} alt='img' />
				<h3 className='card__title'>{title}</h3>
				<p className='card__country'>{country}</p>
				<p className='card__price'>{price}</p>
			</a>
		</li>
	)
}

export default ProductList
