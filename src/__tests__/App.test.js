import React from 'react';
import { shallow } from 'enzyme';
import { App } from "../../src/App";

describe('App Component', () => {
  test('render snapshot', () => {
      let props = {
          dispatch: jest.fn()
      }
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
