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
const SelectedDay = ({ selectedDay, showPopup, setShowPopup }) => {
	const arrDate = selectedDay.split('.') // [0] - day, [1] - month, [2] - year

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
						<button
							className='btn-create-event'
							onClick={() => {
								setShowPopup(true)
							}}>
							Create Event
						</button>
					)}
				</div>
				{showPopup ? (
					<CreateEvent />
				) : (
					<div className='sd-events'>
						<div className='sd-events-inner'>
							<div className='sd-event'>
								<h2>12:00</h2>
								<div className='sd-event-content'>
									<h3>Title</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vel tempora voluptatem nulla in
										iste porro nihil vitae. At, vero! Ipsam, tenetur corrupti harum exercitationem consectetur modi
										beatae eligendi iure provident non nesciunt at tempora, laudantium dolorem accusantium fuga ex.
									</p>
								</div>
								<div className='sd-buttons'>
									<button>
										<i className='bx bx-edit-alt'></i>
									</button>
									<button>
										<i className='bx bx-x'></i>
									</button>
								</div>
							</div>
							<div className='sd-event'>
								<h2>12:00</h2>
								<div className='sd-event-content'>
									<h3>Title</h3>
									<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, totam!</p>
								</div>
								<div className='sd-buttons'>
									<button>
										<i className='bx bx-edit-alt'></i>
									</button>
									<button>
										<i className='bx bx-x'></i>
									</button>
								</div>
							</div>
							<div className='sd-event'>
								<h2>12:00</h2>
								<div className='sd-event-content'>
									<h3></h3>
									<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, dolorem!</p>
								</div>
								<div className='sd-buttons'>
									<button>
										<i className='bx bx-edit-alt'></i>
									</button>
									<button>
										<i className='bx bx-x'></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default SelectedDay
