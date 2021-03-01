import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
	const [name, setName] = useState('');
	const [greeting, setGreeting] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(e);
		// setGreeting(`Punk ass bitch ${name}`);
		const res = await fetch(`/api/greeting?name=${name}`);
		const data = await res.json();
		console.log(data);
		setGreeting(data.greeting);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<form onSubmit={handleSubmit}>
					<label htmlFor='name'> Enter your name: </label>
					<input
						id='name'
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button type='submit'>Submit</button>
				</form>
				<p>Test {greeting}</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
};

export default App;
