import './create-event.css'

const CreateEvent = () => {
	return (
		<div className='ce-container'>
			<div className='ce-header'>
				<h1>Create a new event!</h1>
			</div>
			<form onSubmit=''>
				<div className='ce-form-content'>
					<label htmlFor='time'>Time</label>
					<div className='ce-form-time'>
						<input type='number' name='time' min={0} max={24} />
						<span>:</span>
						<input  type='number' name='time' min={0} max={60} />
					</div>
					<label htmlFor='title'>Title</label>
					<input type='text' name='title' />
					<label htmlFor='description'>Description</label>
					<textarea name='description'></textarea>
				</div>
				<div className='ce-buttons'>
					<button>Create</button>
				</div>
			</form>
		</div>
	)
}

export default CreateEvent
