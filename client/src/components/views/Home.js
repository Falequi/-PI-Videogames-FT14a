import   React, { useEffect }  from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../styles/home.css';


import { getGenres, 
         getPages, 
         getPlatforms
          }    from '../../redux/action';
                    
const Home = () => {
           
    const dispatch =  useDispatch();

    useEffect(() => {
        const initialLoading =()=>{
             dispatch(getGenres());
             dispatch(getPlatforms());
             dispatch(getPages()); 
        };
        initialLoading();
    }, [dispatch]);
    
    return (
        <>  
        <div className="home">
            <div className="container">
                <Link to="/principal" >
                    <img className='btn-home' src="https://static.vecteezy.com/system/resources/previews/001/200/443/original/music-button-play-png.png"/>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Home





