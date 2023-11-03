
export const ButtonComp=(props)=>{
    return(
        <button type="submit" className={props.className} onClick={props.onclick} >{props.btnname}</button>
    )
}