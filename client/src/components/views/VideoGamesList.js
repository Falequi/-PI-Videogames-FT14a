import   React, { useEffect, useState }  from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './VideoGamesList.css';

const VideoGamesList = () => {

    var filteredGames =[];

    const {games, filters} = useSelector(state => state);

    
    const [page, setPage] = useState(0);
    
    const handlerSiguiente = (e)=>{
        e.preventDefault();
        setPage(page+1);
    };
    
    const handlerAnterior = (e)=>{
        e.preventDefault();
        (page > 0)&&
        setPage(page-1);
    };
    
    (games) &&  (filteredGames = games);

    useEffect(() => {
        // console.log("cambio");
    }, [filters]);

    if(filters !== undefined){

        filteredGames = [];

        if(filters.genre){
            games.map(game =>
            game.genres.map(
                genre =>{ 
                if(genre.name === filters.genre)
                 filteredGames.push(game);
                }));
        }

        if(filters.platform){
            games.map(game =>
            game.platforms.map(
                platform =>{ 
                if(platform.platform.name === filters.platform)
                 filteredGames.push(game);
                }));
        }

        if(filters.alphabet){
            if(filters.alphabet === 'AZ'){
                    filteredGames = games.sort(function(a, b) {
                        var textA = a.name;
                        var textB = b.name;
                        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                    });
            }else{
                filteredGames = games.sort(function(a, b) {
                    var textA = a.name;
                    var textB = b.name;
                    return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
                })
            }
        }

        if(filters.rating){
            if(filters.rating === 'ASC'){
                    filteredGames = games.sort(function(a, b) {
                        var textA = a.rating;
                        var textB = b.rating;
                        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                    });
            }else{
                filteredGames = games.sort(function(a, b) {
                    var textA = a.rating;
                    var textB = b.rating;
                    return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
                })
            }
        }


        // console.log(filteredGames.length);
    }
            
    /*  Paginado */
    var limSuperior=15, limInferior=0, numPage = 0;

    if(filteredGames !== undefined){
        numPage = Math.ceil(filteredGames.length/15);
    }

    const btnSiguiente = document.querySelector('.btnSiguiente');
    const btnAnterior = document.querySelector('.btnAnterior');
    
    if(btnSiguiente !== null &&  btnAnterior !== null)
    {
        if(page < numPage){
            limSuperior = page*15 + 15;
            btnSiguiente.disabled=false;
            if(page+1 === numPage)
                btnSiguiente.disabled=true;
        }else 
            btnSiguiente.disabled=true;

        if(page > 0){
            limInferior = limSuperior - 15;
            btnAnterior.disabled=false;
        }else
            btnAnterior.disabled=true;
    }
    
        // console.log(
        //     "pagina: ", page,
        //     "limSuperior: ", limSuperior, 
        //     "limInferior: ",limInferior);

    /*  Fin Paginado */

    return (
        <div>  
        { 
            (games !== undefined)?
            <div className="contenedor">
            {    
                filteredGames.slice(limInferior,limSuperior).map((games)=>
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
                )
            }
            </div>:
            <div>Cargando... </div>
        }
        {
        (games)&&    
            <div>
            <button className="btnAnterior" onClick={handlerAnterior} >Anterior</button>
            <button className="btnSiguiente" onClick={handlerSiguiente} >Siguiente</button>
            </div>
        }
        </div>
    )
}

export default VideoGamesList
