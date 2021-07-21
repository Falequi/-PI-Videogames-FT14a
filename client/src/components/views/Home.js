import   React, { useEffect }  from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './home.css';


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
    }, []);
    
    return (
        <>  
        <div className="home">
        <h1 className="title">Home</h1> 
        <hr/> 
            <div className="container">
                <Link to="/principal" >
                    <button className='btn-home'>Play</button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Home





