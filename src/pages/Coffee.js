import photo from '../assets/img/photo.jpg'
import About from 'components/about/About'
import PageHeader from 'components/page-header/PageHeader'
import ProductList from 'components/product-list/ProductList'
import Filter from 'components/filter/Filter'
import { useContext, useState } from 'react'
import { DataContext } from 'context'

const Coffee = () => {
	const data = useContext(DataContext)

  const [filter, setFilter] = useState('')

	const filterPost = (data, filter) => {
		switch (filter) {
			case 'Brazil':
				return data.filter(({country}) => country === filter)
			case 'Kenya':
				return data.filter(({country}) => country === filter)
			case 'Columbia':
				return data.filter(({country}) => country === filter)
			default:
				return data
		}
	}

	const onFilterSelect = (filter) => {
		setFilter(() => filter)
	}

  const filterData = filterPost(data, filter)
  
	return (
		<>
			<PageHeader title='Our Coffee' />
			<About photo={photo} title='About our beans' />
			<section className='products'>
				<div className='products__container container'>
					<Filter onFilterSelect={onFilterSelect} />
					<ProductList data={filterData} />
				</div>
			</section>
		</>
	)
}
export default Coffee
