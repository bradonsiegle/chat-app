import { styled } from '@mui/system';

const MainContainer = styled('div')({
	position: 'absolute',
	top: 0,
	right: 0,
	height: '3rem',
	borderBottom: '1px solid black',
	backgroundColor: '#36393f',
	width: 'calc(100% - 19rem)',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '0 1rem',
});

export const AppBar = () => {
	return <MainContainer></MainContainer>;
};
