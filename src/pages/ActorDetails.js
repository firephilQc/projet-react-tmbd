import React, { useState, useEffect } from "react";
import axios from "axios";

const ActorDetails = (props) => {

    const id = props.location.state.id;
    const URL = `https://api.themoviedb.org/3/person/${id}?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US`;
    const [detail, setDetail] = useState({});

    useEffect(() => {
        axios.get(URL).then((res) => {
            setDetail(res.data);
        });
    }, [URL]);

    
    return (
        <React.Fragment>
            <div className="details-container">
                <div class="movie_card" id="bright">
                    <div className="info_section">
                        <div className="movie_header">
                            <img 
                               className="locandina"
                               src={`https://image.tmdb.org/t/p/original/${detail.profile_path}`}
                               alt="poster" 
                            />
                            <h1>{detail.name}</h1>
                            <h4>{detail.birthday}</h4>
                            <span className="minutes">Place of birth : {detail.place_of_birth}</span>
                        </div>
                        <div className="movie_desc">
                            <p className="text">{detail.biography}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-container">
            </div>
        </React.Fragment>
    )
}

export default ActorDetails;