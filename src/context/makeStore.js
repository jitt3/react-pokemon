import { createContext, useReducer, useContext } from 'react';
export default function makeStore(name, reducer, initialState) {
    const dispatchContext = createContext();
    const storeContext = createContext();

    const StoreProvider = ({children}) => {
        const [store, dispatch] = useReducer(reducer, initialState);

        return (
            <dispatchContext.Provider value={dispatch}>
                <storeContext.Provider value={store}>
                    {children}
                </storeContext.Provider>
            </dispatchContext.Provider>
        )
    }

    function useDispatch() {
        const dispatchCtx = useContext(dispatchContext);
        if(dispatchCtx === undefined) {
            throw new Error(`dispatch must be used within a ${name} provider`)
        }
        return dispatchCtx;
    }

    function useStore() {
        const storeCtx = useContext(storeContext);
        if(storeCtx === undefined) {
            throw new Error(`dispatch must be used within a ${name} provider`)
        }
        return storeCtx;
    }

    return [StoreProvider, useStore, useDispatch];
}
