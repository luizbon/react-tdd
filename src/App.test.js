import React from 'react';
import { mount, shallow } from 'enzyme';
import App, { Breadcrumb } from './App';

it('renders without crashing', () => {
  const app = mount(<App />);
  expect(app).toHaveLength(1);
});

describe('with breadcrumb', () => {
  it('should render breadcrumb', () => {
    const app = shallow(<App />);
    const breadcrumb = app.find('Breadcrumb');
    expect(breadcrumb).toHaveLength(1);
  })

  it('should render ul', () => {
    const breadcrumb = shallow(<Breadcrumb />);
    const ul = breadcrumb.find('ul');
    expect(ul).toHaveLength(1);
  })
});
