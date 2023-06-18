// import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {Reducer} from '../Reducers/Reducer';

export const mystore = configureStore({reducer: Reducer});
