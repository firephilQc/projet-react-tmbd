import React from "react";
import CategoriesMovies from "../components/CategoriesMovies";

const Categories = (props) => {

    const id = props.location.state?.id;
    const name = props.location.state?.name;
    return (
        <div className="categories">
            <CategoriesMovies idGenre={id} nameGenre={name} />
        </div>
    )

}

export default Categories;