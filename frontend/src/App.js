import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import './App.css';
import { RegisterPage, LoginPage } from './authPages';
import { Dashboard } from './Dashboard';
import { AlertNotification } from './shared/components';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path='/login' element={<LoginPage />} />
					<Route exact path='/register' element={<RegisterPage />} />
					<Route exact path='/dashboard' element={<Dashboard />} />
					<Route path='/' element={<Navigate to='/login' />} />
				</Routes>
			</Router>
			<AlertNotification />
		</>
	);
}

export default App;
