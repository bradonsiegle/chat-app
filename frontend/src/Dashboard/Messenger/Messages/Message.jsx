import { styled } from '@mui/system';
import { Avatar } from '../../../shared/components/Avatar';
import Typography from '@mui/material/Typography';

const MainContainer = styled('div')({
	display: 'flex',
	width: '97%',
	marginTop: '1.4rem',
});

const AvatarContainer = styled('div')({
	width: '4.2rem',
});

const MessageContainer = styled('div')({
	display: 'flex',
	flexDirection: 'column',
});

const MessageContent = styled('div')({
	color: '#dcddde',
	fontSize: '1rem',
});

const SameAuthorMessageContent = styled('div')({
	color: '#dcddde',
	width: '97%',
});

const SameAuthorMessageText = styled('div')({
	marginLeft: '4.2rem',
	marginTop: '0.4rem',
	fontSize: '1rem',
});

export const Message = ({ content, sameAuthor, username, date, sameDay }) => {
	if (sameAuthor && sameDay) {
		return (
			<SameAuthorMessageContent>
				<SameAuthorMessageText> {content} </SameAuthorMessageText>
			</SameAuthorMessageContent>
		);
	}

	return (
		<MainContainer>
			<AvatarContainer>
				<Avatar username={username} />
			</AvatarContainer>
			<MessageContainer>
				<Typography
					color='white'
					sx={{
						fontSize: '1.1rem',
					}}
				>
					{username}{' '}
					<span style={{ fontSize: '0.8rem', color: '#72767d' }}>{date}</span>
				</Typography>
				<MessageContent>{content}</MessageContent>
			</MessageContainer>
		</MainContainer>
	);
};
