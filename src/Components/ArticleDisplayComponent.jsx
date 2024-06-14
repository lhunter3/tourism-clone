import React, { useContext } from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Link, useNavigate } from 'react-router-dom';



export function ArticleDisplayComponent({title,desc, icon=<FontAwesomeIcon icon={faArrowRight}/>, articles, href=''}) {

  
    return (
      <section id={title.toLowerCase()}>
        <div id='articleComponent' className="pt-4 pl-10">
          <div className="col-xl-12 pl-color-10 d-flex justify-content-between align-items-center pb-4">
            <h1 className="display-3 font-weight-bold text-center text-sm-left">{title}</h1>
            <div className="d-flex align-items-center">
              
              <p className="mb-0 font-weight-bold fs-5 d-none d-sm-block">
                <Link to={href}>
                {desc}  {desc && icon}
                </Link>
              </p>
            
            </div>
          </div>
          <ArticleRow articles={articles}></ArticleRow>
          
        </div>
      </section>
    );
  }


  
function ArticleRow({ articles }) {


  const navigate = useNavigate();


  function onCardClick(article) {
    return () => {
      // console.log('article clicked', article);
      navigate(`/articles/:${article.id}`);
    
    };
  }

  return (
    <div className='row'>
    {
      articles.map((article, index) => (
        <div className='pb-4 col-lg-4 col-md-4  ' key={index} onClick={onCardClick(article)}>
          <Card className="h-100 shadow-sm bg-white card-hover">
            <Card.Img src={article.image} style={{height: '30vh', width: '100%', objectFit: 'cover'}}/>
            <Card.Body className="d-flex flex-column">
              <div className="d-flex mb-2 justify-content-between">
                <Card.Title className="mb-0 font-weight-bold">{article.title}</Card.Title>
              </div>
              <Card.Text className="text-secondary">{article.desc}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))
    }
    </div>
  );
}


