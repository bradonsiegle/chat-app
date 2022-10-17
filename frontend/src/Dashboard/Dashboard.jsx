import { styled } from '@mui/system';
import { AppBar, FriendsSideBar, Messenger, SideBar } from './';
import { connectWithSocketServer } from '../realtimeCommunication/socketConnection';

const Wrapper = styled('div')({
	width: '100%',
	height: '100vh',
	display: 'flex',
});

export const Dashboard = () => {
	connectWithSocketServer();

	return (
		<Wrapper>
			<SideBar />
			<FriendsSideBar />
			<Messenger />
			<AppBar />
		</Wrapper>
	);
};
