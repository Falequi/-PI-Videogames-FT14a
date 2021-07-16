import React, { useEffect, useState }   from 'react'
import { useDispatch, useSelector }     from 'react-redux';
import { getGenres, 
         getPlatforms, 
         postVideoGame }                from '../../redux/action';
import './formvideogame.css';

const FormVideoGame = () => {

    const [ForGame, setForGame] = useState({
        name: '',
        description:'',
        releaseDate: '', 
        rating: '',
        platforms:[],
        genres: []
    });

    const dispatch = useDispatch();
    
    const genres    = useSelector(state => state.genres);
    const platforms = useSelector(state => state.platforms);

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
    }, []);

    const handlerSubmit = (e)=>{
        e.preventDefault();
        dispatch(postVideoGame(ForGame));
    };

    const handlerChange = (e)=>{
        var name  = e.target.name;

        var value = e.target.type === 'checbox'? e.target.checked: e.target.value;

        setForGame({
            ...ForGame,
            [name] : value
        });
    };

    const handlerChangeGender = (e)=>{
        var value = e.target.type === 'checbox'? e.target.checked: e.target.value;

        setForGame({
            ...ForGame,
            genres : [...ForGame.genres,value]
        });
    };

    const handlerChangePlatform = (e)=>{
        var value = e.target.value;

        setForGame({
            ...ForGame,
            platforms : [...ForGame.platforms,value]
        });
    };

    // console.log(ForGame);

    return (
        <div>
            <h2>Formulario Video Game</h2>
            <br/>
            <form onSubmit={handlerSubmit}>
                <label >Nombre: </label>
                <input
                    name="name"
                    placeholder="Digite el nombre"
                    onChange = {handlerChange}
                    value={`${ForGame.name}`}
                />
                <br/>
                <label>Descripcion: </label>
                <input 
                    name="description"
                    placeholder="Digite el descripcion"
                    onChange = {handlerChange}
                />
                <br/>
                <label>Release Date: </label>
                <input 
                    type="date" 
                    name="releaseDate"
                    onChange = {handlerChange}
                />
                <br/>
                <label >Rating: </label>
                <input 
                    type="number"
                    name="rating"
                    placeholder="Digite el rating"
                    onChange = {handlerChange}
                />
                <br />
                <br />
                <label>Platforms: </label>
                <div className="contentPlatform">
                    {
                        (platforms !== undefined)&&
                        platforms.map(platform=>
                            <div key={platform.id} className="itemPlatform">
                                    <input
                                        type="checkbox"
                                        name="platforrm"
                                        onClick = {handlerChangePlatform}
                                        value={platform.name}
                                    /> 
                                    <label name="genres1">{platform.name}</label>
                            </div>
                            )
                    }
                </div>
                <br />
                <br />
                <label>Genres: </label>
                <div className="contentGender">
                {   
                    (genres !== undefined) &&
                    genres.map(genres=>
                    <div key={genres.id} className="itemGender">
                        <input
                            type="checkbox"
                            name="genres1"
                            onClick = {handlerChangeGender}
                            value={genres.name}
                        /> 
                        <label name="genres1">{genres.name}</label>
                    </div>
                    )
                }
                </div>
                <br/>
                <button onSubmit={handlerSubmit}> Guardar </button>
            </form>      
        </div>
    )
}

export default FormVideoGame
