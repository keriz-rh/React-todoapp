import React, { useState} from "react";


const FromTodo = props => {
    const [description, setDescription] = useState("");
    const {addItem} = props;
    //e hace refencia a form
    const handleSubmit = e => { //Con handlesubmit limpiamos el texto y lo enviamos al console
        e.preventDefault(); //preventDefault prevee el comportamiento Dfault de nuestra formulario o html, lo quita
        console.log(description)
        setDescription("");

        addItem({       
            done: false,
            id: (new Date()).toString(),
            description
        });

        setDescription("");
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="file-input">
                    <input 
                    type = 'text'
                    className="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />
                    <button 
                        className= "button pink"
                        disabled={description ? "" : "disabled"}
                        /*
                        Operator ternario "?" es cómo si fuera un iff en una sola linea de codigo
                        Lo mismo
                        if (Description == ""){
                            disab0led= "disabled"
                        } else {
                            disabled = ""
                        }
                         */
                    >
                        agregar tarea 
                        </button>
                </div>
            </div>
        </form>
    )
}

export default FromTodo;