import    React, 
        { useEffect, useState }          from 'react'
import  { useDispatch, useSelector }     from 'react-redux';
import { Link } from 'react-router-dom';
import  { getGenres, 
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
    
    const { genres, platforms } = useSelector(state => state);

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
    }, [dispatch]);

    const handlerSubmit = (e)=>{
        dispatch(postVideoGame(ForGame));
        
        platforms.map(platform=>{
            return document.querySelector(`.${platform.name}`)
            .checked=false;
        });
        
        genres.map(gender=>{
            return document.querySelector(`.${gender.name}`)
            .checked=false;
        });
        
        e.preventDefault();

    };

    const handlerChange = (e)=>{
        var name  = e.target.name;

        var value = e.target.value;

        setForGame({
            ...ForGame,
            [name] : value
        });
    };

    const handlerChangeGender = (e)=>{
        var value = e.target.value;

        setForGame({
            ...ForGame,
            genres : [...ForGame.genres,value]
        });
    };

    const handlerChangePlatform = (e)=>{

        console.log(e);

        var value = e.target.value;

        if(e.target.checked)
        setForGame({
            ...ForGame,
            platforms : [...ForGame.platforms,value]
        });
    };


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
                            <div  key={platform.id} className="itemPlatform">
                                    <input
                                        className={ platform.name}
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
                            className={ genres.name }
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
                <Link to="./formVideoGame">Nuevo</Link>
        </div>
    )
}

export default FormVideoGame
