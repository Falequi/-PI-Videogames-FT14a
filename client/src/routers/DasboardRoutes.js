import   React           from 'react';
import { Switch, 
         Route, 
         Redirect }      from 'react-router-dom';
import   Filters         from '../components/views/Filters';
import   Principal       from '../components/views/Principal';
import   Search          from '../components/views/Search';
import   VideoGame       from '../components/views/VideoGame';
import   VideoGameName   from '../components/views/VideoGameName';
import   VideoGamesList  from '../components/views/VideoGamesList';

const DasboardRoutes = () => {
    return (
        <div>
            <Search/>
            <Filters />
            <Switch>
                <Route exact path="/principal"              component={ Principal } />
                <Route exact path="/videogameId/:id"        component={ VideoGame } />
                <Route exact path="/videogameName/:name"    component={ VideoGameName } />
                <Route exact path="/videoGamesList"         component={ VideoGamesList } />
                <Redirect    to="/"                            component={Principal} />
            </Switch>
        </div>
    )
}

export default DasboardRoutes
