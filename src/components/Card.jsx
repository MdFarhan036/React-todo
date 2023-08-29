import React from 'react'
import imgHome from '../images.jpg';


export const Card = (props) => {
    const deleteNote = () => {
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className='home-container'>
                <div className='home-header'>
                    <img src={imgHome} alt='' />
                    <h2>Website Development Tracker</h2>
                </div>
                <div className='card-box'>
                    <div className='card mb-5 flex-grow-1'>
                        <h3>Task To Do</h3>
                        <hr style={{ marginTop: '10px', marginBottom: '10px', width: '100%', height: '3px', background: 'black' }} />

                        <div className="todo_card">
                            <p className="card_text">{props.description}</p>
                            <p className="card_text">{props.status}</p>
                            <p className="card_text">{props.date}</p>
                            <button onClick={deleteNote} className='delete'>Delete</button>

                            {/* <FaCheck onClick={() => addToProgress(data.id)} className="icon-check-todo" /> */}

                        </div>

                    </div>
                    <div className='card mb-5 flex-grow-1'>
                        <h3>In Progress</h3>
                        <hr style={{ marginTop: '10px', marginBottom: '10px', width: '100%', height: '3px', background: 'black' }} />

                        {/* <div className="progress_card" >
                            <p className="card_text">{addtodo.description} {addtodo.status} {addtodo.duedate}</p>
                            {/* <FaCheck onClick={() => addtoCompleted(data.id)} className="icon-progress-todo" /> */}
                        {/* </div> */}

                    </div>
                    <div className='card mb-5 flex-grow-1'>
                        <h3>Done</h3>
                        <hr style={{ marginTop: '10px', marginBottom: '10px', width: '100%', height: '3px', background: 'black' }} />

                        {/* <div className="completed_card" >
                            <p className="card_text">{addtodo.description} {addtodo.status} {addtodo.duedate}</p>
                        </div> */}

                    </div>
                </div>
            </div>

        </>
    )
}
