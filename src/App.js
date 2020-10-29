import React from 'react';
import {QueryCache, ReactQueryCacheProvider} from "react-query";
import Router from './Router';
import './App.scss';

const queryCache = new QueryCache({
    defaultConfig: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})

function App() {
  return (
    <div className="App">
       <div className='App__container'>
           <React.Suspense fallback={'Loading pokedex...'}>
               <ReactQueryCacheProvider queryCache={queryCache}>
                   <Router />
               </ReactQueryCacheProvider>
           </React.Suspense>
       </div>
    </div>
  );
}

export default App;
