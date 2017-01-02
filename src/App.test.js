import React from 'react';
import { mount, shallow } from 'enzyme';
import App, { Breadcrumb } from './App';

it('renders without crashing', () => {
  const app = mount(<App />);
  expect(app).toBePresent();
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
    expect(ul).toBePresent();
  })

  it('should render li', () => {
    const items = ['step 1', 'step 2'];
    const breadcrumb = shallow(<Breadcrumb items={items} />)
    const li = breadcrumb.find('li');
    expect(li).toHaveLength(2);
    items.forEach((item, index) => {
      expect(li.at(index)).toHaveText(items[index]);
    })
  });
});
