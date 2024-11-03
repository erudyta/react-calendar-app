import React from 'react'
import Calendar from './Components/Calendar.jsx'
import SelectedDay from './Components/SelectedDay.jsx'

const App = () => {
	return (
		<main>
			<div className='container'>
				<Calendar />
				<SelectedDay />
			</div>
		</main>
	)
}

export default App
