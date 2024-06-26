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



export function Packages() {

    //workaround for the issue where the page is not scrolled to the top when the page is loaded
    // window.onload = window.scrollTo(0, 0);


    const articles = [
        { title: 'Canada’s unique neighborhoods', image: 'saskatchewan.jpg', desc: 'Discover the unique neighborhoods that make up Canada’s urban landscape.' },
        { title: 'Experience Indigenous culture in the heart of the city', image: 'alberta.jpg', desc: 'Explore the rich history and vibrant culture of Canada’s Indigenous peoples.'},
        { title: 'Cultural hot spots', image: 'britishcolumbia.jpg', desc: 'Best places to experience Canada’s diverse cultural scene.'},
      ];

    return(
        <>
         <NavbarComponent />
         
         <ArticleDisplayComponent articles={articles} title='package' desc=''></ArticleDisplayComponent>
         <ArticleDisplayComponent articles={articles} title='package' desc=''></ArticleDisplayComponent>
         <ArticleDisplayComponent articles={articles} title='package' desc=''></ArticleDisplayComponent>
         <ArticleDisplayComponent articles={articles} title='package' desc=''></ArticleDisplayComponent>

         <FooterComponent />


        </>
       
    )
}