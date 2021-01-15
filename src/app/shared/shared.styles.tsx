import styled from 'styled-components';
import { Colors, FontSizes, FontFamilies } from './enums';

interface IStyledTextProps {
	color?: Colors;
	size?: FontSizes;
	fontFamily?: FontFamilies;
}

export const Text = styled.span<IStyledTextProps>`
	font-family: ${({ fontFamily }) => fontFamily};
	font-size: ${({ size }) => size};
	color: ${({ color }) => color};
`;

export const ActionButton = styled.div`
	height: 32px;
	width: 120px;
	background-color: salmon;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	color: black;
	cursor: pointer;
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
