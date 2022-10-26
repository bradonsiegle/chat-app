import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar } from '../../../shared/components';
import { OnlineIndicator } from '../index';
import { useDispatch } from 'react-redux';
import { chatTypes } from '../../../store/actions/chatActions';
import { setChosenChatDetails } from '../../../store/actions/chatActions';

export const FriendsListItem = ({ id, username, isOnline }) => {
	const dispatch = useDispatch();

	const handleChooseActiveConversation = () => {
		dispatch(setChosenChatDetails({ id, name: username }, chatTypes.DIRECT));
	};

	return (
		<Button
			onClick={handleChooseActiveConversation}
			style={{
				width: '100%',
				height: '3rem',
				marginTop: '0.5rem',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-start',
				textTransform: 'none',
				color: 'black',
				position: 'relative',
			}}
		>
			<Avatar username={username} />
			<Typography
				style={{ marginLeft: '0.5rem', fontWeight: 700, color: '#8e9297' }}
				variant='subtitle1'
				align='left'
			>
				{username}
			</Typography>
			{isOnline && <OnlineIndicator />}
		</Button>
	);
};
