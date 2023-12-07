import './App.css'
import Home from './components/sections/home/Home'
import Navbar from './components/sections/navbar/Navbar'
import Projects from './components/sections/projects/Projects'

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<Projects />
		</div>
	)
}

export default App
