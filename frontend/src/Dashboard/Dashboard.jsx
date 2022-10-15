import { styled } from '@mui/system';
import { AppBar, FriendsSideBar, Messenger, SideBar } from './';

const Wrapper = styled('div')({
	width: '100%',
	height: '100vh',
	display: 'flex',
});

export const Dashboard = () => {
	return (
		<Wrapper>
			<SideBar />
			<FriendsSideBar />
			<Messenger />
			<AppBar />
		</Wrapper>
	);
};
