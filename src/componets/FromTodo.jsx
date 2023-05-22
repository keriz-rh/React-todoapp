import React, { useState } from "react";

const FromTodo = props => {
    const [description, setDescription] = useState("");  // Estado para almacenar la descripción del formulario
    const { addItem } = props;  // Función para agregar elementos a la lista recibida como prop

    const handleSubmit = e => {
        e.preventDefault();  // Previene el comportamiento predeterminado del formulario

        console.log(description);  // Imprime la descripción en la consola

        setDescription("");  // Limpia la descripción después de enviar el formulario

        // Crea un nuevo elemento y lo agrega a la lista utilizando la función addItem
        addItem({       
            done: false,
            id: (new Date()).toString(),
            description
        });

        setDescription("");  // Limpia la descripción después de agregar el elemento
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="file-input">
                    <input 
                        type="text"
                        className="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}  // Actualiza la descripción según lo que se escribe en el campo de texto
                    />
                    <button 
                        className="button pink"
                        disabled={description ? "" : "disabled"}  // Deshabilita el botón si la descripción está vacía
                    >
                        Agregar tarea
                    </button>
                </div>
            </div>
        </form>
    )
}

export default FromTodo;
