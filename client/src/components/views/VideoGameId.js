import    React, 
        { useEffect }    from 'react'
import    parse          from 'html-react-parser';
import  { useDispatch,
          useSelector }  from 'react-redux';
          
import  { getGameId }    from '../../redux/action';
import { Link } from 'react-router-dom';

const VideoGame = ({match}) => {
    
    const id = match.params.id;
    
    const dispatch = useDispatch();
    
    const gamesObj =  useSelector(state => state);
    
    const {game_id} = gamesObj;
    
    useEffect(() => {
        dispatch(getGameId(id)); 
    },[dispatch,id]);
    
    return (
        <div className="containerVideoGameId">
            {
            (game_id !== undefined)?
            <div className="cardVideogameId">
                <h2 className="titelVideoGameId">{game_id.name}</h2>
                <br/>
                <div>{game_id.releaseDate}</div>
                <div>{game_id.rating}</div>
                <img className="imgVideoGameId" src={ game_id.image } alt="imagen game"/>

                <div className="descriptionVideoGameId">
                    { (game_id.description) && parse(game_id.description)}
                </div>
                <div className="ensayo">
                <div className="ulGenresVideoGameID">
                    <h4>Genders</h4>
                    <ul >
                        {
                            (game_id.genres)&& game_id.genres.map(gender=>
                                <li 
                                    key={gender.id}> 
                                    {gender.name} 
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="ulGenresVideoGameID">
                    <h4>Platforms</h4>              
                    <ul>
                        {
                            (game_id.platforms)&&game_id.platforms.map(gender=>
                                (!gender.platform)?
                                <li 
                                    key={gender.id}> 
                                    {gender.name} 
                                </li>:
                                <li 
                                    key={gender.platform.id}> 
                                    {gender.platform.name} 
                                </li>
                            )
                        }
                    </ul>
                </div>
                </div>
                <Link to="/principal"> <button>Volver</button></Link>
            </div>:
            <div>Cargando... </div>
            }

           
    </div>
    )
}
export default VideoGame
