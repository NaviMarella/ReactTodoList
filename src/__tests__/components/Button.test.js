import { shallow } from 'enzyme';
import React from 'react';
import Button from "../../components/Button";

describe('Button Component', () => {
  test('render snapshot', () => {
      let props = {
        type: "submit",
        text: "Test Button",
        handleButtonClick: jest.fn()
      }
    const wrapper = shallow(<Button {...props} />);
     wrapper.simulate('click', { preventDefault() {} });
     expect(props.handleButtonClick).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();

  });
});
