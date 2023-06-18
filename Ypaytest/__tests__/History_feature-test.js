import React from 'react';
import {render} from '@testing-library/react-native';
import Task2 from '../src/Screens/Task2';
import {useSelector} from 'react-redux';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

test('renders empty view when there are no items in the Redux state', () => {
  useSelector.mockReturnValue([]);
  const {getByText} = render(<Task2 />);

  expect(getByText('Add Items To List, First')).toBeTruthy();
});

test('renders items correctly when there are items in the Redux state', () => {
  const items = [
    {data: 'Item 1', number: 1},
    {data: 'Item 2', number: 2},
    {data: 'Item 3', number: 3},
  ];
  useSelector.mockReturnValue(items);
  const {getByText} = render(<Task2 />);

  expect(getByText('Item 1')).toBeTruthy();
  expect(getByText('Item 2')).toBeTruthy();
  expect(getByText('Item 3')).toBeTruthy();
});
