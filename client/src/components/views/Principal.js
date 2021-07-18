import   React, 
       { useEffect }      from 'react';
import { useDispatch }    from 'react-redux';
import { getGenres, 
         getPages, 
         getPlatforms}    from '../../redux/action';
import   VideoGamesList   from './VideoGamesList';

import './principal.css';

const Principal = () => {

    const dispatch = useDispatch();
    
    // const { games } =  useSelector(state => state);

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
        dispatch(getPages()); 
    },[dispatch]);

    
    return (
            <div className="container">
                { 
                    // <VideoGamesList games={games}/>
                    <VideoGamesList />
                }
            </div>
        )
}

export default Principal
