import * as React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
// import configureStore from 'redux-mock-store';

import SearchRepositoriesList from './index';

describe('<SearchRepositoriesList />', () => {
  describe('render()', () => {
    test('renders component', () => {
      const submitHandler = jest.fn();
      const component = shallow(<SearchRepositoriesList handleSubmit={submitHandler}/>);

      expect(toJson(component)).toMatchSnapshot()
    })
  });
  describe('submit form', () => {
    test('form is not submit if not set data in input', () => {
      const submitHandler = jest.fn();
      const event = Object.assign(submitHandler, {
        preventDefault: () => {}
      });
      const component = shallow(<SearchRepositoriesList handleSubmit={submitHandler}/>);

      component.find('button').simulate('click', event);
      expect(submitHandler).not.toHaveBeenCalled();
    });
    test('set value in input and form is submit', () => {
      const submitHandler = jest.fn();
      const event = Object.assign(submitHandler, {
        preventDefault: () => {}
      });
      const value = 'test';
      const mountedComponent = mount(<SearchRepositoriesList handleSubmit={submitHandler}/>);
      const input = mountedComponent.find('input');

      input.instance().value = value;
      input.simulate('change');

      /*checks setting data into input*/
      expect(mountedComponent.state().value).toEqual(value);

      mountedComponent.simulate('submit', event);

      /*form submission check*/
      expect(submitHandler).toHaveBeenCalled();
    });
  })
});
