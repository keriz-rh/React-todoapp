import React from "react";
import Checkbox from "./Checkbox";

const TaskList = props => {
    const { list, setList } = props;

    const onChangesStatus = e => {
        const { name, checked } = e.target;
        // Actualiza el estado de la lista según el cambio de estado del checkbox
        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList);
    };

    const onClickRemoveItem = e => {
        // Filtra los elementos de la lista que no están marcados como "done" (hechos)
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    };

    const checkbox = list.map(item => (
        // Renderiza un componente Checkbox para cada elemento en la lista
        <Checkbox key={item.id} data={item} onChange={onChangesStatus} />
    ));

    return (
        <div className="todo-list">
            {list.length ? checkbox : "No hay tareas"}
            {list.length ? (
                <p>
                    <button className="button pink" onClick={onClickRemoveItem}>
                        Delete
                    </button>
                </p>
            ) : null}
        </div>
    );
}

export default TaskList;
