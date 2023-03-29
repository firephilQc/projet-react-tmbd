import React from "react";
import PopularMovies from "../components/PopularMovies";
import PopularBanner from "../components/PopularBanner";
// j'ai enlever du code de Mohamed
const Popular = () => {
    return (
        <div className="popular">
            <PopularBanner/>
            <PopularMovies />
        </div>
    )

}

export default Popular;