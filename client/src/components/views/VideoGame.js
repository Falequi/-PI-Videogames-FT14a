import    React, 
        { useEffect, 
          useState }     from 'react'
import    parse          from 'html-react-parser';
import  { useDispatch,
          useSelector }  from 'react-redux';
          
import  { getGameId }    from '../../redux/action';

const VideoGame = ({match}) => {

    const id = match.params.id;

    const dispatch = useDispatch();
    
    const gamesObj =  useSelector(state => state);

    const {game_id} = gamesObj;

    const [page, setPage] = useState(0);
    
    const handlerSiguiente = ()=>{
        setPage(page+1);
    }
    const handlerAnterior = ()=>{
        (page > 0)&&
        setPage(page-1);
    }
   
    useEffect(() => {
        dispatch(getGameId(id)); 
    },[dispatch,id]);
    
    return (
        <div>
            <h1>Video Game</h1>
            {
            (game_id !== undefined)?
            <div key={game_id.id}>
                {game_id.name}
                <br/>
                <img src={ game_id.image } alt="imagen game"/>

                <div>{parse(game_id.description)}</div>

                <ul>
                    {
                        game_id.genres.map(gender=>
                            <li 
                                key={gender.id}> 
                                {gender.name} 
                            </li>
                        )
                    }
                </ul>

                <div>{game_id.releaseDate}</div>
                
                <div>{game_id.rating}</div>
                
                <ul>
                    {
                        game_id.platforms.map(gender=>
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
            </div>:
            <div>Cargando... </div>
            }
        {
        (game_id)&&    
            <div>
            <button className="btnAnterior" onClick={handlerAnterior} >Anterior</button>
            <button className="btnSiguiente" onClick={handlerSiguiente} >Siguiente</button>
            </div>
        } 
        </div>
    )
}
export default VideoGame
