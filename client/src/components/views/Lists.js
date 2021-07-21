import React, { useEffect, useState }    from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { fnFilters } from '../../assets/filters';
import { getGenres, getPages, getPlatforms } from '../../redux/action';
import loadig from '../../img/loading.gif';


const Lists = ({objGames}) => {

    var games = [];
    
    games = objGames;

    const [page, setPage] = useState(0);

    const dispatch = useDispatch();

    const { filters, 
            genres, 
            platforms} = useSelector(state => state);

    var filteredGames =[];

        /*  Paginado */

    const handlerSiguiente = (e)=>{
        e.preventDefault();
        setPage(page+1);
    };
    
    const handlerAnterior = (e)=>{
        e.preventDefault();
        (page > 0)&&
        setPage(page-1);
    };

    var limSuperior=15, limInferior=0, numPage = 0;

    filteredGames = games;

    if(filteredGames !== undefined){
        numPage = Math.ceil(filteredGames.length/15);
    }

    const btnSiguiente  = document.querySelector('.btnSiguiente');
    const btnAnterior   = document.querySelector('.btnAnterior');
    
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

    /*  Fin Paginado */

    if(filters.genre)
        games = (fnFilters(games,filters));        
    if(filters.platform)
        games =  (fnFilters(games,filters));        
    if(filters.alphabet)
        games = (fnFilters(games,filters));         
    if(filters.rating)
        games = (fnFilters(games,filters));       
        
        
        useEffect(() => {
        (games.length === 0 )&&
            dispatch(getPages()); 
        (genres.length === 0)&&
            dispatch(getGenres());
        (platforms.length === 0)&&
            dispatch(getPlatforms());
    }, [dispatch,genres,games,platforms]);


     

    if(games.length === 0)
        return( 
            <>
                <div className="contenedorList">
                    <img  src={loadig} alt="imagen.jpg"/>
                </div>
            </>
            )
    else
    return (
        <div>
        { 
            (games !== undefined)&&
                <div className="contenedorList">
                {    
                    games.slice(limInferior,limSuperior)
                    .map((games)=>
                        <div key={games.id} 
                                className="itemList" 
                        >
                            <h5>{games.name}</h5>
                            {
                            (games.image)&&
                                <img 
                                    className="imgGameList" 
                                    src={games.image} 
                                    alt="imagen video"
                                />
                            }
                            {
                            (games.genres)?
                                <div className="gen">
                                    <ul>
                                        {
                                            games.genres.map(genres=>
                                                <li key={genres.id}>
                                                    {genres.name}
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>:
                                <div className="gen">
                                    <ul>
                                        {
                                            games.genders.map(genres=>
                                                <li key={genres.id}>
                                                    {genres.name}
                                                </li>
                                                )
                                        }
                                    </ul>
                                </div>
                            }
                            <Link to ={`/videogameId/${games.id}`} >Mas..</Link>
                        </div>
                    )
                }
                </div > 
        }
            {
            (games)&&    
                <div className="btnButtonsPagination">
                    <button 
                        className="btnAnterior" 
                        onClick={handlerAnterior} 
                    >
                        Anterior
                    </button>
                    <button 
                        className="btnSiguiente" 
                        onClick={handlerSiguiente} 
                    >
                        Siguiente
                    </button>
                </div>
            }
        </div>
        )
}

export default Lists
