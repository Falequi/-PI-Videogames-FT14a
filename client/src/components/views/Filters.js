import   React, 
       { useState }         from 'react';
import { useDispatch, 
         useSelector }      from 'react-redux';
import { clearFilter, filterAlpha, 
         filterGender, 
         filterPlatform, 
         filterRating }     from '../../redux/action';



const Filters = () => {

    const [gender,       setGender]        = useState('');
    const [platform,     setPlatform]      = useState('');
    const [alphabetical, setAlphabetical]  = useState('');
    const [rating,       setRating]        = useState('');
    
    const { genres, platforms } = useSelector((state) => state);

    const dispatch = useDispatch();

    const handlerSelGender = (e)=>{

        e.preventDefault();

        setGender(e.target.value);
        
        if(e.target.value === "Gender"){
            dispatch(filterGender(''));
        }else
            {
                setPlatform('Platform');
                setRating('Alphabetical');
                setAlphabetical('Rating');
                dispatch(clearFilter());
                dispatch(filterGender(e.target.value));
            }
            
    };

    const handlerSelPlatform = (e)=>{
        e.preventDefault();
        setPlatform(e.target.value);
        if(e.target.value === "Platform"){
            dispatch(filterPlatform(''));    
        }else{
            setGender('Gender');
            setRating('Rating');
            setAlphabetical('Alphabetical');
            dispatch(clearFilter());
            dispatch(filterPlatform(e.target.value));
        }
    };

    const handlerSelAlphabetical = (e)=>{
        e.preventDefault();
        setAlphabetical(e.target.value);
        if(e.target.value === "Alphabetical"){
            dispatch(filterAlpha(''));
        }else{
            setGender('Gender');
            setRating('Rating');
            setPlatform('Platform');
            dispatch(clearFilter());
            dispatch(filterAlpha(e.target.value));
        }
    };

    const handlerSelRating = (e)=>{
        e.preventDefault();
        setRating(e.target.value);
        if(e.target.value === "Rating"){
            dispatch(filterRating(''));
        }else{
            setGender('Gender');
            setAlphabetical('Alphabetical');
            setPlatform('Platform');
            dispatch(clearFilter());
            dispatch(filterRating(e.target.value));
        }
    };

    return (
        <>
            <div className="containerFilter">
                {
                    (genres !== undefined)&&
                    <select
                        value = {gender}
                        onChange={handlerSelGender}
                    >
                    <option defaultValue="Gender" >Gender</option>
                    {
                        genres.map( gender=>
                            <option 
                            key={ gender.id } 
                            value={gender.name}
                            >
                                {gender.name}
                            </option>
                        )
                    }
                    </select>
                }
                {
                    (platforms !== undefined)&&
                    <select
                        value = {platform}
                        onChange={handlerSelPlatform}
                    >
                    <option defaultValue="Platform" >Platform </option>
                    {
                        platforms.map( platform =>
                            <option 
                                key={ platform.id } 
                                value={platform.name}
                            >
                                { platform.name }
                            </option>
                        )
                    }
                    </select>
                }  
                    <select
                        value = { alphabetical }
                        onChange={handlerSelAlphabetical}
                    >
                    <option defaultValue="Alphabetical" > Alphabetical </option>
                    <option value="AZ"> Ascending Order (AZ) </option>
                    <option value="ZA"> Descending Order (ZA) </option>
                    </select>

                    <select
                        value = { rating }
                        onChange={handlerSelRating}
                    >
                    <option defaultValue="Rating" > Rating Order </option>
                    <option value ="ASC"> Ascending Order </option>
                    <option value ="DESC"> Descending Order </option>
                    </select>
            </div>
        </>
    )
}

export default Filters
