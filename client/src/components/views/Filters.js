import   React, 
       { useState }         from 'react';
import { useDispatch, 
         useSelector }      from 'react-redux';
import { filterAlpha, 
         filterGender, 
         filterPlatform, 
         filterRating }     from '../../redux/action';

import './filter.css'

const Filters = () => {

    const [gender, setGender]             = useState('');
    const [platform, setPlatform]         = useState('');
    const [alphabetical, setAlphabetical] = useState('');
    const [rating, setRating]             = useState('');
    
    const { genres, platforms } = useSelector((state) => state);

    const dispatch = useDispatch();

    const handlerSelGender = (e)=>{
        e.preventDefault();
        setGender(e.target.value);
        dispatch(filterGender(e.target.value));
    };

    const handlerSelPlatform = (e)=>{
        e.preventDefault();
        setPlatform(e.target.value);
        dispatch(filterPlatform(e.target.value));
    };

    const handlerSelAlphabetical = (e)=>{
        e.preventDefault();
        setAlphabetical(e.target.value);
        dispatch(filterAlpha(e.target.value));
    };

    const handlerSelRating = (e)=>{
        e.preventDefault();
        setRating(e.target.value);
        dispatch(filterRating(e.target.value));
    };

    return (
        <>
            <div className="container">
                {
                    (genres !== undefined)&&
                    <select
                        value = {gender}
                        onChange={handlerSelGender}
                    >
                    <option defaultValue >Gender</option>
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
                    <option defaultValue >Platform </option>
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
                    <option defaultValue > Alphabetical Order </option>
                    <option value="AZ"> Ascending Order (AZ) </option>
                    <option value="ZA"> Descending Order (ZA) </option>
                    </select>

                    <select
                        value = { rating }
                        onChange={handlerSelRating}
                    >
                    <option defaultValue > Rating Order </option>
                    <option value ="ASC"> Ascending Order </option>
                    <option value ="DESC"> Descending Order </option>
                    </select>
                    <hr/>
            </div>
        </>
    )
}

export default Filters
