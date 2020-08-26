import React from 'react';

import {
	List,
	CategoryContainer,
	CategoryImage,
	CategoryName,
	CategoryStatus,
	RedCircle,
	Info,
} from './styles';

import data from './data';

const CategoryList = () => {
	const CategoryItem = ({ item }) => (
		<CategoryContainer>
			<CategoryImage source={item.source} />
			<CategoryName numberOfLines={1}>{item.name}</CategoryName>
			<CategoryStatus>
				<RedCircle />
				<Info>51,9 mil</Info>
			</CategoryStatus>
		</CategoryContainer>
	);

	return (
		<List>
			{data.map((item) => (
				<CategoryItem key={item.name} item={item} />
			))}
		</List>
	);
};

export default CategoryList;
