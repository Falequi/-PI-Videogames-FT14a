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
    // const [ page, setPage]  = useState(0);
    
    // const handlerSiguiente = (e)=>{
    //       e.preventDefault();
    //       setPage(page+1);
    // }

    // const handlerAnterior = ()=>{
    //       (page > 0)&&
    //       setPage(page-1);
    // }

    // var limSuperior=15, limInferior=0, numPage = 0;

    // if(game_name !== undefined){
    //     numPage = Math.ceil(game_name.length/15);
    // }

    // const btnSiguiente = document.querySelector('.btnSiguiente');
    // const btnAnterior = document.querySelector('.btnAnterior');
    
    // if(btnSiguiente !== null &&  btnAnterior !== null)
    // {
    //     if(page < numPage){
    //         limSuperior = page*15 + 15;
    //         btnSiguiente.disabled=false;
    //         if(page+1 === numPage)
    //             btnSiguiente.disabled=true;
    //     }else 
    //         btnSiguiente.disabled=true;

    //     if(page > 0){
    //         limInferior = limSuperior - 15;
    //         btnAnterior.disabled=false;
    //     }else
    //         btnAnterior.disabled=true;
    // }

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
              {/* {
        (game_name)&&    
            <div>
                <br/>
                <br/>
            <button className="btnAnterior" onClick={handlerAnterior} >Anterior</button>
            <button className="btnSiguiente" onClick={handlerSiguiente} >Siguiente</button>
            </div>
        } */}
        </div>
    )
}

export default VideoGameName
