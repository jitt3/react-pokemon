import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import propTypes from 'prop-types';

const store = configureStore({
  reducer: rootReducer,
});

const ProviderWrapper = ({children}) => (
  <Provider store={store}>{children}</Provider>
);

ProviderWrapper.propTypes = {
  children: propTypes.any,
};

export default ProviderWrapper;
