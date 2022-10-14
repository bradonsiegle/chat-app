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
	height: '2.8rem',
	border: '1px solid #202225',
	borderRadius: '0.2rem',
	color: '#dcddde',
	background: '#202225',
	margin: 0,
	fontSize: '1rem',
	padding: '0 0.5rem',
	':focus': {
		outline: 'none',
		border: '1px solid #7289da',
	},
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
