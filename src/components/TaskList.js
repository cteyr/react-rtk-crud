import {useSelector, useDispatch} from 'react-redux';
import {deleteTask} from "../features/tasks/taskSlice";

function TaskList () {

    const task = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    }

    return (
        <div>{
            task.map ( task => (
                <div key={task.id}>
                    <h1>{task.title}</h1>
                    <p>{task.description}</p>
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default TaskList