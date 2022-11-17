
import photo from '../assets/img/photo.jpg'
import img from '../assets/img/coffee-img.jpg'
import About from 'components/about/About'
import PageHeader from 'components/page-header/PageHeader'

const Coffee = () => {
	return (
		<>
			<PageHeader title='Our Coffee' />
			<About photo={photo} title='About our beans' />
			<section className='products'>
				<div className='products__container container'>
					<div className='products__filter filter'>
						<label className='filter__label'>
							Lookiing for
							<input className='filter__input' type='text' placeholder='start typing here...' />
						</label>
						<div className='filter__btns'>
							<p className='filter__btns-label'>Or filter</p>
							<button className='filter__btn'>Brazil</button>
							<button className='filter__btn'>Kenya</button>
							<button className='filter__btn'>Columbia</button>
						</div>
					</div>
					<ul className='products__items'>
						<li className='products__item'>
							<a className='products__link card' href='#'>
								<img className='card__img' src={img} alt='img' />
								<h3 className='card__title'>AROMISTICO Coffee 1 kg</h3>
								<p className='card__country'>Brazil</p>
								<p className='card__price'>6.99$</p>
							</a>
						</li>
						<li className='products__item'>
							<a className='products__link card' href='#'>
								<img className='card__img' src={img} alt='img' />
								<h3 className='card__title'>AROMISTICO Coffee 1 kg</h3>
								<p className='card__country'>Brazil</p>
								<p className='card__price'>6.99$</p>
							</a>
						</li>
						<li className='products__item'>
							<a className='products__link card' href='#'>
								<img className='card__img' src={img} alt='img' />
								<h3 className='card__title'>AROMISTICO Coffee 1 kg</h3>
								<p className='card__country'>Brazil</p>
								<p className='card__price'>6.99$</p>
							</a>
						</li>
						<li className='products__item'>
							<a className='products__link card' href='#'>
								<img className='card__img' src={img} alt='img' />
								<h3 className='card__title'>AROMISTICO Coffee 1 kg</h3>
								<p className='card__country'>Brazil</p>
								<p className='card__price'>6.99$</p>
							</a>
						</li>
						<li className='products__item'>
							<a className='products__link card' href='#'>
								<img className='card__img' src={img} alt='img' />
								<h3 className='card__title'>AROMISTICO Coffee 1 kg</h3>
								<p className='card__country'>Brazil</p>
								<p className='card__price'>6.99$</p>
							</a>
						</li>
						<li className='products__item'>
							<a className='products__link card' href='#'>
								<img className='card__img' src={img} alt='img' />
								<h3 className='card__title'>AROMISTICO Coffee 1 kg</h3>
								<p className='card__country'>Brazil</p>
								<p className='card__price'>6.99$</p>
							</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	)
}
export default Coffee
