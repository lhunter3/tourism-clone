import React, { use } from "react";
import { useParams,useNavigate } from "react-router-dom";   
import {NavbarComponent} from "../Components/NavbarComponent";
import {FooterComponent} from "../Components/FooterComponent";
import {SingleArticleComponent} from "../Components/SingleArticleComponent";


export function Article(id=1) {

    const navigate = useNavigate();
    function handleClick() {
        navigate(`/articles`);
    }

    return (
        <>
            <NavbarComponent />
            <SingleArticleComponent id={useParams()} />
            <div className="d-flex justify-content-end p-5">
                <a onClick={handleClick} className="text-white button-24" role="button">Back to Articles</a>
            </div>
            <FooterComponent bool={false} />
        </>
    );
}
