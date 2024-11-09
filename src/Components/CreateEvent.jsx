import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import './create-event.css'
const CreateEvent = ({ selectedDay, events ,setEvents,  setShowPopup, editingEvent, setEditingEvent }) => {
	useEffect(() => {
		if (editingEvent) {
			setEventInputs(prev => ({
				...prev,
				eventTime: {
					...prev.eventTime,
					hours: editingEvent.eventTime.hours,
					minutes: editingEvent.eventTime.minutes,
				},
				eventTitle: editingEvent.eventTitle,
				eventDescription: editingEvent.eventDescription,
			}))
		}
	}, [editingEvent])

	const [eventInputs, setEventInputs] = useState({
		eventTime: {
			hours: '00',
			minutes: '00',
		},
		eventTitle: '',
		eventDescription: '',
	})

	const handleSubmit = e => {
		e.preventDefault()

		if (eventInputs.eventTitle.trim() === '' && eventInputs.eventDescription.trim() === '') {
			return
		}

		const newEvent = {
			id: editingEvent ? editingEvent.id: uuidv4(),
			day: selectedDay,
			...eventInputs,
		}

		let updEvents = [...events]

		if(editingEvent){
			updEvents = updEvents.map(event => event.id === editingEvent.id ? newEvent : event )
		}else{
			updEvents.push(newEvent)
		}

		let toSortEvents = updEvents.map(event => {
			return {...event, forSort: parseInt(event.eventTime.hours + event.eventTime.minutes)}
		})

		toSortEvents.sort((a,b) => a.forSort - b.forSort)

		setEvents(toSortEvents)
		setEditingEvent(null)
		setShowPopup(false)
	}

	const handleTimeInput = e => {
		const { name, value } = e.target
		setEventInputs(prev => ({
			...prev,
			eventTime: { ...prev.eventTime, [name]: value.padStart(2, '0') },
		}))
	}

	const handleTitleInput = e => {
		setEventInputs(prev => ({ ...prev, eventTitle: e.target.value }))
	}

	const handleDescriptionInput = e => {
		setEventInputs(prev => ({ ...prev, eventDescription: e.target.value }))
	}

	return (
		<div className='ce-container'>
			<div className='ce-header'>
				<h1>{editingEvent ? 'Update' : 'Create a new'} event!</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<div className='ce-form-content'>
					<label htmlFor='time'>Time</label>
					<div className='ce-form-time'>
						<input
							type='number'
							name='hours'
							min={0}
							max={24}
							value={eventInputs.eventTime.hours}
							onChange={handleTimeInput}
						/>
						<span>:</span>
						<input
							type='number'
							name='minutes'
							min={0}
							max={60}
							value={eventInputs.eventTime.minutes}
							onChange={handleTimeInput}
						/>
					</div>
					<label htmlFor='title'>Title</label>
					<input
						type='text'
						name='title'
						placeholder='Enter Event Title'
						value={eventInputs.eventTitle}
						onChange={handleTitleInput}
					/>
					<label htmlFor='description'>Description</label>
					<textarea
						name='description'
						placeholder='Enter Event Text'
						value={eventInputs.eventDescription}
						onChange={handleDescriptionInput}></textarea>
				</div>
				<div className='ce-buttons'>
					<button>{editingEvent ? 'Update' : 'Create'}</button>
				</div>
			</form>
		</div>
	)
}

export default CreateEvent
