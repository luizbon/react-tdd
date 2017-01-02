import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const app = mount(<App />);
  expect(app).toHaveLength(1);
});

describe('with breadcrumb', () => {
  const app = shallow(<App />);
  const breadcrumb = app.find('Breadcrumb');
  expect(breadcrumb).toHaveLength(1);
});
