import './App.css';
import { useState } from 'react';
import VideoChat from './VideoChat';

const App = () => {
	return (
		<div className='App'>
			<header>
				<h1>Video Chat with hooks</h1>
			</header>
			<main>
				<VideoChat />
			</main>
			<footer>
				<p>
					Made with{' '}
					<span role='img' aria-label='React'>
						⚛
					</span>{' '}
					by <a href='www'>Greg Flores</a>
				</p>
			</footer>
		</div>
	);
};

export default App;
