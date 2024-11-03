import { useState } from 'react'
import './calendar.css'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const months = [
	'January',
	'Februrary',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]

const Calendar = () => {
	const date = new Date() //returns actual date
	const [currMonth, setCurrMonth] = useState(date.getMonth()) //Current Month
	const [currYear, setCurrYear] = useState(date.getFullYear()) //Current Year


	let firstDay = new Date(currYear, currMonth, 1).getDay() //returns what is the first day of the month
	const numberOfDaysInMonth = new Date(currYear, currMonth + 1, 0).getDate() //returns the maximum number of days in a month

	const arrNunumberOfDaysInMonth = new Array(numberOfDaysInMonth).fill('')

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
		<div className='calendar-container'>
			<h1>Calendar</h1>
			<div className='calendar-month-year'>
				<h2>{months[currMonth]}, </h2>
				<h2> {currYear}</h2>
				<div>
					<button onClick={handleMinusMonth}>
						<i className='bx bx-left-arrow-alt'></i>
					</button>
					<button onClick={handlePlusMonth}>
						<i className='bx bx-right-arrow-alt'></i>
					</button>
				</div>
			</div>
			<div className='calendar-daysofweek'>
				{days.map(day => (
					<span key={day}>{day}</span>
				))}
			</div>
			<div className='calendar-daysofmonth'>
				{arrBlankPlacesInCalendar.map((blank, index) => (
					<button key={index} className='calendar-daysofmonth-hidden'></button>
				))}
				{arrNunumberOfDaysInMonth.map((day, index) => (
					<button key={index}>{index + 1}</button>
				))}
			</div>
		</div>
	)
}

export default Calendar
