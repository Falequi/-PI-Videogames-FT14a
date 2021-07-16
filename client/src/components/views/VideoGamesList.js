import React from 'react';
import { Link } from 'react-router-dom';
import './VideoGamesList.css';

const VideoGamesList = ({games}) => {
    return (
        <div>  
        { 
            (games !== undefined)?
            <div className="contenedor">
            {    
            games.map((games)=>
                <div key={games.id} className="item" >
                    <h5>{games.name}</h5>
                    {
                    (games.image)&&
                        <img src={games.image} alt="imagen video"/>
                    }
                    {
                    (games.genres)&&
                        <div className="gen">
                            <ul>
                                {
                                    games.genres.map(genres=>
                                        <li key={genres.id}>{genres.name}</li>
                                        )
                                }
                            </ul>
                        </div>
                    }
                    <Link to ={`/videogameId/${games.id}`} >Mas..</Link>
                </div>
            )}</div>:
            <div>Cargando... </div>
        }
        </div>
    )
}

export default VideoGamesList
