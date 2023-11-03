import { useDispatch } from 'react-redux'
import { } from '../styles/TodoScreen.css'
import { ButtonComp } from './ButtonComp'
import { deleteTodo } from '../actions/todoSlice';
export const DisplayTask = (props) => {
    const disptach=useDispatch();

    const deleteItem=(id)=>{
        console.log('deleteItem',id);
        disptach(deleteTodo(id)) 
    }
    return (
        <div className="task-container">
            <label className='todo-label'>{props.todo}</label>
            <div>
                <ButtonComp onclick={()=>{
                 deleteItem(props.id);
                }} className='task-button' btnname='DELETE' />
                <ButtonComp className='task-button' btnname='EDIT' />
            </div>
        </div>
    )
}