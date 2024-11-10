import { useState } from 'react'

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

import './calendar.css'
const Calendar = ({
	date,
	currMonth,
	currYear,
	arrBlankPlacesInCalendar,
	arrNumberOfDaysInMonth,
	onMinusMonth,
	onPlusMonth,
	setSelectedDay,
	selectedDay,
	setShowPopup,
	events,
}) => {
	function handleButtonDay(day) {
		setSelectedDay(prev => day.id)
	}

	const arrSelectedDate = selectedDay.split('.') // [0] - day, [1] - month, [2] - year

	return (
		<div className='calendar-container'>
			<h1>Calendar</h1>
			<div className='calendar-month-year'>
				<h2>{months[currMonth]}, </h2>
				<h2> {currYear}</h2>
				<div>
					<button onClick={onMinusMonth}>
						<i className='bx bx-left-arrow-alt'></i>
					</button>
					<button onClick={onPlusMonth}>
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
				{arrNumberOfDaysInMonth.map((day, dayNumber) => {
					const dateToCompare = `${dayNumber + 1}.${currMonth}.${currYear}`
					console.log(dateToCompare)
					const listOfEventsInDay = events.filter(event => event.day === dateToCompare)
					console.log(listOfEventsInDay)

					return (
						<button
							className={`
							${
								dayNumber + 1 === date.getDate() && currMonth === date.getMonth() && currYear === date.getFullYear()
									? 'curr-day'
									: ''
							}
							${
								dayNumber + 1 === parseInt(arrSelectedDate[0]) &&
								currMonth === parseInt(arrSelectedDate[1]) &&
								currYear === parseInt(arrSelectedDate[2])
									? 'selected-day'
									: ''
							}
							`}
							onClick={() => {
								handleButtonDay(day)
								setShowPopup(false)
							}}
							key={dayNumber}>
							{dayNumber + 1}
							{listOfEventsInDay.length > 0 && (
								<span className='event-counter'>{listOfEventsInDay.length > 9 ? '9+' : listOfEventsInDay.length}</span>
							)}
						</button>
					)
				})}
			</div>
		</div>
	)
}

export default Calendar
