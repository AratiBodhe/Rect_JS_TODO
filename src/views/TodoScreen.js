import { useEffect, useState } from "react"
import { InputComp } from "../components/InputComp"
import { Text } from "../constants/text"
import { } from '../styles/TodoScreen.css'
import { ButtonComp } from "../components/ButtonComp"
import { useDispatch, useSelector } from "react-redux"
import { addTask } from "../actions/todoSlice"
import { DisplayTask } from "../components/DisplayTask"

export const TodoScreen = () => {
    const [todo, setTodo] = useState('');
    const [data, setData] = useState();

    const disptach = useDispatch();
    const selector = useSelector(state => state.todod);
    const onChangeTodo = (e) => {
        e.preventDefault();
        setTodo(e.target.value);
    };
    const addItem = () => {
       let id=selector.tasks.length+1
    //    console.log('id=',id);
    
        disptach(addTask(todo))
    };
    const listItem = selector.tasks.map((task) => <ul>{task}</ul>)

    return (
        <>
            <label className='page-header'>{Text.TODO_LIST}</label>
            <div className='underline'></div>
            <div className="input-container">
                <InputComp value={todo} onchange={
                    (e) => {
                        onChangeTodo(e);
                    }
                } />
            </div>
            <div className="btn-container">
                <ButtonComp btnname={Text.ADD} onclick={() => {
                    addItem()
                }} />
                {
                    selector.tasks.map((task,id) =>
                        <ul key={id}>
                            <DisplayTask id={id} todo={task} />
                        </ul>

                    )
                }
            </div>

        </>
    )
}