import React from "react";

const Actor = (props) => {

    const {actor, onClickActor} = props;
    
    return (
        <div className="actor" onClick={onClickActor}>
            <img src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} alt="profile" />
            <div className="actorContainer">
                <li className="actorName">{actor.original_name}</li>
            </div>
        </div>
    )
}

export default Actor;