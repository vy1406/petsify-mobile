import React, { ChangeEvent, useEffect, useRef, useState, SyntheticEvent } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { Colors } from '../enums';

interface IInputContainerProps {
	width?: string;
	height?: string;
}

const InputContainer = styled.div<IInputContainerProps>`
	display: flex;
	align-items: center;
	box-sizing: border-box;
	transition: border-color 0.3s;

	&:focus-within {
		border-color: ${Colors.blue};
	}
`;

interface IStyledTextInputProps {
	width?: string;
	disabled?: boolean;
}

const StyledTextInput = styled.input<IStyledTextInputProps>`
	display: block;
	height: fit-content;
	width: 100%;
	box-sizing: border-box;
	background-color: ${Colors.white};
	outline: none;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

interface ITextInputProps {
	id?: string;
	placeholder?: string;
	value?: string | number;
	width?: string;
	height?: string;
	disabled?: boolean;
	onChange?(value: string): void;
}

const convertValueToString = (value: string | number) =>
	!value || value === 'null' || value === 'undefined' ? '' : `${value}`;

export const TextInput: React.FunctionComponent<ITextInputProps> = ({
	id = '',
	placeholder,
	value = '',
	width,
	height,
	disabled,
	onChange
}: ITextInputProps) => {
	const [innerValue, setInnerValue] = useState(convertValueToString(value));

	useEffect(() => {
		if (value !== innerValue) {
			setInnerValue(convertValueToString(value));
		}
	}, [value]);

	useEffect(() => {
		if (innerValue !== value) {
			onChange && onChange(innerValue);
		}
	}, [innerValue]);

	return (
		<InputContainer width={width} height={height}>
			<StyledTextInput
				autoComplete="off"
				id={id}
				placeholder={placeholder}
				value={innerValue}
				title={innerValue}
				width={width}
				disabled={disabled}
				onChange={(event: ChangeEvent<HTMLInputElement>) => {
					const value = event.target.value;
					setInnerValue(value);
				}}
			/>
		</InputContainer>
	);
};
