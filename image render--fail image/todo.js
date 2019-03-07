import React from 'react';
function Todo(props){
    console.log(props);
    return (
        <div>
            <img src="{props.image}" alt="image cannot be displayed"/>
            <h4>{props.name}</h4>
            <h2>{props.no}</h2>
        </div>
    )
}

export default Todo