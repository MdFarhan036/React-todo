import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import imgUser from '../bxs-user.svg';


export const Create = (props) => {
    // const [note, setNote] = useState('')
    // const [todos, setTodos] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [data, setData]=useState('')
    const [addtodo, setAddtodo] = useState({
        description: "", status: "", duedate: ""
    });


    const inputChange = (event) => {
        // setName(event.target.value)
        // console.log(event.target.value)

        const { value, name } = event.target;
        setAddtodo((data) => {
            console.log(data)
            return {
                ...data,
                [name]: value,
                // [event.target.name]: event.target.value
            };

        });


    }
    const onsubmits = (e) => {
        e.preventDefault();
        props.passNote(addtodo);
        setAddtodo({
            description: "",
            status: "",
            date: ""
        })
        // setData(name)
        console.log(addtodo)
    }

    return (
        <>
        <nav>
            <div className='addbtn'>
                <button className="sidebar-add"
                    onClick={handleShow}
                    data-toggle="modal">
                    <i className='bx bx-message-alt-add'></i>
                    <span className="addtask">Create Task</span>
                </button>
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search..." />
                <i className='bx bx-search' ></i>
            </div>
            <div className="profile-details">
                <span className="admin_name">User Name</span>
                <img src={imgUser} alt="" />

                <i className='bx bx-chevron-down' ></i>
            </div>
        </nav>
            <Modal show={show} onHide={handleClose} style={{ marginTop: '-10' }}>
                {/* console.log(show) */}
                <Modal.Header>
                    <Modal.Title style={{ textAlign: 'center', fontSize: '20px', borderBottom: '2px solid black', width: '100%' }}>
                        Edit the Task for the team
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='form_todo' onSubmit={onsubmits}>
                        <div className='form-Group'>
                            <label>Add task description</label>
                            <textarea
                                style={{

                                    fontSize: '15px',
                                    width: " 100%",
                                    borderRadius: '10px',
                                    padding: '10px 10px',
                                    height: '100px'
                                }} as="textarea"
                                type="text"
                                value={addtodo.description}
                                onChange={inputChange}
                                id="description"
                                className="form-control"
                                name="description"
                                placeholder="Login page backend development and thorough testing 2"
                            />
                        </div>

                        <div className='form-Group'>
                            <label style={{ marginRight: '15px' }}>Select Task Status</label><br />
                            <input

                                style={{
                                    fontSize: '35px',
                                    margin: '10px 10px 10px 20px',
                                    height: '15px'
                                }}


                                id="status"
                                type="radio"

                                className="form-control"
                                name="status"
                                placeholder='status'
                                value={addtodo.status}
                                autoFocus
                                autoComplete='off'
                                onChange={inputChange}

                            />
                            <label>To Do</label>

                            <input
                                style={{

                                    fontSize: '35px',


                                    margin: '10px 10px 10px 20px',
                                    height: '15px'
                                }}
                                id="status"


                                type="radio"

                                className="form-radio"
                                name="status"
                                placeholder='status'
                                value={addtodo.status}

                                autoFocus
                                autoComplete='off'
                                onChange={inputChange}

                            />
                            <label>In Progress</label>

                            <input
                                style={{

                                    fontSize: '35px',

                                    margin: '10px 10px 10px 20px',
                                    height: '15px'
                                }}
                                id="status"

                                type="radio"

                                className="form-radio"
                                name="status"
                                placeholder='status'
                                value={addtodo.status}

                                autoFocus
                                autoComplete='off'
                                onChange={inputChange}

                            />
                            <label>Done</label>

                        </div>


                        <div className='form-group' style={{ margin: '10px 0 20px 0' }}>
                            <label>Due Date</label>
                            <input
                                style={{

                                    fontSize: '15px',
                                    height: '30px',
                                    width: " 100%",
                                    outline: 'none',
                                    border: 'none',
                                    padding: '10px 10px',
                                }}

                                value={addtodo.date}
                                onChange={inputChange}
                                id="duedate"
                                type="date"
                                className="form-radio"
                                name="date"

                            />
                        </div>
                        <Button
                            variant="success"
                            type="submit"
                            block
                            style={{
                                fontSize: '15px',
                                aligndatas: 'center',
                                fontWeight: 'center',
                                width: '150px',
                                marginRight: '50px',
                                height: '30px',
                                // margin: '20px 10px',
                                border: 'none',
                                borderRadius: '10px',
                                background: '#fff'

                            }}>
                            Add New Task
                        </Button>

                    </form>
                    <Button className='btn btn-primary' variant="secondary" style={{
                        fontSize: '15px',
                        width: '150px',
                        height: '30px',
                        outline: 'none',
                        border: 'none',
                        margin: '30px 10px',
                        borderRadius: '10px',
                        background: '#fff',
                    }} onClick={handleClose} >

                        Close Button
                    </Button>

                </Modal.Body>

            </Modal>
        </>)
}
