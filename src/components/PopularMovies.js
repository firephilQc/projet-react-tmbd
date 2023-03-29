//Imports
import React, {useState, useEffect} from "react";
import axios from "axios";
import Movie from "./Movie";
import { useHistory } from 'react-router-dom';

//Création du composant
const PopularMovies = () => {
    //Backend
    //Création de l'état popular
    const [popular, setPopular] = useState([]);
    //Récupération de l'URL
    const URL = "https://api.themoviedb.org/3/movie/popular?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&page=1";
    const history = useHistory();
    //Je vais lancer un get (consommer) sur l'API de TMDB (URL) en l'envloppant dans un useEffect
    useEffect(() => {
        axios.get(URL).then((res) => setPopular(res.data.results));
    }, []);
    
    //Front-end
    return (
        <div className="popularMovies">
            {<ul className="popularMovies-list">
                {popular.map((p) => (
                    <Movie movie={p} onClickMovie={() => history.push('/movieDetails', { id: p.id })}/>
                ))
                }
            </ul>

            }
        </div>
    )
}

export default PopularMovies;