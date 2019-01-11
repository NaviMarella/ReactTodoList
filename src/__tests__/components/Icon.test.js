import { shallow } from 'enzyme';
import React from 'react';
import Icon from './../../components/Icon';

describe('Icon Component', () => {
  test('render snapshot', () => {
      let props = {
        icon: <div></div>,
        iconName: "Work",
        altText: ""
      }
    const wrapper = shallow(<Icon {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('render snapshot with just icon Name', () => {
      let props = {
        iconName: "Work",
        altText: ""
      }
    const wrapper = shallow(<Icon {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('render snapshot with just icon Name Default', () => {
      let props = {
        iconName: "test123",
        altText: ""
      }
    const wrapper = shallow(<Icon {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('render snapshot with just icon Name Groceries', () => {
      let props = {
        iconName: "Groceries",
        altText: ""
      }
    const wrapper = shallow(<Icon {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('render snapshot with just icon Name TODOS', () => {
      let props = {
        iconName: "TODOS",
        altText: ""
      }
    const wrapper = shallow(<Icon {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
