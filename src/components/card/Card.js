import './Card.scss'

const Card = ({ image, title, price }) => {
	return (
		<li className='about__item card'>
			<a className='about__link card__link' href='#'>
				<img className='card__img' src={image} alt='img' />
				<h3 className='card__title'>{title}</h3>
				<p className='card__price'>{price}</p>
			</a>
		</li>
	)
}

export default Card
