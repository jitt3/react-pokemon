import React from 'react';
import { RecoilRoot } from 'recoil';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query-devtools';
import Router from './Router';
import Loading from './components/Loading';
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
           <RecoilRoot>
               <React.Suspense fallback={<Loading message={'Loading pokedex'}/>}>
                   <ReactQueryCacheProvider queryCache={queryCache}>
                       <Router />
                       <ReactQueryDevtools initialIsOpen />
                   </ReactQueryCacheProvider>
               </React.Suspense>
           </RecoilRoot>
       </div>
    </div>
  );
}

export default App;
