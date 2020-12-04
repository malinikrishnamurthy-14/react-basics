import React, { useState } from 'react'

const NewTodoForm = () => {

    const [inputValue, setInputValue] = useState(' ');
    return (
        <div>
            <input value={inputValue} onClick={e=>this.setInputValue(e.target.value)}></input>
            <button>create to do</button>
        </div>
    )
}

export default NewTodoForm