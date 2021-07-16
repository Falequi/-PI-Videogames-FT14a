import React            from 'react'
import { Route, 
         BrowserRouter,     
         Switch }       from "react-router-dom";
import   FormVideoGame  from '../components/views/FormVideoGame';
import   Home           from '../components/views/Home';
import   DasboardRoutes from './DasboardRoutes';

const RoutersApp = () => {
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/formVideoGame"          component={ FormVideoGame } />
                    <Route path="/" component={ DasboardRoutes } />
                </Switch>
            </BrowserRouter>
    )
}

export default RoutersApp


