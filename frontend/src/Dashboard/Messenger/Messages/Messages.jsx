import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/system';
import { MessagesHeader } from './MessagesHeader';
import { Message } from './Message';
import DUMMY_MESSAGES from './DUMMY_MESSAGES';

const Wrapper = styled('div')({
	flexGrow: 1,
	display: 'flex',
	height: '100%',
	flexDirection: 'column',
	alignItems: 'center',
});

export const Messages = () => {
	const { chosenChatDetails, messages } = useSelector((state) => state.chat);
	const name = chosenChatDetails?.name;
	return (
		<Wrapper>
			<MessagesHeader name={name} />
			{DUMMY_MESSAGES.map((message) => {
				return (
					<Message
						key={message._id}
						content={message.content}
						username={message.author.username}
						sameAuthor={message.sameAuthor}
						date={message.date}
						sameDay={message.sameDay}
					/>
				);
			})}
		</Wrapper>
	);
};
