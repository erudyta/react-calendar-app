import { useState } from 'react'
import CreateEvent from './CreateEvent.jsx'

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

import './selected-day.css'
const SelectedDay = ({ selectedDay, showPopup, setShowPopup, events, setEvents }) => {
	
	const [editingEvent, setEditingEvent] = useState(null)
	const arrDate = selectedDay.split('.')

	const eventsOnSelectedDay = events.filter(event => event.day === selectedDay)

	const handleDeleteEvent = id => {
		setEvents(prev => prev.filter(event => event.id !== id))
	}

	return (
		<>
			<div className='sd-container'>
				<div className='sd-navigate'>
					<div>
						<h2>{arrDate[0]}</h2>
						<h2>{months[arrDate[1]]}</h2>
						<h2>{arrDate[2]}</h2>
					</div>
					{showPopup ? (
						<button
							className='btn-create-event'
							onClick={() => {
								setShowPopup(false)
							}}>
							Close
						</button>
					) : (
						eventsOnSelectedDay.length > 0 && (
							<button
								className='btn-create-event'
								onClick={() => {
									setShowPopup(true)
									setEditingEvent(null)
								}}>
								Create Event
							</button>
						)
					)}
				</div>
				{showPopup ? (
					<CreateEvent
						selectedDay={selectedDay}
						events={events}
						setEvents={setEvents}
						setShowPopup={setShowPopup}
						editingEvent={editingEvent}
						setEditingEvent={setEditingEvent}
					/>
				) : eventsOnSelectedDay.length > 0 ? (
					<div className='sd-events'>
						<div className='sd-events-inner'>
							{eventsOnSelectedDay.map(event => (
								<div key={event.id} className='sd-event'>
									<h2>{`${event.eventTime.hours}:${event.eventTime.minutes}`}</h2>
									<div className='sd-event-content'>
										<h3>{event.eventTitle}</h3>
										<p>{event.eventDescription}</p>
									</div>
									<div className='sd-buttons'>
										<button
											onClick={() => {
												setShowPopup(true)
												setEditingEvent(event)
											}}>
											<i className='bx bx-edit-alt'></i>
										</button>
										<button onClick={() => handleDeleteEvent(event.id)}>
											<i className='bx bx-x'></i>
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				) : (
					<div className='sd-noevents'>
						<h1>No events created on the selected day</h1>
						<button
							className='btn-create-event'
							onClick={() => {
								setShowPopup(true)
								setEditingEvent(null)
							}}>
							Click to create event
						</button>
					</div>
				)}
			</div>
		</>
	)
}

export default SelectedDay
