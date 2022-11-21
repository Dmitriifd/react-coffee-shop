import photo from '../assets/img/photo.jpg'
import About from 'components/about/About'
import PageHeader from 'components/page-header/PageHeader'
import ProductList from 'components/product-list/ProductList'
import Filter from 'components/filter/Filter'
import { useCustomHook } from 'hook/useCustomHook'

const Coffee = ({ data }) => {
  const { onFilterSelect, onChangeSearchValue, searchValue, filterData } = useCustomHook(data);

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
