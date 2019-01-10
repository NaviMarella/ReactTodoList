import React from "react";
import "./SidebarContainer.css";
import Label from "../components/Label";
import Box from "../components/Box";
import Icon from "../components/Icon";
import TodoForm from '../components/AddForm';
import Conditional from '../components/Conditional';
import deleteIcon from "../icons/delete.svg";

const SidebarContainer = ({labels, currentLabel, hideText, setCurrentLabel, dispatch}) => {
    const styles = [
        "sidebar",
        hideText ? "sidebar__small" : "sidebar__large"
    ].join(" ");

    function handleDeleteClick(id){
        dispatch({
            type: 'DELETE_LABEL',
            data: id
        })
    }

    return (
        <div className={styles}>
            <Box>
               <div className="labelItems">
                    {
                        labels.map(label => {
                            return (
                                <div key={label.id} className={["label_container", (label.name === currentLabel) ? "label_border": ""].join(" ")}>
                                    <Label
                                        key={label.id}
                                        text={label.name}
                                        hideText={hideText}
                                        onClick={() => setCurrentLabel(label.name)}
                                    >
                                        <Icon iconName={label.name}/>
                                    </Label>
                                    <Conditional condition={!hideText && (label.name !== "TODOS")}>
                                        <Icon icon={deleteIcon} className="label_container_icon" onClick={() => handleDeleteClick(label.name)} />
                                    </Conditional>
                                </div>

                            )
                        })
                    }
                </div>
            </Box>
            <Conditional condition={!hideText}>
                <TodoForm direction="column" placeholderText="Add Label" maxLength={10} addTODO={(data) => dispatch({type: 'ADD_LABEL', data})}/>
            </Conditional>
        </div>
    )
}

export default SidebarContainer;