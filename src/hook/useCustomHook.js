import { useState } from "react";

export const useCustomHook = (data) => {
  const [filter, setFilter] = useState('all');

	const filterPost = (data, filter) => {
		const filtered = {
			[filter]: data.filter(({ country }) => country === filter),
			all: data,
		};

		const resultFilter = filtered[filter];

		return resultFilter;
	};

  const filterData = filterPost(data, filter);

	const onFilterSelect = (filter) => {
		setFilter(() => filter);
	};

	const [searchValue, setSearchValue] = useState('');

	const onChangeSearchValue = (e) => {
		setSearchValue(e.target.value);
	};

	return { onFilterSelect, onChangeSearchValue, searchValue, filterData };
};
