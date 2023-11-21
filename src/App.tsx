import './App.css'
import Button from './components/ui/buttons/Button'
import { ButtonVariant } from './components/enums/ButtonVariant.enum'

const App = () => {
	return (
		<div className="App">
			<Button variant={ButtonVariant.SECONDARY}>{'Live <~>'}</Button>
		</div>
	)
}

export default App
