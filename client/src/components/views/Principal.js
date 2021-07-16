import   React, 
       { useEffect }     from 'react';
import { useDispatch, 
         useSelector}    from 'react-redux';
import { getGenres, getPages}       from '../../redux/action';
import   VideoGamesList  from './VideoGamesList';

const Principal = () => {

    const dispatch = useDispatch();
    
    const gamesObj =  useSelector(state => state);

    const { games } = gamesObj;

    useEffect(() => {
        dispatch(getPages()); 
    },[]);

    
    return (
            <div>
                { 
                    <VideoGamesList games={games}/>
                }
            </div>
        )
}

export default Principal
