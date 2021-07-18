import   React  from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {


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





