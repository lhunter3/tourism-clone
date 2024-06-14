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
import { Link } from 'react-router-dom';


export function Home() {

  const a = [
    { title: 'Canada’s unique neighborhoods', image: 'saskatchewan.jpg', desc: 'Discover the unique neighborhoods that make up Canada’s urban landscape.' },
    { title: 'Experience Indigenous culture in the heart of the city', image: 'alberta.jpg', desc: 'Explore the rich history and vibrant culture of Canada’s Indigenous peoples.'},
    { title: 'Cultural hot spots', image: 'britishcolumbia.jpg', desc: 'Best places to experience Canada’s diverse cultural scene.'},
  ];

  const [wellnessArticles, setWellnessArticles] = useState([]);
  const [cultureArticles, setCultureArticles] = useState([]);
  const [natureArticles, setNatureArticles] = useState([]);

  useEffect(() => {
      fetch('articles/articles.json')
          .then(response => response.json())
          .then(data => {
              console.log(data)
              setWellnessArticles(data.filter(article => article.featured === 'true' && article.category === 'wellness'));
              setCultureArticles(data.filter(article => article.featured === 'true' && article.category === 'culture'));
              setNatureArticles(data.filter(article => article.featured === 'true'&& article.category === 'nature'));
          })
          .catch(error => console.error('Error:', error));
  }, []);

  const banner1 = {
    title: 'Pack your bags',
    desc: 'Places to go, things to see and what to do—all neatly laid out. Begin your adventure with a travel package tailored to fit your needs. So the only surprises on your trip will be the good kind.',
    image: 'newbrunswick.jpg',
  }

  const btn = {
    title: 'Read more',
    href: '#/packages',
    display: 'true'
  }

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 992);


  useEffect(() => {
    const resizeHandler = () => setIsLargeScreen(window.innerWidth > 992);

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  const base= '/articles#';


  return (

    <React.Fragment>

      <NavbarComponent />

      <HeroComponent />


      <ArticleDisplayComponent articles={wellnessArticles} title='Wellness' desc='Unplug and unwind' href={`${base}wellness`}></ArticleDisplayComponent>

      <hr className='red-divider'></hr>

      { <GlobeComponent />} 

       <hr className='red-divider'></hr>

      <ArticleDisplayComponent articles={cultureArticles} title='Culture' desc='Celebrate our culture' href={`${base}culture`}></ArticleDisplayComponent>

      <hr className='red-divider'></hr>

      <BannerComponent article={banner1} button={btn}/>

      <ArticleDisplayComponent articles={natureArticles} title='Nature' desc='Explore our wild side' href={`${base}nature`}></ArticleDisplayComponent>
      
      <hr className='red-divider'></hr>

     
      

      <FooterComponent />

    </React.Fragment>
  );
};