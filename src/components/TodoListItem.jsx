import PropTypes from 'prop-types';
import React, { Component } from "react";
import deleteIcon from "../icons/delete.svg";
import editIcon from "../icons/edit.svg";
import tickIcon from "../icons/tick.svg";
import Checkbox from './Checkbox';
import Conditional from './Conditional';
import Icon from "./Icon";
import Input from "./Input";
import Label from "./Label";
import "./TodoListItem.css";

class TodoListItem extends Component{
    constructor(props){
        super(props);
        this.state={
            isEditMode: false,
            currentText: ""
        }
    }


    handleCheckboxChange = () => {
        const{ dispatch, todo } = this.props;
        dispatch({
            type: 'TOGGLE_COMPLETE',
            payload: {
                id: todo.id
            }
        })
    }

    handleInputChange = (val) => {
        this.setState({ currentText: val });
    }

    handleEditClick = () => {
        const { todo } = this.props;
        this.setState({
            isEditMode: true,
            currentText:todo.text
        })
    }

    handleDeleteClick = () => {
       const{ dispatch, todo } = this.props;
        dispatch({
            type: 'DELETE_TODO',
            payload: { id: todo.id }
        })
    }

    handleTickClick = () => {
        this.setState({
            isEditMode: false
        })
        const{ dispatch, todo } = this.props;
        dispatch({
            type: 'EDIT_TODO',
            payload: {
                id: todo.id,
                text: this.state.currentText
            }
        })
    }

    render(){
        const {todo = {}} = this.props;
        const { isEditMode, currentText } = this.state;
        const {text, isCompleted, id} = todo;
        return (
            <div className="listitemContainer">
                <Checkbox id={id} handleCheckboxChange ={this.handleCheckboxChange} isChecked={isCompleted}/>
                <Conditional condition={!isEditMode}>
                    <Label text={text} crossText={isCompleted}/>
                    <Icon icon={editIcon} onClick={this.handleEditClick}/>
                </Conditional>
                <Conditional condition={isEditMode}>
                    <Input type="text" value={currentText}  ref={this.exampleRef} handleInput={this.handleInputChange}/>
                    <Icon icon={tickIcon} onClick={this.handleTickClick}/>
                </Conditional>
                <Icon icon={deleteIcon} onClick={this.handleDeleteClick} />
            </div>
        )
    }
}

TodoListItem.propTypes = {
    todo: PropTypes.shape({}).isRequired,
    dispatch: PropTypes.func.isRequired
};

export default TodoListItem;