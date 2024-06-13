import React, { useContext } from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export function ArticleComponent({title,desc, icon=<FontAwesomeIcon icon={faArrowRight}/>, articles}) {

  
    return (
      <div className="pt-4 pl-10">
        <div className="col-xl-12 pl-color-10 d-flex justify-content-between align-items-center pb-4">
          <h1 className="display-3 font-weight-bold text-center text-sm-left">{title}</h1>
          <div className="d-flex align-items-center">
            <p className="mb-0 font-weight-bold fs-5 d-none d-sm-block">{desc}  {icon}</p>
          </div>
        </div>
        <ArticleRow articles={articles}></ArticleRow>
        
      </div>
    );
  }


  
function ArticleRow({ articles }) {
  return (
    <div className='row'>
    {
      articles.map((article, index) => (
        <div className='col-lg-4 col-md-4 pb-4 pb-lg-0' key={index}>
          <Card className="h-100 shadow-sm bg-white card-hover">
            <Card.Img src={article.image} />
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