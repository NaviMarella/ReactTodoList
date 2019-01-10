import React, { Component } from "react";
import SidebarContainer from "./SidebarContainer";
import TodoForm from '../components/AddForm';
import TodoListContainer from "./TodoListContainer";
import { AppConsumer } from "../AppContext";
import "./mainContainer.css";

class MainContainer extends Component {
    render(){
        return (
            <AppConsumer>
                {({todoList, labels, hideSidebar, dispatch, currentLabel}) => {
                    return(
                        <main className="mainContainer">
                            <SidebarContainer
                                hideText={hideSidebar}
                                labels={labels}
                                dispatch={dispatch}
                                currentLabel={currentLabel}
                                setCurrentLabel={(data) => dispatch({type: 'SET_CURRENT_LABEL', data})}
                            />
                            <div className="todoContainer">
                                <TodoForm addTODO={(data) => dispatch({type: 'ADD_TODO', data})}/>
                                <TodoListContainer
                                    todoList={todoList.filter(todo => (todo.label === currentLabel))}
                                    dispatch={dispatch}
                                    currentLabel={currentLabel}
                                />
                            </div>
                        </main>
                    )
                }}
            </AppConsumer>
        )
    }
}

export default MainContainer;