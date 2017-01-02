import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const wrapper = mount(<App />);
  expect(wrapper).toHaveLength(1);
});
