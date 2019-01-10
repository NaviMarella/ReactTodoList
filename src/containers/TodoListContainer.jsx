import React from "react";
import Box from "../components/Box";
import Label from "../components/Label";
import TodoListItem from "../components/TodoListItem";
import "./TodoListContainer.css";
import Conditional from '../components/Conditional';

const TodoListContainer = ({todoList = [], dispatch, currentLabel}) => {
    let todos = todoList.filter(todo => todo && !todo.isCompleted);
    return(
         <Conditional condition={todoList.length > 0}>
             <Box type="large">
                <div className="todoList__header">
                    <Label text = {`Todo Items:   ${currentLabel}`} />
                    <Label className="todolist__count" text = {`${todos.length}/${todoList.length}`}/>
                </div>
                {
                    todoList.map((item, index) => {
                        return (
                            <TodoListItem key={item.id} todo={item} currentLabel={currentLabel} dispatch={dispatch}/>
                        )
                    })
                }
            </Box>
         </Conditional>
    )
}

export default TodoListContainer