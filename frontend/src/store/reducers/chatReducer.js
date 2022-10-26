import { chatActions } from '../actions/chatActions';

const initialState = {
	chosenChatDetails: null,
	chatType: null,
	messages: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case chatActions.SET_CHOSEN_CHAT_DETAILS:
			return {
				...state,
				chosenChatDetails: action.payload,
				chatType: action.chatType,
				messages: [],
			};
		case chatActions.SET_MESSAGES:
			return {
				...state,
				messages: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
