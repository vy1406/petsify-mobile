import React from 'react';
import styled from 'styled-components';
import NavBar from '../Header/Header.component';

const Page = styled.div`
	display: flex;
	flex-direction: column;
	background-color: salmon;
`;

const MenuButton = styled.div`
	height: 40px;
	width: 150px;
	border: 1px solid black;
	background-color: pink;
	cursor: pointer;
`;

const Home: React.FunctionComponent = () => {
	const handleGetUserData = () => {
		console.log('handleGetUserData');
	};

	const handleGetAllPets = () => {
		console.log('handleGetAllPets');
	};

	const handleGetUsers = () => {
		console.log('handleGetUsers');
	};

	return (
		<Page>
			<NavBar />
			Home component
			<MenuButton onClick={handleGetAllPets}>Get all pets</MenuButton>
			<MenuButton onClick={handleGetUsers}>Get all users</MenuButton>
			<MenuButton onClick={handleGetUserData}>Get user data</MenuButton>
		</Page>
	);
};

export default Home;
