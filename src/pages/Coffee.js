
import photo from '../assets/img/photo.jpg'

import About from 'components/about/About'
import PageHeader from 'components/page-header/PageHeader'
import ProductList from 'components/product-list/ProductList'

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
					<ProductList />
				</div>
			</section>
		</>
	)
}
export default Coffee
