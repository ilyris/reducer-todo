import React,{useReducer, useEffect, useState} from 'react';
import S from 'styled-components';



const ToDoForm = (props) => {
    return(
        <Form onSubmit={props.addItem}>
            <InputField type="text" name="itemName" onChange={props.handleChanges } value={props.todoName}/>
            <SubmitButton>add item</SubmitButton>
            <div onClick={props.clearItem}>Delete Item</div>
        </Form>
    );
}

export default ToDoForm;

const Form = S.form`
    width: 50%;
    display: flex;
    justfity-content: space-between;
    margin: 0 auto;
`;

const InputField = S.input`
    font-size: 20px;
    padding: 10px;
    outline: none;
    border: 1px solid #000;
    width: 80%;
`;

const SubmitButton = S.button`
    font-size: 18px;
    text-transform: uppercase;
    border-radius: 25px;
`;