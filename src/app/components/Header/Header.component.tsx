import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAppState } from '../../redux/schemas/index';
import { setSelectedNavBarID, getUser } from '../../redux/actions/ui.actions';

const Page = styled.div`
	display: flex;
	background-color: salmon;
`;

const NavButton = styled.div<{ isSelected?: boolean }>`
	height: 40px;
	width: 150px;
	border: 1px solid black;
	background-color: ${({ isSelected }) => (isSelected ? 'red' : 'blue')};
	cursor: pointer;
`;

interface INavBarProps {
	selectedNavBardID: number;
	selectNavBar: (navBarId: number) => void;
	getUserLocal: (userId: number) => void;
}

const NavBar: React.FunctionComponent<INavBarProps> = ({
	selectedNavBardID,
	selectNavBar,
	getUserLocal
}: INavBarProps) => {
	return (
		<Page>
			<NavButton isSelected={1 === selectedNavBardID} onClick={() => selectNavBar(1)}>
				Page 1
			</NavButton>
			<NavButton isSelected={2 === selectedNavBardID} onClick={() => selectNavBar(2)}>
				Page 2
			</NavButton>
			<NavButton isSelected={3 === selectedNavBardID} onClick={() => getUserLocal(3)}>
				Page 3
			</NavButton>
		</Page>
	);
};

const mapStateToProps = (state: IAppState) => ({
	selectedNavBardID: state.ui.selectedNavId
});

const mapDispatchToProps = (dispatch: any) => {
	return {
		selectNavBar: (navId: number) => setSelectedNavBarID(dispatch, navId),
		getUserLocal: (userID: number) => dispatch(getUser(userID))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
