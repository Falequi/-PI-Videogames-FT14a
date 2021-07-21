import   React, 
       { useState }         from 'react';
import { useDispatch, useSelector}       from 'react-redux';
import { clearGameName, getGameName }      from '../../redux/action';
import { Link, Redirect }   from 'react-router-dom';

const Search = () => {

    const dispatch = useDispatch();

    const [nameGame, setNameGame] = useState("");
    
    const handleChange = (e)=>{
        setNameGame(e.target.value);
    };
     const game_name = useSelector(state => state.game_name);

    const handlerSubmit = (e)=>{
        e.preventDefault();
        if(game_name !== ""){  
            dispatch(getGameName(nameGame));
        }
        else {   
            dispatch(clearGameName());
        }
        setNameGame("");
    };

   
    return (
        <div className="containerSearch">
            <form onSubmit={handlerSubmit}>
            <label>Buscar</label>
            <input
                name="busqueda"
                placeholder="Digite el nombre del video Juego"
                onChange={handleChange}
                value={nameGame}
                autoFocus
            />
            <button type="submit">Buscar</button>
            </form>
            <Link to="/formVideoGame"><button> Crear</button></Link>
        </div>
    )
}

export default Search
