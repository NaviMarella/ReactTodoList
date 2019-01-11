import { shallow } from 'enzyme';
import React from 'react';
import Input from './../../components/Input';

describe('Input Component', () => {
  test('render snapshot', () => {
      let props = {
        placeholder: "Add a Note",
        type: "text",
        value: "Input Text",
        handleInput: jest.fn()
      }

    const event = {
        preventDefault: jest.fn(),
        target: { value: 'text' }
    };
    const wrapper = shallow(<Input {...props} />);
    wrapper.find('input').simulate('change', event);
    expect(props.handleInput).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });
});
