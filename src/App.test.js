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

  
  describe('with li items', () => {
    const items = [{
      text: 'step 1',
      url: 'http://localhost:3000/'
    }, {
      text: 'step 2'
    }];
    const breadcrumb = shallow(<Breadcrumb items={items} />)
      const li = breadcrumb.find('li');

    it('should render correct number', () => {
      expect(li).toHaveLength(2);
    });

    it('should render text', () => {
      items.forEach((item, index) => {
        expect(li.at(index)).toHaveText(items[index].text);
      })
    })

    it('should render anchors', () => {
      const anchor = li.at(0).find('a');
      expect(anchor).toBePresent();
    });
  });
});
