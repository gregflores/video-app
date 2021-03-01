import { useState, useCallback } from 'react';
import Lobby from './Lobby';
import Room from './Room';

const VideoChat = () => {
	const [userName, setUserName] = useState('');
	const [roomName, setRoomName] = useState('');
	const [token, setToken] = useState(null);

	const handleUserNameChange = useCallback((e) => {
		setUserName(e.target.value);
	}, []);

	const handleRoomNameChange = useCallback((e) => {
		setRoomName(e.target.value);
	}, []);

	const handleSubmit = useCallback(
		async (e) => {
			e.preventDefault();
			const data = await fetch('video/token', {
				method: 'POST',
				body: JSON.stringify({
					identity: userName,
					room: roomName,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const res = await data.json();
			setToken(res.token);
		},
		[userName, roomName]
	);

	const handleLogout = useCallback((e) => {
		setToken(null);
	}, []);

	let render;
	if (token) {
		render = (
			<Room
				roomName={roomName}
				token={token}
				handleLogout={handleLogout}
			/>
		);
	} else {
		render = (
			<Lobby
				userName={userName}
				roomName={roomName}
				handleUserNameChange={handleUserNameChange}
				handleRoomNameChange={handleRoomNameChange}
				handleSubmit={handleSubmit}
			/>
		);
	}
	return render;
};

export default VideoChat;
