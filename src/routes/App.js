import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'


const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component={SignUp} />
                <Route exact path='/login' component={Login} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App