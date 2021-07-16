import   React, 
       { useState }         from 'react';
import { useDispatch}       from 'react-redux';
import { getGameName }      from '../../redux/action';
import { Link, Redirect }   from 'react-router-dom';



const Search = () => {

    const dispatch = useDispatch();

    const [nameGame, setNameGame] = useState("");
    
    const handlerSubmit = (e)=>{
        e.preventDefault();
        if(nameGame !== ""){  
            dispatch(getGameName(nameGame));
            <Redirect to={ `/videogameId?${nameGame}`} />
        }
        else {   
            console.log("vacio");
        }
    }
    
    const handleChange = (e)=>{
        setNameGame(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handlerSubmit}>
            <label>Buscar</label>
            <input
                name="busqueda"
                placeholder="Digite el nombre del video Juego"
                onChange={handleChange}
                value={nameGame}
                autoFocus
            />
            <Link to={`/videogameName/${nameGame}`}><button>Buscar</button></Link>
            </form>
            <Link to="/formVideoGame">Crear</Link>
        </div>
    )
}

export default Search
