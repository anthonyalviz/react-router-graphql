import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../containers/Login'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Login}/>
        </Switch>
    )
}

export default Router