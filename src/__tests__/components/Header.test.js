import { shallow } from 'enzyme';
import React from 'react';
import Header from './../../components/Header';

describe('Header Component', () => {
  test('render snapshot', () => {
      let props = {
        showOrHideSidebar: jest.fn()
      }
    const wrapper = shallow(<Header {...props} />);
     wrapper.find('img').at(0).simulate('click');
     expect(props.showOrHideSidebar).toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });
});
