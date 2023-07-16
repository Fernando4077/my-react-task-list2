const {item} = prompt;

const TaskList = () =>{
    return  (
        <>
        <span><strong>{item}</strong></span>
        <ul>{item}</ul>
        </>
    )
}

export {TaskList}