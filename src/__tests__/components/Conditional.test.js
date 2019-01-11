import { shallow } from 'enzyme';
import React from 'react';
import Conditional from './../../components/Conditional';

describe('Conditional Component', () => {
  test('render snapshot', () => {
      let props = {
        condition: true,
        children: <div>Test</div>
      }
    const wrapper = shallow(<Conditional {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('render snapshot without condition', () => {
      let props = {
        condition: false
      }
    const wrapper = shallow(<Conditional {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
