import React, { Fragment } from "react";

const Checkbox = props => {

    const {
        onChange,  // Función que se ejecuta cuando cambia el estado del checkbox
        data: {id, description, done}  // Datos del checkbox (id, descripción, estado)
    } = props; 

    return (
        <Fragment>
            {/* Elemento SVG para definir los elementos gráficos utilizados en el checkbox */}
            <svg viewBox="0 0 0 0" 
                style={{
                    position: "absolute",
                    zIndex: -1,
                    opacity: 0
                }}>
                <defs>
                    <path id="todo_line" d="M21 12.3h168v0.1z"/>  {/* Línea utilizada cuando el checkbox está marcado */}
                    <path id="todo_box" d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"/>  {/* Cuadro del checkbox */}
                    <path id="todo_check" d="M10 13l2 2 5-5" />  {/* Marca de verificación dentro del checkbox */}
                    <circle id="todo_circle" cx="13.5" cy="12.5" r="10"/>  {/* Círculo del checkbox */}
                </defs>
            </svg>

            {/* Etiqueta del checkbox */}
            <label className="todo new-item">
                {/* Input del checkbox */}
                <input
                    className="todo_state"
                    name={id}
                    type="checkbox"
                    defaultChecked={done}  // Define si el checkbox está marcado o no al cargar
                    onChange={onChange}  // Función a ejecutar cuando cambia el estado del checkbox
                />

                {/* SVG que representa el checkbox */}
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 200 25" 
                    className="todo_icon">
                        {done ? (<use xlinkHref="#todo_line" className="todo_line" />): ("")}  {/* Muestra la línea si el checkbox está marcado */}
                        <use xlinkHref="#todo_box"  className="todo_box" />  {/* Cuadro del checkbox */}
                        <use xlinkHref="#todo_check"  className="todo_check" />  {/* Marca de verificación */}
                        <use xlinkHref="#todo_circle"  className="todo_circle" />  {/* Círculo del checkbox */}
                </svg>

                {/* Descripción del checkbox */}
                <div className="todo_text">{description}</div>
            </label>
        </Fragment>
    );
}

export default Checkbox;

