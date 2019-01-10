export const ActionTypes = {
    TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR",
    SET_CURRENT_LABEL: "SET_CURRENT_LABEL",
    ADD_TODO: "ADD_TODO",
    EDIT_TODO: "EDIT_TODO",
    DELETE_TODO: "DELETE_TODO",
    ADD_LABEL: "ADD_LABEL",
    DELETE_LABEL: "DELETE_LABEL"
};

export const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_SIDEBAR":
            return {
                ...state,
                hideSidebar: !state.hideSidebar
            }
        case "SET_CURRENT_LABEL":
            return {
                ...state,
                currentLabel: action.data
            }
        case "ADD_TODO":
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        id: getUniq(),
                        label: state.currentLabel,
                        text: action.data
                    }
                ]
            }
        case "EDIT_TODO":
            return {
                ...state,
                todoList: state.todoList.map(
                    content => (content.id === action.payload.id) ? { ...content,
                        text: action.payload.text
                    } :
                    content
                )
            }
        case "DELETE_TODO":
            return {
                ...state,
                todoList: state.todoList.filter(content => content.id !== action.payload.id)
            }
        case "ADD_LABEL":
            return {
                ...state,
                currentLabel: action.data,
                labels: [
                    ...state.labels,
                    {
                        id: getUniq(),
                        name: action.data
                    }
                ]
            }
        case "DELETE_LABEL":
        return {
            ...state,
            currentLabel: state.currentLabel === action.data ? "TODOS" : state.currentLabel,
            labels: state.labels.filter(label => label.name !== action.data),
            todoList: state.todoList.filter(todo => todo.label !== action.data)
        }
        case "TOGGLE_COMPLETE":
            return {
                ...state,
                todoList: state.todoList.map(
                    content => (content.id === action.payload.id) ? { ...content,
                        isCompleted: !content.isCompleted
                    } :
                    content
                )
            }
        default:
            return state;
    }
};

export const getUniq = function () {
    return Math.random().toString(36).substr(2, 9);
}

export const initialState = {
    hideSidebar: false,
    currentLabel: "TODOS",
    labels: [{
            id: 1,
            name: 'TODOS'
        },
        {
            id: getUniq(),
            name: 'Work'
        },
        {
            id: getUniq(),
            name: 'Groceries'
        }
    ],
    todoList: [{
            id: getUniq(),
            label: 'TODOS',
            text: "Learn React",
            isCompleted: true
        }, {
            id: getUniq(),
            label: 'Groceries',
            text: "Buy Vegetables",
            isCompleted: true
        }, {
            id: getUniq(),
            label: 'Work',
            text: "Learn Redux",
            isCompleted: false
        },
        {
            id: 4,
            label: 'Work',
            text: "Learn Jest",
            isCompleted: false
        }
    ]
};
