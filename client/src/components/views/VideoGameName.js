import    React, 
        { useEffect }   from 'react'
import  { useDispatch, 
          useSelector } from 'react-redux';
import  { getGameName } from '../../redux/action';

const VideoGameName = ({match}) => {

    const {name} = match.params;

    const dispatch = useDispatch();
    
    const gamesObj =  useSelector(state => state);

    const {game_name} = gamesObj;

    useEffect(() => {
        dispatch(getGameName(name)); 
    },[]);
    
    return (
        <div>
            <h1>Video Game</h1>
            {
            (game_name !== undefined)?
            game_name.map( game=>
                <div key={game.id}>
                    {game.name}
                    <img src={ game.image} alt="imagen video"/>
                </div>
            ):
            <div>Cargando... </div>
            }
        </div>
    )
}

export default VideoGameName
