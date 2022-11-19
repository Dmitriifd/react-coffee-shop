const Filter = ({ onFilterSelect, searchValue, onChangeSearchValue }) => {
	const buttonsData = [{ name: 'all' }, { name: 'Brazil' }, { name: 'Kenya' }, { name: 'Columbia' }]

	return (
		<div className='products__filter filter'>
			<label className='filter__label'>
				Lookiing for
				<input
					value={searchValue}
					onChange={onChangeSearchValue}
					className='filter__input'
					type='text'
					placeholder='start typing here...'
				/>
			</label>
			<div className='filter__btns'>
				<p className='filter__btns-label'>Or filter</p>
				{buttonsData.map(({ name }, i) => (
					<button onClick={() => onFilterSelect(name)} key={i} className='filter__btn'>
						{name}
					</button>
				))}
			</div>
		</div>
	)
}

export default Filter
