import './ProductList.scss'
import img from '../../assets/img/coffee-img.jpg'
import { Link } from 'react-router-dom'

const ProductList = ({data}) => {
  console.log('render');
	return (
		<ul className='products__items'>
			{data.map(({ title, price, country, id }, i) => (
				<li key={i} className='products__item'>
					<Link className='products__link card' to={`product/${id}`}>
						<img className='card__img' src={img} alt='img' />
						<h3 className='card__title'>{title}</h3>
						<p className='card__country'>{country}</p>
						<p className='card__price'>{price}</p>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default ProductList