import React from 'react';
import {QueryCache, ReactQueryCacheProvider} from "react-query";
import Router from './Router';
import Loading from "./components/Loading";
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
           <React.Suspense fallback={<Loading message={'Loading pokedex...'}/>}>
               <ReactQueryCacheProvider queryCache={queryCache}>
                   <Router />
               </ReactQueryCacheProvider>
           </React.Suspense>
       </div>
    </div>
  );
}

export default App;
