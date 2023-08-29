// import { Form, Button } from "react-bootstrap"
// // import { TaskContext } from "./TaskContext";
// import { useState } from 'react';

// export const EditForm = ({ theEmployee }) => {

//     const id = theEmployee.id;

//     const [description, setDescription] = useState(theEmployee.description);
//     const [todo, setTodo] = useState(theEmployee.todo);
//     const [inprogress, setInprogress] = useState(theEmployee.inprogress);
//     const [done, setDone] = useState(theEmployee.done);
//     const [duedate, setDuedate] = useState(theEmployee.duedate);



//     // const { updateEmployee } = useContext(EmployeeContext);

//     const updatedTask = { id, description, todo, inprogress, done, duedate }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         updatedTask(id, updatedTask)
//     }

//     return (

//         <Form onSubmit={handleSubmit}>
//             <Form.Group
//                 className="mb-3"
//             >
//                 <Form.Label>Add task description</Form.Label>
//                 <Form.Control as="textarea" rows={3}
//                     type="description"
//                     name="description"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     placeholder="Login page backend development and thorough testing 2" />
//             </Form.Group>
//             <Form.Group className="mb-3">
//                 <Form.Label>Select Task Status</Form.Label>
//                 <Form.Control
//                     type="radio"
//                     name="status"

//                     autoFocus
//                     value={todo}
//                     onChange={(e) => setTodo(e.target.value)}

//                 />
//                 <Form.Control
//                     type="radio"
//                     name="status"

//                     autoFocus
//                     value={inprogress}
//                     onChange={(e) => setInprogress(e.target.value)}

//                 />
//                 <Form.Control
//                     type="radio"
//                     name="status"
//                     autoFocus
//                     value={done}
//                     onChange={(e) => setDone(e.target.value)}

//                 />
//             </Form.Group>
//             <Form.Group>
//                 <Form.Control
//                     type="date"
//                     name="duedate"
//                     value={duedate}
//                     onChange={(e) => setDuedate(e.target.value)}
//                 />
//             </Form.Group>

//             <Button variant="success" type="submit" block>
//                 Update Task
//             </Button>
//             <Button variant="success" type="submit" block>
//                 Delete Task
//             </Button>
//         </Form>

//     )
// }
