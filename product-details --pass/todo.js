import React from 'react';
function Todo(props){
    console.log(props);
    return (
        <div>
            <input type="checkbox" checked={props.item.status && true} />
            Id:{props.item.id}
            <h4>Name:{props.item.name}</h4>
            <h2>Price:{props.item.price}</h2>
        </div>
    )
}


export default Todo