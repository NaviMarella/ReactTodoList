import { shallow } from 'enzyme';
import React from 'react';
import TodoForm from './../../components/AddForm';

describe('Input Component', () => {
  test('render snapshot', () => {
    let props = {
        direction: "row",
        placeholderText: "Placeholder",
        maxLength: 10,
        addTODO: jest.fn()
    }

    const event = {
        preventDefault: jest.fn(),
        target: { value: 'text' }
    };
    const wrapper = shallow(<TodoForm {...props} />);
    wrapper.setState({ todoText: "test" })
    wrapper.instance().handleSubmit();
    expect(props.addTODO).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });

  test('render snapshot with column direction', () => {
      let props = {
        direction: "column",
        placeholderText: "Placeholder",
        maxLength: 10,
        addTODO: jest.fn()
      }
    const wrapper = shallow(<TodoForm {...props} />);
    wrapper.setState({
      todoText: "test"
    })
    wrapper.instance().handleInputChange("");
    expect(wrapper.state('todoText')).toEqual("")
    expect(wrapper).toMatchSnapshot();
  });

  test('render snapshot with empty input state', () => {
      let props = {
        direction: "column",
        placeholderText: "Placeholder",
        maxLength: 10,
        addTODO: jest.fn()
      }
    const wrapper = shallow(<TodoForm {...props} />);
    wrapper.setState({ todoText: "" })
    wrapper.instance().handleSubmit();
    expect(props.addTODO).toHaveBeenCalledTimes(0);
    expect(wrapper).toMatchSnapshot();
  });
});
