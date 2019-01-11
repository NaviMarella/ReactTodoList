import { shallow } from 'enzyme';
import React from 'react';
import TodoListItem from './../../components/TodoListItem';

describe('TodoListItem Component', () => {
  test('render snapshot', () => {
      let props = {
        todo: {
            id: 1,
            label: 'TODOS',
            text: "Learn React",
            isCompleted: true
        },
        dispatch: jest.fn()
      }
    const wrapper = shallow(<TodoListItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('render snapshot for events', () => {
      let props = {
        todo: {
            id: 1,
            label: 'TODOS',
            text: "Learn React",
            isCompleted: true
        },
        dispatch: jest.fn()
      }
    const wrapper = shallow(<TodoListItem {...props} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.instance().handleCheckboxChange();
    wrapper.instance().handleDeleteClick();
    expect(props.dispatch).toHaveBeenCalled();
  });

  test('render snapshot for tick events', () => {
      let props = {
        todo: {
            id: 1,
            label: 'TODOS',
            text: "Learn React",
            isCompleted: true
        },
        dispatch: jest.fn()
      }
    const wrapper = shallow(<TodoListItem {...props} />);
    wrapper.instance().handleEditClick();
    expect(wrapper.state('isEditMode')).toEqual(true);

    wrapper.instance().handleTickClick();
    expect(wrapper.state("isEditMode")).toEqual(false);
  });

  test('render snapshot for delete events', () => {
      let props = {
        todo: {
            id: 1,
            label: 'TODOS',
            text: "Learn React",
            isCompleted: true
        },
        dispatch: jest.fn()
      }
    const wrapper = shallow(<TodoListItem {...props} />);
     wrapper.setState({currentText: ""})
    wrapper.instance().handleInputChange("Test");
    expect(wrapper.state('currentText')).toEqual("Test");
  });
});
