import {configureStore} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = configureStore({
    reducer: rootReducer
});

const ProviderWrapper = ({children}) => (
    <Provider store={store}>
        {children}
    </Provider>
);


export default ProviderWrapper
