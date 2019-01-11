import { shallow } from 'enzyme';
import React from 'react';
import Label from './../../components/Label';

describe('Label Component', () => {
  test('render snapshot', () => {
      let props = {
        text: "Label1",
        hideText: false,
        crossText: false,
      }
    const wrapper = shallow(<Label {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('render snapshot with hideText', () => {
      let props = {
        text: "Label1",
        hideText: true,
        crossText: false,
      }
    const wrapper = shallow(<Label {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('render snapshot with crossText', () => {
      let props = {
        text: "Label1",
        hideText: false,
        crossText: true,
      }
    const wrapper = shallow(<Label {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
