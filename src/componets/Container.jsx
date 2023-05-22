import React, { useState } from 'react';
import FromTodo from './FromTodo';  // Componente para agregar elementos a la lista de tareas
import TaskList from './TaskList';  // Componente para mostrar la lista de tareas

const Container = () => {
    const [list, setList] = useState([]);  // Estado para almacenar la lista de tareas

    const addItem = addItem => {
        setList([...list, addItem])  // Función para agregar un elemento a la lista de tareas
    };
        
    return (
        <div>
            <FromTodo addItem={addItem}/>  {/* Componente para agregar nuevos elementos a la lista */}
            <TaskList list={list} setList={setList}/>  {/* Componente para mostrar la lista de tareas */}
        </div>
    );
}

export default Container;
