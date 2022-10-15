import { styled } from '@mui/system';
const AvatarPreview = styled('div')({
	height: '3rem',
	width: '3rem',
	backgroundColor: '#5865F2',
	borderRadius: '2.8rem ',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: 'white',
	fontSize: '1.5rem',
	fontWeight: 'bold',
	marginLeft: '0.2rem',
});

export const Avatar = ({ username, large }) => {
	return (
		<AvatarPreview
			style={{
				height: large ? '5rem' : '3rem',
				width: large ? '5rem' : '3rem',
			}}
		>
			{username.substring(0, 2).toUpperCase()}
		</AvatarPreview>
	);
};
