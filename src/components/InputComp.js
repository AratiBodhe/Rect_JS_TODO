import { Text } from "../constants/text"
import {} from '../styles/TodoScreen.css'
export const InputComp=(props)=>{
    // console.log(props);
    return(
        <input value={props.value} placeholder={Text.ADD_TODO} onChange={props.onchange} name='text' />
    )
}