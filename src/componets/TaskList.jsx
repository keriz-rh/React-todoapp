import React from "react";
import Checkbox from "./Checkbox";

const TaskList = props => {
    const {list, setList} = props;
    
    const onChangesStatus = e => {
        const {name, checked} = e.target;
        const updateList = list.map(item => ({ //.map nos ayudará a iterar sobre todos los arreglos
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList)
    };
    
    const onClickREmoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList)
    };

    const checkbox = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangesStatus} />
        ));
        
    return (
        <div className="todo-list">
            {list.length ? checkbox: "No hay tareas"}
            {list.length ? (
                <p>
                    <button className="button pink" onClick={onClickREmoveItem}>Delete</button>
                </p>  
                ) : null}
        </div>
        
    )
}

export default TaskList;