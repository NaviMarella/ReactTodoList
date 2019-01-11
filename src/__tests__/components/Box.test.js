import React from 'react';
import { shallow } from 'enzyme';
import Box from './../../components/Box';

describe('Box Component', () => {
  test('render snapshot', () => {
      let props = {
        type: "large",
        children: <div>Test</div>
      }
    const wrapper = shallow(<Box {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('render snapshot with small size', () => {
      let props = {
        type: "small",
        children: <div>Test</div>
      }
    const wrapper = shallow(<Box {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
