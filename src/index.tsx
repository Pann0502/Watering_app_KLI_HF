import { render } from 'preact';
import './styles/index.css';
import { Login } from './login/Login';
import "./Pwa"

function App() {
	return <Login />
}

render(<App />, document.getElementById('app'));