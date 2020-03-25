import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" componet={Logon} />
                <Route path="/register" componet={Register} />
            </Switch>
        </BrowserRouter>
    )
}