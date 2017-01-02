import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Breadcrumb } from '../src/App';

const single = [{
    text: 'Home'
}];

const double = [{
    text: 'Home',
    url: '#'
}, {
    text: 'Library'
}];

const triple = [{
    text: 'Home',
    url: '#'
}, {
    text: 'Library',
    url: '#'
}, {
    text: 'Data'
}]

storiesOf('Breadcrumbs', module)
  .addWithInfo(
    'with one item',
    'This is the basic usage with one item.',
    () => (
        <Breadcrumb items={single} />
    ))
  .addWithInfo(
    'with two items',
    'This is the usage with two items and one anchor',
    () => (
      <Breadcrumb items={double} />
    ))  
  .addWithInfo(
    'with three items',
    'This is the usage with three items and two anchor',
    () => (
      <Breadcrumb items={triple} />
    ));