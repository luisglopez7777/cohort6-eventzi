import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignUp from '../pages/SignUp'


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={SignUp} />
        </Switch>
    </BrowserRouter>
)




// const App = () => {
//     return <h1>Hey</h1>
// }

export default App