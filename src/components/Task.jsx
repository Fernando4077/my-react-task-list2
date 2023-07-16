import { useEffect, useState } from "react"


const Task = () =>{
const [newItem, setNewItem] = useState("")
const [item, setItem] = useState([]);
const [editItem, setEditingItem] = useState(null);

useEffect(() => {
    localStorage.setItem("save", JSON.stringify(item));
  }, [item]);

useEffect(() => {
    const storedItem = localStorage.getItem("save");
    if (storedItem) {
      setItem(JSON.parse(storedItem));
    }
  }, []);



   function addItem() {
    if (!newItem){
        alert("Ingrese nueva tarea")
        return;
    }
    const item = {
        id: Math.floor(Math.random()*1000),
        value: newItem
    };
    setItem (oldList => [...oldList, item]);
    setNewItem("");
    console.log(item);
}
    function deleteItem(id){
        const newArray = item.filter(item=>item.id !== id)
        setItem(newArray);
    }

    function editText (id, newValue) {
        const newArray = item.map(item => {
          if (item.id === id) {
            return { ...item, value: newValue };
          }
          return item;
        });
        setItem(newArray);
        setEditingItem(null);
      }
   
    return  (
        <div>
            <input 
            type="text"
            placeholder="add new item..."
            value={newItem} 
            onChange={e => setNewItem(e.target.value)}/>


            <button className="add-bnt"
            onClick={() => addItem()}>+
            </button> 

            <div>
            <ul> 
                <h2>Lista de Tarea</h2>
                {item.map(item =>{
                    return(
                        <li className="li_container" key={item.id}>

                            <input type="checkbox" />

                            {item.value}


                            <button className="list-btn" onClick={()=>deleteItem(item.id)}>X</button>


                            <button className="list-btn2" 
                            onClick={()=>editText(newItem.value)}>Edit
                            </button>  
                              
                        </li>
                    )
                })}
            </ul>
            </div>

        </div>
    )
}

export {Task}