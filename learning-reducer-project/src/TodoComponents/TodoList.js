// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React,{useReducer, useEffect, useState} from 'react';
import ToDoForm from './TodoForm.js';
import ToDo from './Todo';
import reducer from '../reducers/todoReducers.js';
import S from 'styled-components';
import './Todo.css';




const ToDoList = (props) => {
    const stateObject = {
        todos: [{
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
            },
        ],
    }      

    const [state, dispatch] = useReducer(reducer, stateObject);
    const [todoName, setTodoName] = useState('');

    const addAction = {type: 'ADD_ITEM', payload: todoName};
    const clearAction = {type: 'DELTE_ITEMS'};
    // const toggleAction = {type: 'TOGGLE_ITEM', payload: items.id};

    console.log(state);
    const handleChanges = event => {
        setTodoName(event.target.value);
    }

  const addItem = (event) => {
    event.preventDefault();
    dispatch(addAction);
  }
  const clearItem = event => {
      event.preventDefault();
      dispatch(clearAction);
  }
  const toggleItem = toggleAction => {
    dispatch(toggleAction);

}

    return(
        <div>
            {state.todos && state.todos.map( items => {
                return (
                    <Card onClick={ () => toggleItem({type: 'TOGGLE_ITEM', payload: items.id})} className={items.completed ? "completed" : null}>
                        <ItemName>{items.item}</ItemName>
                    </Card>
                );
            })}
            <ToDoForm clearItem={clearItem} todoName={todoName} handleChanges={handleChanges} addItem={addItem}/>
        </div>
    );
}
export default ToDoList;



const Card = S.div`
width: auto;
background-color: #000;
&: hover {
cursor: pointer;
}

`;

const ItemName = S.p`
color: #fff;
font-size: 20px;
letter-spacing: 1px;
`;
