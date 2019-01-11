import { shallow } from 'enzyme';
import React from 'react';
import Checkbox from './../../components/Checkbox';

describe('Checkbox Component', () => {
  test('render snapshot', () => {
      let props = {
        isChecked: true,
        handleCheckboxChange: jest.fn()
      }
    const wrapper = shallow(<Checkbox {...props} />);
     wrapper.find('input[type="checkbox"]').simulate('change',{ target: { checked: true } });
     expect(props.handleCheckboxChange).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();

  });
});
