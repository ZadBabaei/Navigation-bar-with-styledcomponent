import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Navbar></Navbar>
			<Routes>
				<Route path='/'></Route>
				<Route path='/' products></Route>
				<Route path='/' contact></Route>
				<Route path='/' about></Route>
			</Routes>
		</Router>
	);
}

export default App;
