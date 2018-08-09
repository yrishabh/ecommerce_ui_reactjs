import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Shop from './shop';
import Fashion from './fashion';
import Join from './join';
const main =() => (
    <Switch>
        <Route exact path="/" component = {Join}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/fashion" component={Fashion}/>
    </Switch>
)

export default main;