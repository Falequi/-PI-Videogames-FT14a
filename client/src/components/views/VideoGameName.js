import    React, 
        { useEffect, useState }   from 'react'
import  { useDispatch, 
          useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import  { getGameName } from '../../redux/action';


const VideoGameName = ({match}) => {

    const dispatch          = useDispatch();    
    const { name }          = match.params;
    const { game_name }      = useSelector(state => state);

    useEffect(() => {
        dispatch(getGameName(name)); 
    },[dispatch,name]);
    
    return (
        <div>
            <h1>Video Game</h1>
            {
            (game_name !== undefined)?
            <div className="contenedor">
            {
                game_name.map( game=>
                    <div key={game.id} className="item">
                        <h4>{game.name}</h4>
                        <img src={ game.image} alt="imagen video"/>
                        <br/>
                        <br/>
                        <div><Link to ={`/videogameId/${game.id}`} >Mas..</Link></div>
                    </div>
                )
            }
            </div>:
            <div>Cargando... </div>
            }
        </div>
    )
}

export default VideoGameName
