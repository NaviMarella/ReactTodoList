import React from 'react';
import { mount } from 'enzyme';
import { App }from "../App";
import toJson from 'enzyme-to-json';
describe('App Component', () => {
  test('render snapshot', () => {
      let props = {
          dispatch: jest.fn()
      }
    const wrapper = mount(<App {...props} />);
    console.log(wrapper.instance().props);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
