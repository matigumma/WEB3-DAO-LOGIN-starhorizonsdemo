import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Navigation } from './Navigation';
import { Callback } from './Callback';
import { AppProvider } from './hooks/index';

// import { useSearchParam } from 'react-use';

const App: FC = () => {
    return (
        <AppProvider>
            <Switch>
                <Route path="/callback" component={Callback} />
                <Route path="/" strict component={Navigation} />
            </Switch>
        </AppProvider>
    );
};

export default App;