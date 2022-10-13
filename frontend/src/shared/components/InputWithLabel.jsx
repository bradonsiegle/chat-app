import { styled } from '@mui/system';

const Wrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	width: '100%',
});

const Label = styled('p')({
	color: '#b9bbbe',
	textTransform: 'uppercase',
	fontWeight: 600,
	fontSize: '0.8rem',
});

const Input = styled('input')({
	flexGrow: 1,
	height: '3rem',
	border: '1px solid black',
	color: '#dcddde',
	background: '#35393f',
	margin: 0,
	fontSize: '1rem',
	padding: '0 0.5rem',
});

export const InputWithLabel = (props) => {
	const { value, setValue, label, input, type, placeholder } = props;

	const handleValueChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<Wrapper>
			<Label>{label}</Label>
			<Input
				value={value}
				onChange={handleValueChange}
				type={type}
				placeholder={placeholder}
				{...input}
			/>
		</Wrapper>
	);
};
