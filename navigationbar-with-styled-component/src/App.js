import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
// import * as S from './components/Kerm';


function App() {
	return (
		<Router>
			<Navbar>

     </Navbar>
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
