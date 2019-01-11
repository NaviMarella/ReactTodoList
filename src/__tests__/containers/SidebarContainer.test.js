import { shallow } from 'enzyme';
import React from 'react';
import SidebarContainer from './../../containers/SidebarContainer';

describe('SidebarContainer Component', () => {
  test('render snapshot', () => {
    let props = {
        labels:[{id: 1, name: "TODOS"}, {id: 2, name: "Work"}],
        currentLabel: "TODOS",
        hideText: false,
        dispatch: jest.fn(),
        setCurrentLabel: jest.fn()
    }
    let wrapper = shallow(<SidebarContainer {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('render snapshot with hideText', () => {
    let props = {
        labels:[{id: 1, name: "TODOS"}, {id: 2, name: "Work"}],
        currentLabel: "TODOS",
        hideText: true,
        dispatch: jest.fn(),
        setCurrentLabel: jest.fn()
    }
    let wrapper = shallow(<SidebarContainer {...props} />);
    wrapper.find("Label").at(0).simulate('click');
    wrapper.find("Icon").at(1).simulate('click');
    expect(props.dispatch).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });
});
