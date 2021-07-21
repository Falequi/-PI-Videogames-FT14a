import   React, 
       { useEffect, useState }          from 'react';
import { useDispatch, 
         useSelector }          from 'react-redux';

import   Search                 from './Search';
import   Filters                from './Filters';

import  Lists from './Lists';

const Principal = () => {

    const   dispatch        = useDispatch();
    const { games,
            filters,
            game_name}      = useSelector(state => state);     
    
    const [objGames, setObjGames] = useState([]);
    
        
        useEffect(() => {
            if( game_name.length > 0 ){
                setObjGames(game_name);
            }
            else{    
                setObjGames(games);
            }
        },[games,game_name,filters]);

        return (
            (objGames !== undefined) &&
            <div className="principal">
                <header className="header">
                    <Search/>
                    <Filters />
                </header>
                { 
                    <Lists objGames={objGames}/>
                }
            </div>
        )
}

export default Principal
