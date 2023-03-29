import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import { useHistory } from "react-router-dom";

const SearchMovie = () => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&query=${query}`;
    const history = useHistory();

    useEffect(() => {
        axios.get(URL).then((res) => {
            setData(res.data.results);
        });
    }, [URL]);//Tableau de dépendance

    const onSearch = (event) => {
        setQuery(event.target.value);
    }

    return (
        <div className="searchMovie">
            <div className="input-container">
                <input
                   className="input"
                   placeholder="Entrez un mot clé"
                   onChange={onSearch}
                ></input>
            </div>
            {query ? (
                <ul className="searchMovie-list">
                    {data.map((m) => (
                        <Movie movie={m} onClickMovie={() => history.push('/movieDetails', { id: m.id })} />
                    ))}
                </ul>
            ) : (
                <div className="placeholder-container">
                    <h4>Rien à afficher, veuillez entrer votre mot de recherche</h4>
                </div>
            )}
                           
        </div>
    )
}

export default SearchMovie;