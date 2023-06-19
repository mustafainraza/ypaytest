import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Form from '../src/Screens/Task4Components/Form';

test('form submission triggers navigation', () => {
  const mockNavigation = {navigate: jest.fn()};
  const {getByTestId} = render(<Form navigation={mockNavigation} />);

  fireEvent.changeText(getByTestId('nameInput'), 'Mustafain Raza');
  fireEvent.changeText(getByTestId('ageInput'), '22');
  fireEvent.press(getByTestId('submitButton'));

  expect(mockNavigation.navigate).toHaveBeenCalledWith({
    name: 'Welcome',
    params: {name: 'Mustafain Raza', age: '22'},
    merge: true,
  });
});
