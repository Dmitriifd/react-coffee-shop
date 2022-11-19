import photo from '../assets/img/photo.jpg'
import About from 'components/about/About'
import PageHeader from 'components/page-header/PageHeader'
import ProductList from 'components/product-list/ProductList'
import Filter from 'components/filter/Filter'
import { useState } from 'react'

const Coffee = ({ data }) => {
	const [filter, setFilter] = useState('all')

	const filterPost = (data, filter) => {
		const filtered = {
			[filter]: data.filter(({ country }) => country === filter),
			all: data,
		}

		const resultFilter = filtered[filter]

		return resultFilter
	}

	const onFilterSelect = (filter) => {
		setFilter(() => filter)
	}

	const filterData = filterPost(data, filter)

	const [searchValue, setSearchValue] = useState('')

	const onChangeSearchValue = (e) => {
		setSearchValue(e.target.value)
	}

	return (
		<>
			<PageHeader title="Our Coffee" />
			<About photo={photo} title="About our beans" />
			<section className="products">
				<div className="products__container container">
					<Filter
						serachData={data}
						onFilterSelect={onFilterSelect}
						searchValue={searchValue}
						onChangeSearchValue={onChangeSearchValue}
					/>
					<ProductList data={filterData} searchValue={searchValue} />
				</div>
			</section>
		</>
	)
}
export default Coffee
