import React from 'react';
import S from 'styled-components';
import './Todo.css';

const ToDo = (props) => {
    return(
        <Card onClick={ e => props.toggleItem(props.item.id)} className={props.item.isCompleted ? "completed" : null}>
            <ItemName>{props.item.item}</ItemName>
        </Card>
    );
}
export default ToDo

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