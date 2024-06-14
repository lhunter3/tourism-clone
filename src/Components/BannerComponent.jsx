import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';




export function BannerComponent({article,button}){
    return (
      <div className="header d-flex justify-content-center align-items-left" style={{backgroundImage:`url('${article.image}')`}}>
        <div className="col-lg-6 col-md-12 col-sm-10 col-xs-12">
          <h1 className="">{article.title}</h1>
          <p className="">{article.desc}</p>
          {button.display && <a href={button.href} className="button-24" role="button">{button.title}</a>}
        </div>
      </div>
    );
  }