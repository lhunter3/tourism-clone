import React, { useState,useEffect } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { GlobeComponent } from '../Components/GlobeComponent';
import { NavbarComponent } from '../Components/NavbarComponent';
import { BannerComponent } from '../Components/BannerComponent';
import { ArticleDisplayComponent } from '../Components/ArticleDisplayComponent';
import { FooterComponent } from '../Components/FooterComponent';
import { HeroComponent } from '../Components/HeroComponent';



export function Articles() {

    //workaround for the issue where the page is not scrolled to the top when the page is loaded
    // window.onload = window.scrollTo(0, 0);


    const [wellnessArticles, setWellnessArticles] = useState([]);
    const [cultureArticles, setCultureArticles] = useState([]);
    const [natureArticles, setNatureArticles] = useState([]);
  
    useEffect(() => {
        fetch('articles/articles.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setWellnessArticles(data.filter(article => article.category === 'wellness'));
                setCultureArticles(data.filter(article => article.category === 'culture'));
                setNatureArticles(data.filter(article => article.category === 'nature'));
            })
            .catch(error => console.error('Error:', error));
    }, []);


    return(
        <>
         <NavbarComponent />
         
         <ArticleDisplayComponent articles={wellnessArticles} title='Wellness' desc=''></ArticleDisplayComponent>
         <ArticleDisplayComponent articles={cultureArticles} title='Culture' desc=''></ArticleDisplayComponent>
         <ArticleDisplayComponent articles={natureArticles} title='Nature' desc=''></ArticleDisplayComponent>

         <FooterComponent/>


        </>
       
    )
}