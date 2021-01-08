import React from 'react';
import CauseEffect_v1 from './CauseEffect_v1';
import CauseEffect_v2 from './CauseEffect_v2';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';


const queryClient = new QueryClient();

const App = () => {

    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <CauseEffect_v1 />
                <CauseEffect_v2 />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </div>
    )
}

export default App
