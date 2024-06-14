import React, { useState,useEffect } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { GlobeComponent } from '../Components/GlobeComponent';
import { NavbarComponent } from '../Components/NavbarComponent';
import { BannerComponent } from '../Components/BannerComponent';
import { ArticleComponent } from '../Components/ArticleComponent';
import { FooterComponent } from '../Components/FooterComponent';
import { HeroComponent } from '../Components/HeroComponent';
import { Link } from 'react-router-dom';


export function Home() {

  const articles = [
    { title: 'Canada’s unique neighborhoods', image: 'saskatchewan.jpg', desc: 'Discover the unique neighborhoods that make up Canada’s urban landscape.' },
    { title: 'Experience Indigenous culture in the heart of the city', image: 'alberta.jpg', desc: 'Explore the rich history and vibrant culture of Canada’s Indigenous peoples.'},
    { title: 'Cultural hot spots', image: 'britishcolumbia.jpg', desc: 'Best places to experience Canada’s diverse cultural scene.'},
  ];

  const banner1 = {
    title: 'Pack your bags',
    desc: 'Places to go, things to see and what to do—all neatly laid out. Begin your adventure with a travel package tailored to fit your needs. So the only surprises on your trip will be the good kind.',
    image: 'newbrunswick',
    button: 'Explore packages',
    href: "#/packages"
  }

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 992);


  useEffect(() => {
    const resizeHandler = () => setIsLargeScreen(window.innerWidth > 992);

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);


  return (

    <React.Fragment>

      <NavbarComponent />

      <HeroComponent />

      

      <ArticleComponent articles={articles} title='Wellness' desc='Unplug and unwind'></ArticleComponent>

      <hr className='red-divider'></hr>

      { <GlobeComponent />} 

       <hr className='red-divider'></hr>

      <ArticleComponent articles={articles} title='Culture' desc='Celebrate our culture' icon={<FontAwesomeIcon icon={faArrowRight}/>}></ArticleComponent>

      <hr className='red-divider'></hr>

      <BannerComponent title={banner1.title} desc={banner1.desc} image={banner1.image} button={banner1.button} href={banner1.href}/>

      <ArticleComponent articles={articles} title='Nature' desc='Explore our wild side' icon={<FontAwesomeIcon icon={faArrowRight}/>}></ArticleComponent>
      
      <hr className='red-divider'></hr>

     
      

      <FooterComponent />

    </React.Fragment>
  );
};