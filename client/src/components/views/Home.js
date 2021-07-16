import   React  from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {

    return (
        <div>
            <h1 className="linkHome">Home</h1>
            <hr/>
            <Link to="/principal" >
                <button>Entrar</button>
            </Link>
        </div>

    )
}

export default Home





