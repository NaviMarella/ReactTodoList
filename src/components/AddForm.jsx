import React, { Component } from 'react';
import Box from "./Box";
import Button from "./Button";
import Input from './Input';
import "./AddForm.css";

class TodoForm extends Component {

    constructor(props){
        super(props);
        this.state ={
            todoText: ''
        }
    }

    handleInputChange = (val) => {
        this.setState({
            todoText: val
        });
    }

    handleSubmit = () => {
        const { addTODO } = this.props;
        if(this.state.todoText){
            addTODO(this.state.todoText);
        }
        this.setState({
            todoText: ""
        });
    }

    render() {
        const { direction = "row", placeholderText, maxLength } = this.props;
        const { todoText } = this.state;
        return (
            <Box type={direction === "column" ? "small" :"large"}>
                <form className={direction === "column" ? "todo-form__column": "todo-form"}>
                    <Input type="search" maxLength={maxLength} value={todoText} placeholder={placeholderText} handleInput={this.handleInputChange}/>
                    <Button type="submit" handleButtonClick={this.handleSubmit}>  Add </Button>
                </form>
            </Box>

        );
    }
}

export default TodoForm;