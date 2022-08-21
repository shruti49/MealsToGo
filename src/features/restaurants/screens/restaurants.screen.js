import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, FlatList } from "react-native";

import Spacer from "../components/spacer/spacer.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
	paddingLeft: 16,
	paddingRight: 16,
})``;

const renderItem = () => (
  <>
    <Spacer position="bottom" size="large" />
    <RestaurantInfoCard />
  </>
);

const RestuarntScreen = () => {
	return (
		<SafeArea>
			<SearchContainer>
				<Searchbar />
			</SearchContainer>
			<RestaurantList
				data={[{ name: 1 }, { name: 2 }]}
				renderItem={renderItem}
        keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	);
};

export default RestuarntScreen;
