import './create-event.css'

const CreateEvent = () => {
	return (
		<div className='ce-container'>
			<h1>Create a new event!</h1>
			<hr />
			<label htmlFor='hours'>Time</label>
			<input type='number' name='hours' min={0} max={24} />
			<label htmlFor='title'>Title</label>
			<input type='text' name='title' />
			<label htmlFor='description'>Description</label>
			<textarea name='description'></textarea>
			<button>Create Event</button>
		</div>
	)
}

export default CreateEvent
