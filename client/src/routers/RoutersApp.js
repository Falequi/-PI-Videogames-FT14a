import React            from 'react'
import { Route, 
         BrowserRouter,     
         Switch, 
         Redirect}      from 'react-router-dom';
import   FormVideoGame  from '../components/views/FormVideoGame';
import   Home           from '../components/views/Home';
import   Lists          from '../components/views/Lists';
import   Principal      from '../components/views/Principal';
import   VideoGameId    from '../components/views/VideoGameId';


const RoutersApp = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path= "/" component={ Home } />
                <Route exact path= "/formVideoGame"          component={ FormVideoGame } />
                <Route exact path= "/principal"              component={ Principal } />
                <Route exact path= "/videogameId/:id"        component={ VideoGameId } />
                <Route exact path= "/list"                   component={ Lists } />
                <Redirect    to="/ "                         component={Principal} />
            </Switch>
        </BrowserRouter>
    )
}

export default RoutersApp


