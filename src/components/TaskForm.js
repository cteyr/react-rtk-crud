import { useState } from "react"
import { useDispatch } from "react-redux";
import {addTask} from "../features/tasks/taskSlice";
import {v4 as uuid} from "uuid";

function TaskForm () {

    const [task, setTask] = useState ({
        title: '',
        description: ''
    })

    const dispatch = useDispatch();


    const handelChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    }


    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({
            ...task,
            id: uuid(),
        }));
    }

    return (
        <form onSubmit={handelSubmit}>
            <input name="title" type="text" placeholder="tittle" onChange={handelChange}/>

            <textarea name="description" placeholder="description" onChange={handelChange}/>

            <button>Save</button>
        </form>
    )
}

export default TaskForm