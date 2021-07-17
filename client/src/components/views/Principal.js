import   React, 
       { useEffect }     from 'react';
import { useDispatch }    from 'react-redux';
import { getGenres, getPages, getPlatforms}       from '../../redux/action';
import   VideoGamesList  from './VideoGamesList';

const Principal = () => {

    const dispatch = useDispatch();
    
    // const { games } =  useSelector(state => state);

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
        dispatch(getPages()); 
    },[dispatch]);

    
    return (
            <div>
                { 
                    // <VideoGamesList games={games}/>
                    <VideoGamesList />
                }
            </div>
        )
}

export default Principal
