import { shallow } from 'enzyme';
import React from 'react';
import TodoListContainer from './../../containers/TodoListContainer';

describe('TodoListContainer Component', () => {
  test('render snapshot', () => {
    let props = {
        todoList: [
            {
                id: 1,
                label: 'TODOS',
                text: "Learn React",
                isCompleted: true
            }
        ],
        currentLabel: "TODOS",
        dispatch: jest.fn()
    }
    let wrapper = shallow(<TodoListContainer {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
