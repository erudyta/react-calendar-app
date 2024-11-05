import { useState } from 'react'
import Calendar from './Components/Calendar.jsx'
import SelectedDay from './Components/SelectedDay.jsx'


const App = () => {
	const date = new Date() //returns actual date
	const [currMonth, setCurrMonth] = useState(date.getMonth()) //Current Month
	const [currYear, setCurrYear] = useState(date.getFullYear()) //Current Year
	const [selectedDay, setSelectedDay] = useState(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`)


	let firstDay = new Date(currYear, currMonth, 1).getDay() //returns what is the first day of the month
	const numberOfDaysInMonth = new Date(currYear, currMonth + 1, 0).getDate() //returns the maximum number of days in a month

	const arrNumberOfDaysInMonth = []

	for (let i = 0; i < numberOfDaysInMonth; i++) {
		arrNumberOfDaysInMonth.push({ id: `${i + 1}.${currMonth}.${currYear}` })
	}

	// 0 - pn, 1- wt, 2- sr, 3 - czw, 4 - pt, 5 -sb, 6- nd
	let arrBlankPlacesInCalendar = []
	if (firstDay > 0) {
		firstDay = firstDay - 1
		arrBlankPlacesInCalendar = new Array(firstDay).fill('')
	} else if (firstDay === 0) {
		firstDay = 6
		arrBlankPlacesInCalendar = new Array(firstDay).fill('')
	}

	const handlePlusMonth = () => {
		if (currMonth === 11) {
			setCurrYear(prev => prev + 1)
			setCurrMonth(0)
		} else {
			setCurrMonth(prev => prev + 1)
		}
	}

	const handleMinusMonth = () => {
		if (currMonth === 0) {
			setCurrYear(prev => prev - 1)
			setCurrMonth(11)
		} else {
			setCurrMonth(prev => prev - 1)
		}
	}

	return (
		<main>
			<div className='container'>
				<Calendar
					date={date}
					currMonth={currMonth}
					currYear={currYear}
					arrBlankPlacesInCalendar={arrBlankPlacesInCalendar}
					arrNumberOfDaysInMonth={arrNumberOfDaysInMonth}
					onPlusMonth={handlePlusMonth}
					onMinusMonth={handleMinusMonth}
					setSelectedDay = {setSelectedDay}
					selectedDay = {selectedDay}
				/>
				<SelectedDay selectedDay={selectedDay}/>
			</div>
		</main>
	)
}

export default App
