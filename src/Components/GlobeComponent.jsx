import React, { useState, useEffect, useRef, useMemo } from 'react';
import Globe from 'react-globe.gl';
import * as d3 from 'd3';
import * as THREE from 'three';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';

export function GlobeComponent() {
  const COUNTRIES_URL = 'ne_110m_admin_0_countries.geojson';
  const CITIES_URL = 'canada_cities.json';
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const [countries, setCountries] = useState(null);
  const [cities, setCities] = useState(null);
  const [hoverD, setHoverD] = useState(null);
  const [maxVal, setMaxVal] = useState(0);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [globeRadius, setGlobeRadius] = useState();
  const [scale, setScale] = useState(1);
  const globeEl = useRef();
  const colorScale = d3.scaleSequentialSqrt(d3.interpolateYlOrRd);
  const getVal = (feat) => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);

  const BASE = '#/packages#';


  
  const fetchData = async () => {
    const responseCountries = await fetch(COUNTRIES_URL);
    const dataCountries = await responseCountries.json();
    //setCountries(dataCountries);

    const maxVal = Math.max(...dataCountries.features.map(getVal));
    //setMaxVal(maxVal);
    colorScale.domain([0, maxVal]);

    const responseCities = await fetch(CITIES_URL);
    const dataCities = await responseCities.json();
    //setCities(dataCities);

    return{dataCountries,dataCities,maxVal};
  };

  const handleHover = (d) => {
    setHoverD(d);
  };

  useEffect(() => {










    globeEl.current.controls().enableZoom = false;



    fetchData().then(({ dataCountries, dataCities, maxVal}) => {
      setCountries(dataCountries);
      setCities(dataCities);
      setMaxVal(maxVal);
    });

    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: 59.8951, lng: -97.1384, altitude: 0.7 }, 30);
    }

    setGlobeRadius(globeEl.current.getGlobeRadius());
    globeEl.current.pointOfView({ altitude: 3.5 });

    const updateScale = () => {
      const { innerWidth, innerHeight } = window;
      let newScale = Math.min(innerWidth / 1200, innerHeight / 800);
      newScale = Math.min(newScale, 1); // Ensure scale never exceeds 1
      setScale(newScale);
    };

    window.addEventListener('resize', updateScale);
    updateScale();

    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const polygonLabel = ({ properties: d }) => (`<p style="color:white;">${d.name}</p>`);

  const satObject = useMemo(() => {
    if (!globeRadius) return undefined;

    const satGeometry = new THREE.OctahedronGeometry(80 * globeRadius / 6371 / 2, 0);
    const satMaterial = new THREE.MeshLambertMaterial({ color: 'red', transparent: true, opacity: 1 });
    return new THREE.Mesh(satGeometry, satMaterial);
  }, [globeRadius]);


  const handleClick = (d) => {
    if (d) {
      var coordinates = d.geometry.coordinates[0][0]

      var centroid = coordinates.reduce((prev, curr) => {
        return [prev[0] + curr[0] / coordinates.length, prev[1] + curr[1] / coordinates.length];
      }, [0, 0]);


      setSelectedProvince(d.properties.name);
      var altitude = Math.abs(centroid[0]) < 70.0 ? 0.3 : 0.6;
      globeEl.current.pointOfView({ lat: centroid[1], lng: centroid[0], altitude: altitude }, 400);



      var cardBox = document.getElementById('cardbox');

      cardBox.setAttribute('class', 'alternate-container-box');

      var cardItems = document.getElementById('cardItems');

      var btn = document.createElement('button');
      btn.id = 'btn1';
      btn.className = 'button-24';
      btn.role = 'button';
      btn.textContent = 'Explore packages';
      btn.onclick = function () {
        console.log("clicked btn");
        window.location.href = `${BASE}`+d.properties.name.toLowerCase().replace(/\s/g, '');
      };

      if (!cardItems.lastChild || cardItems.lastChild.id !== 'btn1') {
        cardItems.appendChild(btn);
      }
      btn.src = '#';

      var cardSubTitleId = document.getElementById('cardSubTitle');
      cardSubTitleId.innerText = d.properties.name;
      cardSubTitleId.style.visibility = 'hidden';

      var cardTitle = document.getElementById('cardTitle');
      cardTitle.innerText = d.properties.name;
      cardTitle.style.fontSize = '3vw';



      var cardDescID = document.getElementById('cardDesc');
      //cardDescID.innerText = "\n";


    }

  };


  const [isClicked, setIsClicked] = useState(false);

  const handleMouseClick = () => {
    console.log('clicked');
    setIsClicked(!isClicked);
  };

  return (



    <div className='globe-container'>


      {/* <div className='row justify-content-center d-md-none pr-10 pl-10'>

        
        <Select
       style={{
        color: 'black',
        display: 'inline-block',
        fontSize: 12,
        fontStyle: 'italic',
        marginTop: '1em',
      }}
          options={countries?.features?.map(d => ({ value: d.properties.name }))}
          value={selectedProvince}
          onChange={(d) => handleClick()}
          
        />
      </div> */}

      <div className='d-none d-md-block'>
      <div id='globeContainerId' className="m-md-3 m-lg-5">
        <div id='cardbox' className="container-box" style={{ transform: `scale(${scale})` }}>
          <div id='cardItems' className='pb-4 pt-4'>
            <div>
              <div id='imageBox' className='imageBox'>
                <span id='cardSubTitle' className="fs-4">Plan your trip</span>
                <h1 id='cardTitle' className="fs-1">Top Destinations in Canada</h1>
              </div>
              <p id='cardDesc' className="fs-5">From the majestic Rockies to the vibrant cityscapes. Explore iconic destinations like Niagara Falls, Banff, and the cultural charm of Quebec City.  See why off season is the right season to enjoy Canada.</p>
            </div>
          </div>
        </div>
      </div>


      </div>
      


    <div className='map-container'>

      <Globe
        height={windowHeight -windowHeight/4}
        width={windowWidth}
        ref={globeEl}
        showGlobe={false}
        showAtmosphere={false}
        backgroundColor="rgba(0,0,0,0)"
        polygonsData={countries?.features?.filter(d => d.properties.ISO_A2 !== 'AQ')}
        onPolygonHover={handleHover}
        onPolygonClick={handleClick}
        lineHoverPrecision={0}
        polygonCapColor={d => d === hoverD ? 'rgba(20,20,20, 1)' : 'rgba(40,40,40, 1)'}
        polygonSideColor={() => 'rgba(0, 0, 0, 0)'}
        polygonStrokeColor={() => 'rgba(0, 0, 0, .1)'}
        polygon
        polygonsTransitionDuration={900}
        // polygonLabel={polygonLabel}


        objectsData={Object.values(cities || {})}
        object
        objectLat="lat"
        objectLng="lng"
        objectColor={() => 'rgba(255, 0, 0, )'}
        objectAltitude={0.01}
        objectThreeObject={satObject}
      />

</div>
    </div>

  );
};



function GlobeCardComponent() {
  return (
    <div className="card-container">
      <Card className="card">
        <Card.Img id='cardImage' variant="top" src="public/alberta.jpg" />
        <Card.Body className="card-body">
          <div className="card-title-container">
            <Card.Title id='cardTitle' className="card-title">Alberta</Card.Title>
          </div>
          <Card.Text id='cardDesc' className="card-text">Alberta is a province in Western Canada. Its landscape encompasses mountains, prairies, desert badlands and vast coniferous forests.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}