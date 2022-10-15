import { styled } from '@mui/system';
import { MainPageButton } from './MainPageButton';

const MainContainer = styled('div')({
	width: '4rem',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	backgroundColor: '#202225',
});

export const SideBar = () => {
	return (
		<MainContainer>
			<MainPageButton />
		</MainContainer>
	);
};
