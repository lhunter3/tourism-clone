import React from 'react';
import '../App.css';

export function HeroComponent() {
  return (
    <div className="video-background">
      <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
      <link rel="preload" href="./dcvid1.mp4" as="video" type="video/mp4" />
        <source src="./dcvid1.mp4" type="video/mp4" />
      </video>
      <div className="header-content position-relative z-index-1 text-start pl-10">
        <h1 className="header-title display-1 fw-bold text-white text-start">DISCOVER CANADA</h1>
        <p className="header-description fs-5  text-white text-start">Welcome to Canada, the land of openness. Where wide open spaces inspire guests and locals welcome everyone with open hearts. All you need to bring is an open mind. And maybe a light jacket. Can’t hurt to be prepared.</p>
      </div>
    </div>
  );
};

