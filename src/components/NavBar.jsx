import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap"
import imgUser from '../bxs-user.svg';
import imgHome from '../images.jpg';
// import { FaCheck } from 'react-icons/fa';

export const NavBar = () => {
    const [todos, setTodos] = useState([]);

    const [addtodo, setAddtodo] = useState({
        description: "", status: "", duedate: ""
    });
    // const [description, setDescription] = useState(null)
    // const [status, setStatus] = useState(null)
    // const [duedate, setDuedate] = useState(null)
    // const [todos, setTodos] = useState([]);
    // const [inprogress, setInprogress] = useState([]);
    // const [completed, setCompleted] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [newTodo, setNewTodo] = useState({
    //     description: "", status: "", duedate: ""
    // });
    const inputChange = (event) => {
        // setName(event.target.value)
        console.log(event.target.value)

        const { value, name } = event.target;
        setAddtodo((data) => {
            console.log(data)
            return {
                ...data,
                [name]: value,
                // [event.target.name]: event.target.value
            };

        });
        const todo = {
            id: Math.floor(Math.random() * 1000),
            [name]: value,
        }
        setTodos([todo, ...todos]);
        // setEmail(email)
        // setNumber(number)

    }
    const onsubmits = (e) => {
        e.preventDefault();
        // setData(name)
        console.log(addtodo)
    }



    // const addToProgress = (id) => {
    //     const data = todos.find(x => x.id === id);
    //     setInprogress([data, ...inprogress]);
    //     const filterarray = todos.filter(x => x.id !== id);
    //     setTodos(filterarray);
    // }
    // const addtoCompleted = (id) => {
    //     const data = inprogress.find(x => x.id === id);
    //     setCompleted([data, ...completed]);
    //     const filterarray = inprogress.filter(x => x.id !== id);
    //     setInprogress(filterarray);
    // }

    // useEffect(() => {

    // }, [todos, inprogress])

    return (
        <>
            <div className="sidebar">

                <ul className="nav-links">
                    <li>
                        <a href={{}} className="active">
                            <i className='bx bx-grid-alt' ></i>
                            <span className="links_name">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href={{}}>
                            <i className='bx bx-box' ></i>
                            <span className="links_name">Product</span>
                        </a>
                    </li>
                    <li>
                        <a href={{}}>
                            <i className='bx bx-list-ul' ></i>
                            <span className="links_name">Order list</span>
                        </a>
                    </li>
                    <li>
                        <a href={{}}>
                            <i className='bx bx-pie-chart-alt-2' ></i>
                            <span className="links_name">Analytics</span>
                        </a>
                    </li>
                    <li>
                        <a href={{}}>
                            <i className='bx bx-coin-stack' ></i>
                            <span className="links_name">Stock</span>
                        </a>
                    </li>
                    <li>
                        <a href={{}}>
                            <i className='bx bx-cog' ></i>
                            <span className="links_name">Setting</span>
                        </a>
                    </li>
                    <li className="log_out">
                        <a href={{}}>
                            <i className='bx bx-log-out'></i>
                            <span className="links_name">Log out</span>
                        </a>
                    </li>
                </ul>
            </div>
            <nav>
                <div className='addbtn'>
                    <Button className="sidebar-add"
                        onClick={handleShow}
                        data-toggle="modal">
                        <i className='bx bx-message-alt-add'></i>
                        <span className="addtask">Create Task</span>
                    </Button>
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
                            <p className="card_text">{addtodo.description}</p>
                            <p className="card_text">{addtodo.status}</p>
                            <p className="card_text">{addtodo.date}</p>
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
                    </form>


                </Modal.Body>

            </Modal>
        </>
    )
}
