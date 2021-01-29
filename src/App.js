import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import GoBackButton from "./components/GoBackButton/Index"
function App() {
  return (
    <div className="App">

    <GoBackButton/>
      <Switch>
        <Route path="#">

        </Route>
        <Route path="#">

        </Route>
        <Route path="#">
          
        </Route>
      </Switch>
    </div>
  );
}

export default App;
