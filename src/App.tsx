import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { WelcomePage, LinkPage } from './lib/pages';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={"Loading"}>
        <Switch>
          <Route exact path="/" component={WelcomePage}/>
          <Route path="/links" component={LinkPage}/>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
