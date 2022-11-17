import Decor from 'components/UI/decor/Decro'
import photo from '../assets/img/photo.jpg'
import img from '../assets/img/coffee-img.jpg'

const Coffee = () => {
	return (
		<>
			<section className='coffee-header'>
				<div className='coffee-header__container container'>
					<h1 className='coffee-header__title'>Our Coffee</h1>
				</div>
			</section>
			<section className='coffee'>
				<div className='coffee__container container'>
					<div className='coffee__img'>
						<img src={photo} alt='photo' />
					</div>
					<div className='coffee__info'>
						<h2 className='coffee__title'>About our beans</h2>
						<div className='coffee__title-decor decor'>
						  <Decor fill={'#000'} />
            </div>
						<div className='coffee__text'>
							Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly
							months do things on at. Situation recommend objection do intention so questions. As greatly removed
							calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect
							answered followed. At it went is song that held help face.
						</div>
					</div>
				</div>
			</section>
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
