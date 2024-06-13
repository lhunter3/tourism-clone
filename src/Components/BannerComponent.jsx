import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';




export function BannerComponent({title, desc, image, button,href}){
    return(
      <div className="header d-flex justify-content-center align-items-left" style={{backgroundImage:`url('${image}.jpg')`}}>
      <div className="col-lg-6 col-md-12 col-sm-10 col-xs-12">
        <h1 className="">{title}</h1>
        <p className="">{desc}</p>
        <a href={href} className="button-24" role="button">{button}</a>
      </div>
      
    </div>
    )
  }